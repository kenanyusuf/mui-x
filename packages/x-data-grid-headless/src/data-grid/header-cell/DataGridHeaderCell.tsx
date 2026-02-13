import { useDataGridRootContext } from '../root/DataGridRootContext';
import { useDataGridHeaderCellContext } from './DataGridHeaderCellContext';

const SORT_TRIGGER_KEYS = ['Enter', ' '];

export function DataGridHeaderCell(props: DataGridHeaderCell.Props) {
  const grid = useDataGridRootContext();
  const cellContext = useDataGridHeaderCellContext();
  const label = cellContext.header || cellContext.id;

  const sortColumn = (
    event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>,
  ) => {
    if ('key' in event && !SORT_TRIGGER_KEYS.includes(event.key)) {
      return;
    }
    event.preventDefault();
    grid.api.sorting.sortColumn(cellContext.field as string);
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      {...grid.api.elements.hooks.useCellProps({
        field: cellContext.id,
        colIndex: cellContext.index,
      })}
      onClick={sortColumn}
      onKeyDown={sortColumn}
      {...props}
      style={
        {
          // TODO: Move to the hook
          '--data-grid-cell-width': `${cellContext.size}px`,
          ...props.style,
        } as React.CSSProperties
      }
    >
      {props.children !== undefined ? props.children : label}
    </div>
  );
}

export interface DataGridHeaderCellProps extends React.HTMLAttributes<HTMLDivElement> {}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace DataGridHeaderCell {
  export type Props = DataGridHeaderCellProps;
}
