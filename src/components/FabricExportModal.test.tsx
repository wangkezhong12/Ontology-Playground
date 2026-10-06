import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FabricExportModal } from './FabricExportModal';

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => {
      const htmlProps = Object.fromEntries(
        Object.entries(props).filter(([k]) =>
          !['initial', 'animate', 'exit', 'transition', 'whileHover', 'whileTap'].includes(k)
        )
      );
      return <div {...htmlProps}>{children}</div>;
    },
  },
  AnimatePresence: ({ children }: React.PropsWithChildren) => <>{children}</>,
}));

describe('FabricExportModal', () => {
  it('renders keyed validation errors (empty credentials)', async () => {
    // The error block must gate on `error || errorKey`: client-side
    // validation failures are carried by errorKey (error stays ''), so a
    // key-only gate would silently render nothing.
    render(<FabricExportModal onClose={() => {}} />);

    // Token + workspace ID left empty → synchronous validation, no network
    await userEvent.click(screen.getByRole('button', { name: 'Connect to Workspace' }));

    await waitFor(() => {
      expect(screen.getByText('Both token and workspace ID are required.')).toBeInTheDocument();
    });
  });
});
