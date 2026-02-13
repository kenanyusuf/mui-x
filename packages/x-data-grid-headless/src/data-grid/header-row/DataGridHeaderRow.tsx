import type { ColumnToRender } from '@mui/x-data-grid-headless/plugins/virtualization';
import { useDataGridRootContext } from '../root/DataGridRootContext';
import { DataGridHeaderCellContext } from '../header-cell/DataGridHeaderCellContext';

export function DataGridHeaderRow(props: DataGridHeaderRow.Props) {
  const { children, ...rest } = props;
  const grid = useDataGridRootContext();
  const columnsToRender = grid.api.virtualization.hooks.useColumnsToRender();
  const virtualization = grid.api.virtualization;
  const offsetLeft = virtualization.hooks.useOffsetLeft();

  return (
    <div role="row" {...rest} style={{ position: 'absolute', top: 0, left: offsetLeft }}>
      {columnsToRender.map((column) => (
        <DataGridHeaderCellContext.Provider key={column.id} value={column}>
          {children({ value: column.header || column.id, column })}
        </DataGridHeaderCellContext.Provider>
      ))}
    </div>
  );
}

export interface DataGridHeaderRowProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'children'
> {
  children: (cell: { value: any; column: ColumnToRender }) => React.ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace DataGridHeaderRow {
  export type Props = DataGridHeaderRowProps;
}
