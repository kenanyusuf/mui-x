'use client';

import * as React from 'react';

import type { ColumnToRender } from '@mui/x-data-grid-headless/plugins/virtualization';

export const DataGridHeaderCellContext = React.createContext<ColumnToRender | undefined>(undefined);

export function useDataGridHeaderCellContext() {
  const context = React.useContext(DataGridHeaderCellContext);
  if (!context) {
    throw new Error('DataGridHeaderCellContext is missing.');
  }
  return context;
}
