'use client';

import * as React from 'react';

import { sortingPlugin } from '../../plugins/sorting';
import { paginationPlugin } from '../../plugins/pagination';
import { virtualizationPlugin } from '../../plugins/virtualization';
import type { useDataGrid } from '../../hooks/useDataGrid';

/* TODO: Figure out how to type this */
export type RowData = any;

/* TODO: Figure out how to type this */
export const plugins = [sortingPlugin, paginationPlugin, virtualizationPlugin] as const;

export type GridPlugins = typeof plugins;

export type GridInstance = ReturnType<typeof useDataGrid<GridPlugins, RowData>>;

export interface DataGridContextValue extends GridInstance {}

export const DataGridRootContext = React.createContext<DataGridContextValue | undefined>(undefined);

export function useDataGridRootContext() {
  const context = React.useContext(DataGridRootContext);
  if (!context) {
    throw new Error(
      'DataGridRootContext is missing. DataGrid parts must be placed within <DataGrid.Root />.',
    );
  }
  return context;
}
