import { useDataGridRootContext } from '../root/DataGridRootContext';

export function DataGridScrollArea(props: DataGridScrollArea.Props) {
  const { ...rest } = props;
  const grid = useDataGridRootContext();
  return <div {...grid.api.elements.hooks.useScrollAreaProps()} {...rest} />;
}

export interface DataGridScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace DataGridScrollArea {
  export type Props = DataGridScrollAreaProps;
}
