import { useDataGridRootContext } from '../root/DataGridRootContext';
import { useDataGridRowContext } from '../row/DataGridRowContext';
import { useDataGridCellContext } from './DataGridCellContext';

export function DataGridCell(props: DataGridCell.Props) {
  const cellContext = useDataGridCellContext();
  const rowContext = useDataGridRowContext();
  const grid = useDataGridRootContext();
  const value = rowContext.model[cellContext.id];
  return (
    <div
      {...grid.api.elements.hooks.useCellProps({
        field: cellContext.id,
        colIndex: cellContext.index,
      })}
      {...props}
      style={
        {
          // TODO: Move to the hook
          '--data-grid-cell-width': `${cellContext.size}px`,
          ...props.style,
        } as React.CSSProperties
      }
    >
      {props.children !== undefined ? props.children : value}
    </div>
  );
}

export interface DataGridCellProps extends React.HTMLAttributes<HTMLDivElement> {}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace DataGridCell {
  export type Props = DataGridCellProps;
}
