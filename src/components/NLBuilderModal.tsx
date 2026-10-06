import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Sparkles, Send, Loader2, Check, AlertCircle, Edit3, Mic, MicOff } from 'lucide-react';
import { useAppStore } from '../store/appStore';
import { useI18n } from '../i18n';
import type { StaticKey } from '../i18n';
import type { Ontology } from '../data/ontology';

// Web Speech API types
interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
  resultIndex: number;
}

interface SpeechRecognitionResultList {
  length: number;
  item(index: number): SpeechRecognitionResult;
  [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionResult {
  isFinal: boolean;
  length: number;
  item(index: number): SpeechRecognitionAlternative;
  [index: number]: SpeechRecognitionAlternative;
}

interface SpeechRecognitionAlternative {
  transcript: string;
  confidence: number;
}

interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  onerror: ((event: Event) => void) | null;
  onend: (() => void) | null;
  start(): void;
  stop(): void;
  abort(): void;
}

declare global {
  interface Window {
    SpeechRecognition: new () => SpeechRecognition;
    webkitSpeechRecognition: new () => SpeechRecognition;
  }
}

interface NLBuilderModalProps {
  onClose: () => void;
}

type Step = 'input' | 'loading' | 'preview' | 'error';

// Voice errors are component-owned copy; store the key and translate at render.
type VoiceErrorKey = 'modal.nlBuilder.voiceNetwork' | 'modal.nlBuilder.voiceDenied' | 'modal.nlBuilder.voiceStartFailed';

export function NLBuilderModal({ onClose }: NLBuilderModalProps) {
  const { t } = useI18n();
  const [description, setDescription] = useState('');
  const [step, setStep] = useState<Step>('input');
  const [generatedOntology, setGeneratedOntology] = useState<Ontology | null>(null);
  // Raw pass-through error text (e.g. API messages); localized errors use
  // errorKey and are translated at render scope.
  const [error, setError] = useState<string | null>(null);
  const [errorKey, setErrorKey] = useState<StaticKey | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [editedJson, setEditedJson] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [voiceSupported, setVoiceSupported] = useState(false);
  const [voiceError, setVoiceError] = useState<VoiceErrorKey | null>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const shouldKeepListeningRef = useRef(false);

  const loadOntology = useAppStore((state) => state.loadOntology);

  // Check for speech recognition support
  useEffect(() => {
    const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
    setVoiceSupported(!!SpeechRecognitionAPI);
  }, []);

  const startRecording = () => {
    const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognitionAPI) {
      console.error('Speech recognition not supported');
      return;
    }

    setVoiceError(null);
    shouldKeepListeningRef.current = true;
    setIsRecording(true);
    
    const createRecognition = () => {
      const recognition = new SpeechRecognitionAPI();
      recognition.continuous = false; // Use non-continuous mode and restart manually
      recognition.interimResults = false; // Only get final results
      recognition.lang = 'en-US';

      recognition.onresult = (event: SpeechRecognitionEvent) => {
        const transcript = event.results[0][0].transcript;
        if (transcript) {
          setDescription(prev => prev + transcript + ' ');
        }
      };

      recognition.onerror = (event) => {
        const errorEvent = event as Event & { error?: string };
        console.log('Speech error:', errorEvent.error);
        
        // Handle specific errors
        if (errorEvent.error === 'network') {
          setVoiceError('modal.nlBuilder.voiceNetwork');
          shouldKeepListeningRef.current = false;
          setIsRecording(false);
          return;
        }

        if (errorEvent.error === 'service-not-allowed' || errorEvent.error === 'not-allowed') {
          setVoiceError('modal.nlBuilder.voiceDenied');
          shouldKeepListeningRef.current = false;
          setIsRecording(false);
          return;
        }
        
        // Don't stop on no-speech, just restart
        if (errorEvent.error === 'no-speech' && shouldKeepListeningRef.current) {
          setTimeout(() => {
            if (shouldKeepListeningRef.current) {
              recognitionRef.current = createRecognition();
            }
          }, 100);
          return;
        }
        
        if (errorEvent.error !== 'aborted') {
          shouldKeepListeningRef.current = false;
          setIsRecording(false);
        }
      };

      recognition.onend = () => {
        console.log('Recognition ended, shouldKeep:', shouldKeepListeningRef.current);
        if (shouldKeepListeningRef.current) {
          // Restart with a fresh instance - use longer delay for Edge
          setTimeout(() => {
            if (shouldKeepListeningRef.current) {
              recognitionRef.current = createRecognition();
            }
          }, 200);
        } else {
          setIsRecording(false);
        }
      };

      try {
        recognition.start();
        console.log('Recognition started');
      } catch (e) {
        console.error('Start failed:', e);
        setVoiceError('modal.nlBuilder.voiceStartFailed');
        shouldKeepListeningRef.current = false;
        setIsRecording(false);
      }
      
      return recognition;
    };
    
    recognitionRef.current = createRecognition();
  };

  const stopRecording = () => {
    console.log('Stopping speech recognition...');
    shouldKeepListeningRef.current = false;
    if (recognitionRef.current) {
      try {
        recognitionRef.current.abort();
      } catch {
        // Ignore
      }
      recognitionRef.current = null;
    }
    setIsRecording(false);
  };

  const toggleRecording = () => {
    console.log('Toggle recording, current state:', isRecording);
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  const handleGenerate = async () => {
    if (!description.trim()) return;

    setStep('loading');
    setError(null);
    setErrorKey(null);

    try {
      const response = await fetch('/api/generate-ontology', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description: description.trim() }),
      });

      if (!response.ok) {
        const data = await response.json();
        if (data.error) {
          setError(String(data.error));
          setErrorKey(null);
        } else {
          setError(null);
          setErrorKey('modal.nlBuilder.generateFailed');
        }
        setStep('error');
        return;
      }

      const { ontology } = await response.json();

      // Assign default colors if missing
      const defaultColors = ['#0078D4', '#107C10', '#5C2D91', '#FFB900', '#D83B01', '#00A9E0', '#8764B8', '#00B294'];
      ontology.entityTypes = ontology.entityTypes.map((entity: { color?: string }, index: number) => ({
        ...entity,
        color: entity.color || defaultColors[index % defaultColors.length]
      }));

      setGeneratedOntology(ontology);
      setEditedJson(JSON.stringify(ontology, null, 2));
      setStep('preview');
    } catch (err) {
      if (err instanceof Error) {
        setErrorKey(null);
        setError(err.message);
      } else {
        setError(null);
        setErrorKey('modal.nlBuilder.errorUnknown');
      }
      setStep('error');
    }
  };

  const handleApply = () => {
    if (!generatedOntology) return;

    try {
      const ontologyToApply = editMode ? JSON.parse(editedJson) : generatedOntology;
      loadOntology(ontologyToApply);
      handleClose();
    } catch {
      setError(null);
      setErrorKey('modal.nlBuilder.invalidJson');
    }
  };

  const handleClose = () => {
    shouldKeepListeningRef.current = false;
    stopRecording();
    setDescription('');
    setStep('input');
    setGeneratedOntology(null);
    setError(null);
    setErrorKey(null);
    setEditMode(false);
    onClose();
  };

  const examplePrompts = [
    t('modal.nlBuilder.example1'),
    t('modal.nlBuilder.example2'),
    t('modal.nlBuilder.example3'),
    t('modal.nlBuilder.example4'),
  ];

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleClose}
    >
      <motion.div
        className="modal-content nl-builder-modal"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={20} style={{ color: 'var(--accent)' }} />
            <h2>{t('modal.nlBuilder.title')}</h2>
          </div>
          <button className="modal-close" onClick={handleClose}>
            <X size={20} />
          </button>
        </div>

            {step === 'input' && (
              <div className="nl-builder-content">
                <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
                  {t('modal.nlBuilder.subtitle')}
                </p>

                <div className="nl-input-wrapper">
                  <textarea
                    className="nl-input-textarea"
                    placeholder={t('modal.nlBuilder.placeholder')}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={5}
                  />
                  {voiceSupported && (
                    <button
                      className={`voice-btn ${isRecording ? 'recording' : ''}`}
                      onClick={toggleRecording}
                      title={isRecording ? t('modal.nlBuilder.stopRecording') : t('modal.nlBuilder.startVoice')}
                      type="button"
                    >
                      {isRecording ? <MicOff size={20} /> : <Mic size={20} />}
                    </button>
                  )}
                </div>

                {isRecording && (
                  <div className="recording-indicator">
                    <span className="recording-dot" />
                    {t('modal.nlBuilder.listening')}
                  </div>
                )}

                {voiceError && (
                  <div className="voice-error" style={{ color: 'var(--accent-red)', fontSize: '13px', marginTop: '8px' }}>
                    ⚠️ {t(voiceError)}
                  </div>
                )}

                <div className="example-prompts">
                  <span style={{ color: 'var(--text-tertiary)', fontSize: '12px' }}>{t('modal.nlBuilder.tryExample')}</span>
                  <div className="example-chips">
                    {examplePrompts.map((prompt, i) => (
                      <button
                        key={i}
                        className="example-chip"
                        onClick={() => setDescription(prompt)}
                      >
                        {prompt.slice(0, 40)}...
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  className="nl-generate-btn"
                  onClick={handleGenerate}
                  disabled={!description.trim()}
                >
                  <Sparkles size={16} />
                  {t('modal.nlBuilder.generate')}
                  <Send size={16} />
                </button>
              </div>
            )}

            {step === 'loading' && (
              <div className="nl-builder-content nl-loading">
                <Loader2 size={48} className="spin" style={{ color: 'var(--accent)' }} />
                <p>{t('modal.nlBuilder.analyzing')}</p>
                <p style={{ color: 'var(--text-tertiary)', fontSize: '14px' }}>
                  {t('modal.nlBuilder.extracting')}
                </p>
              </div>
            )}

            {step === 'preview' && generatedOntology && (
              <div className="nl-builder-content nl-preview">
                <div className="preview-header">
                  <h3>{generatedOntology.name}</h3>
                  <button 
                    className={`edit-toggle ${editMode ? 'active' : ''}`}
                    onClick={() => setEditMode(!editMode)}
                  >
                    <Edit3 size={14} />
                    {editMode ? t('modal.nlBuilder.preview') : t('modal.nlBuilder.editJson')}
                  </button>
                </div>

                {editMode ? (
                  <textarea
                    className="json-editor"
                    value={editedJson}
                    onChange={(e) => setEditedJson(e.target.value)}
                    spellCheck={false}
                  />
                ) : (
                  <div className="preview-summary">
                    <div className="preview-section">
                      <h4>{t('search.entitiesCount', { count: generatedOntology.entityTypes.length })}</h4>
                      <div className="preview-items">
                        {generatedOntology.entityTypes.map((entity) => (
                          <div key={entity.id} className="preview-item entity">
                            <span className="entity-icon">{entity.icon}</span>
                            <span className="entity-name">{entity.name}</span>
                            <span className="entity-props">{t('modal.nlBuilder.propsCount', { count: entity.properties.length })}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="preview-section">
                      <h4>{t('search.relationshipsCount', { count: generatedOntology.relationships.length })}</h4>
                      <div className="preview-items">
                        {generatedOntology.relationships.map((rel) => (
                          <div key={rel.id} className="preview-item relationship">
                            <span className="rel-from">{rel.from}</span>
                            <span className="rel-name">→ {rel.name} →</span>
                            <span className="rel-to">{rel.to}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {(error || errorKey) && (
                  <div className="preview-error">
                    <AlertCircle size={14} />
                    {errorKey ? t(errorKey) : error}
                  </div>
                )}

                <div className="preview-actions">
                  <button className="btn-secondary" onClick={() => setStep('input')}>
                    {t('modal.nlBuilder.back')}
                  </button>
                  <button className="btn-primary" onClick={handleApply}>
                    <Check size={16} />
                    {t('modal.nlBuilder.apply')}
                  </button>
                </div>
              </div>
            )}

        {step === 'error' && (
          <div className="nl-builder-content nl-error">
            <AlertCircle size={48} style={{ color: '#FF6B6B' }} />
            <p style={{ color: '#FF6B6B' }}>{t('modal.nlBuilder.generationFailed')}</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
              {errorKey ? t(errorKey) : error || t('modal.nlBuilder.unknownError')}
            </p>
            <button className="btn-secondary" onClick={() => setStep('input')}>
              {t('modal.nlBuilder.tryAgain')}
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
