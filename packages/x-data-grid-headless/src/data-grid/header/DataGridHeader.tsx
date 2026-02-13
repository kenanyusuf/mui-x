import * as React from 'react';

import { useDataGridRootContext } from '../root/DataGridRootContext';

export function DataGridHeader(props: DataGridHeader.Props) {
  const grid = useDataGridRootContext();
  const virtualization = grid.api.virtualization;
  const columnsTotalWidth = virtualization.hooks.useColumnsTotalWidth();

  return <div role="rowgroup" {...props} style={{ minWidth: columnsTotalWidth, minHeight: 40 }} />;
}

export interface DataGridHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace DataGridHeader {
  export type Props = DataGridHeaderProps;
}
