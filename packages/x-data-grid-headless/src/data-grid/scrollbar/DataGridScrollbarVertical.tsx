import { useDataGridRootContext } from '../root/DataGridRootContext';

export function DataGridScrollbarVertical(props: DataGridScrollbarVertical.Props) {
  const { ...rest } = props;
  const grid = useDataGridRootContext();
  return <div {...grid.api.elements.hooks.useScrollbarVerticalProps()} {...rest} />;
}

export interface DataGridScrollbarVerticalProps extends React.HTMLAttributes<HTMLDivElement> {}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace DataGridScrollbarVertical {
  export type Props = DataGridScrollbarVerticalProps;
}
