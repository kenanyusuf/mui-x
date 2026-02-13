import { useDataGridRootContext } from '../root/DataGridRootContext';

export function DataGridContainer(props: DataGridContainer.Props) {
  const { ...rest } = props;
  const grid = useDataGridRootContext();
  return <div {...grid.api.elements.hooks.useContainerProps()} {...rest} />;
}

export interface DataGridContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace DataGridContainer {
  export type Props = DataGridContainerProps;
}
