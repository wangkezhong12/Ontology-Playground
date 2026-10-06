import { useState } from 'react';
import { X, Github, ExternalLink, Download, Check } from 'lucide-react';
import { useDesignerStore } from '../../store/designerStore';
import { useI18n } from '../../i18n';
import { serializeToRDF } from '../../lib/rdf/serializer';

interface SubmitCatalogueModalProps {
  onClose: () => void;
}

const REPO_URL = 'https://github.com/microsoft/Ontology-Playground';

export function SubmitCatalogueModal({ onClose }: SubmitCatalogueModalProps) {
  const ontology = useDesignerStore((s) => s.ontology);
  const { t } = useI18n();
  const [downloaded, setDownloaded] = useState(false);

  const handleDownloadRdf = () => {
    const rdf = serializeToRDF(ontology, []);
    const slug = ontology.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'ontology';
    const blob = new Blob([rdf], { type: 'application/rdf+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${slug}.rdf`;
    a.click();
    URL.revokeObjectURL(url);
    setDownloaded(true);
  };

  const handleDownloadMetadata = () => {
    const metadata = {
      name: ontology.name,
      description: ontology.description,
      icon: '📦',
      category: 'other',
      tags: [],
      author: '',
    };
    const blob = new Blob([JSON.stringify(metadata, null, 2) + '\n'], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'metadata.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content submit-catalogue-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><X size={18} /></button>
        <h2 className="modal-title">
          <Github size={20} /> {t('designer.submitToCatalogue')}
        </h2>

        <div className="submit-step">
          <p className="submit-description">
            {t('designer.submit.descPrefix')}
            <a href={REPO_URL} target="_blank" rel="noopener noreferrer">
              {t('designer.submit.repoLink')} <ExternalLink size={12} />
            </a>{t('designer.submit.descSuffix')}
          </p>

          <div className="submit-instructions">
            <h3>{t('designer.submit.howTo')}</h3>
            <ol>
              <li>{t('designer.submit.step1')}</li>
              <li>
                <a href={`${REPO_URL}/fork`} target="_blank" rel="noopener noreferrer">
                  {t('designer.submit.fork')} <ExternalLink size={12} />
                </a>
              </li>
              <li>
                {t('designer.submit.addPrefix')}
                <code>catalogue/community/your-username/</code>
              </li>
              <li>{t('designer.submit.editPrefix')}<code>metadata.json</code>{t('designer.submit.editSuffix')}</li>
              <li>{t('designer.submit.prPrefix')}<code>main</code>{t('designer.submit.prSuffix')}</li>
            </ol>
          </div>

          <div className="submit-download-actions">
            <button className="designer-action-btn primary" onClick={handleDownloadRdf}>
              <Download size={14} /> {t('designer.downloadRdf')}
              {downloaded && <Check size={14} style={{ marginLeft: 4 }} />}
            </button>
            <button className="designer-action-btn secondary" onClick={handleDownloadMetadata}>
              <Download size={14} /> {t('designer.downloadMetadata')}
            </button>
          </div>

          <div className="submit-form-actions">
            <button className="designer-action-btn secondary" onClick={onClose}>{t('common.close')}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
