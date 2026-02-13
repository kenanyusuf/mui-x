import type { ColumnToRender } from '@mui/x-data-grid-headless/plugins/virtualization';
import { useDataGridRootContext } from '../root/DataGridRootContext';
import { useDataGridRowContext } from './DataGridRowContext';
import { DataGridCellContext } from '../cell/DataGridCellContext';

export function DataGridRow(props: DataGridRow.Props) {
  const { children, ...rest } = props;
  const grid = useDataGridRootContext();
  const context = useDataGridRowContext();
  const columnsToRender = grid.api.virtualization.hooks.useColumnsToRender();
  return (
    <div {...grid.api.elements.hooks.useRowProps(context)} {...rest}>
      {columnsToRender.map((column) => (
        <DataGridCellContext.Provider key={column.id} value={column}>
          {children({ value: context.model[column.id], column })}
        </DataGridCellContext.Provider>
      ))}
    </div>
  );
}

export interface DataGridRowProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  children: (cell: { value: any; column: ColumnToRender }) => React.ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace DataGridRow {
  export type Props = DataGridRowProps;
}
