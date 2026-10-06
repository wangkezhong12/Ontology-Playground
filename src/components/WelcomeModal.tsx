import { motion } from 'framer-motion';
import { Sparkles, GitBranch, Database, MessageSquare } from 'lucide-react';
import { useI18n } from '../i18n';

interface WelcomeModalProps {
  onClose: () => void;
}

export function WelcomeModal({ onClose }: WelcomeModalProps) {
  const { t } = useI18n();

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="modal-content"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: 'spring', damping: 20 }}
      >
        <div className="modal-header">
          <div className="modal-logo">☕</div>
          <h1 className="modal-title">{t('modal.welcome.title')}</h1>
          <p className="modal-subtitle">
            {t('modal.welcome.subtitle')}
          </p>
        </div>

        <div className="modal-features">
          <div className="feature-card">
            <div className="feature-icon">
              <Sparkles size={24} color="#0078D4" />
            </div>
            <div className="feature-title">{t('common.entityTypes')}</div>
            <div className="feature-text">
              {t('modal.welcome.entityTypesText')}
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <GitBranch size={24} color="#5C2D91" />
            </div>
            <div className="feature-title">{t('common.relationships')}</div>
            <div className="feature-text">
              {t('modal.welcome.relationshipsText')}
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Database size={24} color="#107C10" />
            </div>
            <div className="feature-title">{t('inspector.dataBindings')}</div>
            <div className="feature-text">
              {t('modal.welcome.dataBindingsText')}
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <MessageSquare size={24} color="#FFB900" />
            </div>
            <div className="feature-title">{t('modal.welcome.nlQueries')}</div>
            <div className="feature-text">
              {t('modal.welcome.nlQueriesText')}
            </div>
          </div>
        </div>

        <div className="modal-actions">
          <button className="btn btn-primary" onClick={onClose}>
            <Sparkles size={18} />
            {t('modal.welcome.startExploring')}
          </button>
        </div>

        <div style={{ 
          textAlign: 'center', 
          marginTop: 24, 
          fontSize: 12, 
          color: 'var(--text-tertiary)' 
        }}>
          {t('modal.welcome.footerText')}
        </div>
      </motion.div>
    </motion.div>
  );
}
