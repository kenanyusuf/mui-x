'use client';

import * as React from 'react';

import type { ColumnToRender } from '@mui/x-data-grid-headless/plugins/virtualization';

export const DataGridCellContext = React.createContext<ColumnToRender | undefined>(undefined);

export function useDataGridCellContext() {
  const context = React.useContext(DataGridCellContext);
  if (!context) {
    throw new Error('DataGridCellContext is missing.');
  }
  return context;
}
