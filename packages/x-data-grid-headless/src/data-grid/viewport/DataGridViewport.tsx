import { useDataGridRootContext } from '../root/DataGridRootContext';

export function DataGridViewport(props: DataGridViewport.Props) {
  const { ...rest } = props;
  const grid = useDataGridRootContext();
  return <div {...grid.api.elements.hooks.useScrollerProps()} {...rest} />;
}

export interface DataGridViewportProps extends React.HTMLAttributes<HTMLDivElement> {}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace DataGridViewport {
  export type Props = DataGridViewportProps;
}
