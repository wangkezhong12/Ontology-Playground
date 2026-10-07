import { designerTemplates } from '../../data/designerTemplates';
import { useDesignerStore } from '../../store/designerStore';
import { useI18n } from '../../i18n';

export function TemplatePicker() {
  const loadDraft = useDesignerStore((s) => s.loadDraft);
  const { t } = useI18n();

  return (
    <div className="template-picker">
      <div className="template-picker-header">
        <h3>{t('designer.startFromTemplate')}</h3>
        <p>{t('designer.templateHint')}</p>
      </div>
      <div className="template-picker-grid">
        {designerTemplates.map((tpl) => (
          <button
            key={tpl.id}
            className="template-card"
            onClick={() => loadDraft(tpl.ontology)}
          >
            <span className="template-card-icon">{tpl.icon}</span>
            <span className="template-card-label">
              {t(`template.${tpl.id}.label`, undefined, tpl.label)}
            </span>
            <span className="template-card-desc">
              {t(`template.${tpl.id}.description`, undefined, tpl.description)}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
