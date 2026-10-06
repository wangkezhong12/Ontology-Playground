import { motion } from 'framer-motion';
import { X, MousePointer, Target, MessageSquare, Link2, Lightbulb, Command } from 'lucide-react';
import { useI18n } from '../i18n';
import { parseInlineEmphasis } from '../lib/contentSafety';

interface HelpModalProps {
  onClose: () => void;
}

// Render a translated paragraph that may carry **strong** or _emphasis_
// markers (same convention as QueryPlayground's query results).
function renderRich(text: string) {
  return parseInlineEmphasis(text).map((segment, index) => {
    if (segment.kind === 'strong') {
      return <strong key={index}>{segment.text}</strong>;
    }
    if (segment.kind === 'emphasis') {
      return <em key={index}>{segment.text}</em>;
    }
    return <span key={index}>{segment.text}</span>;
  });
}

export function HelpModal({ onClose }: HelpModalProps) {
  const { t } = useI18n();

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-content"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: 'spring', damping: 20 }}
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: 700 }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <h2 style={{ fontSize: 24, fontWeight: 600 }}>{t('modal.help.title')}</h2>
          <button className="icon-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div className="feature-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
              <MousePointer size={20} color="var(--ms-blue)" />
              <span className="feature-title" style={{ marginBottom: 0 }}>{t('modal.help.exploreGraph.title')}</span>
            </div>
            <p className="feature-text">
              {renderRich(t('modal.help.exploreGraph.text'))}
            </p>
          </div>

          <div className="feature-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
              <Target size={20} color="var(--ms-purple)" />
              <span className="feature-title" style={{ marginBottom: 0 }}>{t('modal.help.completeQuests.title')}</span>
            </div>
            <p className="feature-text">
              {renderRich(t('modal.help.completeQuests.text'))}
            </p>
          </div>

          <div className="feature-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
              <MessageSquare size={20} color="var(--ms-yellow)" />
              <span className="feature-title" style={{ marginBottom: 0 }}>{t('modal.help.askQuestions.title')}</span>
            </div>
            <p className="feature-text">
              {renderRich(t('modal.help.askQuestions.text'))}
            </p>
          </div>

          <div className="feature-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
              <Link2 size={20} color="var(--ms-green)" />
              <span className="feature-title" style={{ marginBottom: 0 }}>{t('modal.help.viewDataBindings.title')}</span>
            </div>
            <p className="feature-text">
              {renderRich(t('modal.help.viewDataBindings.text'))}
            </p>
          </div>

          <div style={{ 
            padding: 16, 
            background: 'rgba(0, 120, 212, 0.1)', 
            borderRadius: 'var(--radius-md)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: 12
          }}>
            <Lightbulb size={20} color="var(--ms-blue)" style={{ flexShrink: 0, marginTop: 2 }} />
            <div>
              <strong style={{ color: 'var(--ms-blue)' }}>{t('modal.help.aboutOntology.title')}</strong>
              <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 4, lineHeight: 1.5 }}>
                {renderRich(t('modal.help.aboutOntology.text'))}
              </p>
            </div>
          </div>

          <div className="feature-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <Command size={20} color="var(--ms-blue)" />
              <span className="feature-title" style={{ marginBottom: 0 }}>{t('modal.help.keyboardShortcuts')}</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '6px 16px', fontSize: 13, color: 'var(--text-secondary)' }}>
              <kbd className="help-kbd">⌘K</kbd><span>{t('modal.help.shortcut.openPalette')}</span>
              <kbd className="help-kbd">?</kbd><span>{t('modal.help.shortcut.openHelp')}</span>
              <kbd className="help-kbd">Esc</kbd><span>{t('modal.help.shortcut.closeDialog')}</span>
              <kbd className="help-kbd">↑ ↓</kbd><span>{t('modal.help.shortcut.navigatePalette')}</span>
              <kbd className="help-kbd">↵</kbd><span>{t('modal.help.shortcut.selectCommand')}</span>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 24, textAlign: 'center' }}>
          <button className="btn btn-primary" onClick={onClose}>
            {t('modal.help.gotIt')}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
