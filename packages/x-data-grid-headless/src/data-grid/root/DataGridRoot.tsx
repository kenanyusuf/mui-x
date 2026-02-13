import { DataGridRootContext, type GridInstance } from './DataGridRootContext';

export function DataGridRoot(props: DataGridRoot.Props) {
  const { grid, ...rest } = props;
  const dimensions = grid.api.virtualization.hooks.useDimensions();
  const rowHeight = dimensions.rowHeight;
  return (
    <div
      {...grid.api.elements.hooks.useGridProps()}
      {...grid.api.elements.hooks.useContainerProps()}
      {...rest}
      style={
        {
          // TODO: Move to the hook
          '--data-grid-row-height': `${rowHeight}px`,
          ...rest.style,
        } as React.CSSProperties
      }
    >
      <DataGridRootContext.Provider value={grid}>{props.children}</DataGridRootContext.Provider>
    </div>
  );
}

export interface DataGridRootProps extends React.HTMLAttributes<HTMLDivElement> {
  grid: GridInstance;
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace DataGridRoot {
  export type Props = DataGridRootProps;
}
