import { useDataGridRootContext } from '../root/DataGridRootContext';

export function DataGridPositioner(props: DataGridPositioner.Props) {
  const { ...rest } = props;
  const grid = useDataGridRootContext();
  return <div {...grid.api.elements.hooks.usePositionerProps()} {...rest} />;
}

export interface DataGridPositionerProps extends React.HTMLAttributes<HTMLDivElement> {}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace DataGridPositioner {
  export type Props = DataGridPositionerProps;
}
