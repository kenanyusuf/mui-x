import { useDataGridRootContext } from '../root/DataGridRootContext';

export function DataGridScrollbarHorizontal(props: DataGridScrollbarHorizontal.Props) {
  const { ...rest } = props;
  const grid = useDataGridRootContext();
  return <div {...grid.api.elements.hooks.useScrollbarHorizontalProps()} {...rest} />;
}

export interface DataGridScrollbarHorizontalProps extends React.HTMLAttributes<HTMLDivElement> {}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace DataGridScrollbarHorizontal {
  export type Props = DataGridScrollbarHorizontalProps;
}
