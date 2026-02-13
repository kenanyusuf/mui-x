import * as React from 'react';

import { useDataGridRootContext, type RowData } from '../root/DataGridRootContext';
import { DataGridRowContext } from '../row/DataGridRowContext';
import type { RowToRender } from '../../plugins/virtualization';

export function DataGridBody(props: DataGridBody.Props) {
  const { children, ...rest } = props;
  const grid = useDataGridRootContext();
  const virtualization = grid.api.virtualization;
  const rowsToRender = virtualization.hooks.useRowsToRender<RowData>();
  const offsetTop = virtualization.hooks.useOffsetTop();
  const offsetLeft = virtualization.hooks.useOffsetLeft();

  return (
    <div
      role="rowgroup"
      {...rest}
      style={{
        // TODO: Move to the hook
        position: 'absolute',
        top: 0,
        left: offsetLeft,
        transform: `translate3d(0, ${offsetTop}px, 0)`,
        ...rest.style,
      }}
    >
      {rowsToRender.map((row) => {
        if (!row) {
          return null;
        }
        return (
          <DataGridRowContext.Provider key={row.id} value={row}>
            {children(row)}
          </DataGridRowContext.Provider>
        );
      })}
    </div>
  );
}

export interface DataGridBodyProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  children: (row: RowToRender<RowData>) => React.ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace DataGridBody {
  export type Props = DataGridBodyProps;
}
