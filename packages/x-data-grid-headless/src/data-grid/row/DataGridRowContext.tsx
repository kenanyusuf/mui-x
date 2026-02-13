import * as React from 'react';

import type { RowToRender } from '../../plugins/virtualization';

export type DataGridRowContextValue = RowToRender;

export const DataGridRowContext =
  React.createContext<DataGridRowContextValue | undefined>(undefined);

export function useDataGridRowContext() {
  const context = React.useContext(DataGridRowContext);
  if (!context) {
    throw new Error('DataGridRowContext is missing.');
  }
  return context;
}
