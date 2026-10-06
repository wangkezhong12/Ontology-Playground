import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Header } from './Header';
import { useAppStore } from '../store/appStore';

const noop = () => {};
const props = {
  onAboutClick: noop,
  onHelpClick: noop,
  onDataSourcesClick: noop,
  onImportExportClick: noop,
  onGalleryClick: noop,
  onDesignerClick: noop,
  onLearnClick: noop,
  onSummaryClick: noop,
};

describe('Header language', () => {
  beforeEach(() => {
    useAppStore.getState().setLanguage('zh-CN');
  });

  afterEach(() => {
    useAppStore.getState().setLanguage('en');
  });

  it('renders Chinese labels in zh-CN', () => {
    render(<Header {...props} />);
    expect(screen.getByText('摘要')).toBeInTheDocument(); // visible <span>
    // Ontology School is icon-only on desktop (text lives in aria-label /
    // data-tooltip; the visible text is only in the closed mobile dropdown),
    // so assert via the accessible name, not getByText:
    expect(screen.getByRole('button', { name: '本体学院' })).toBeInTheDocument();
  });

  it('shows the toggle targeting English when in zh-CN', () => {
    render(<Header {...props} />);
    expect(screen.getByRole('button', { name: 'Switch to English' })).toBeInTheDocument();
  });

  it('switches language when the toggle is clicked', async () => {
    const user = userEvent.setup();
    render(<Header {...props} />);
    await user.click(screen.getByRole('button', { name: 'Switch to English' }));
    expect(useAppStore.getState().language).toBe('en');
    expect(screen.getByText('Summary')).toBeInTheDocument();
  });
});
