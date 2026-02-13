import type * as React from 'react';

import { useDataGridRootContext } from '../root/DataGridRootContext';
import { useDataGridHeaderCellContext } from '../header-cell/DataGridHeaderCellContext';
import { sortingPlugin, type GridSortDirection } from '../../plugins/sorting';

export function DataGridSortIndicator(props: DataGridSortIndicator.Props) {
  const grid = useDataGridRootContext();
  const cellContext = useDataGridHeaderCellContext();
  const sortModel = grid.use(sortingPlugin.selectors.model);
  const sort = sortModel.find((item) => item.field === cellContext.field);

  if (!sort) {
    return null;
  }

  return (
    <div aria-hidden="true" {...props}>
      {props.children(sort.direction)}
    </div>
  );
}

export interface DataGridSortIndicatorProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'children'
> {
  children: (direction: GridSortDirection) => React.ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace DataGridSortIndicator {
  export type Props = DataGridSortIndicatorProps;
}
