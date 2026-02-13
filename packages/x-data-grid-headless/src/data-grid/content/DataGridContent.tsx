import { useDataGridRootContext } from '../root/DataGridRootContext';

export function DataGridContent(props: DataGridContent.Props) {
  const { ...rest } = props;
  const grid = useDataGridRootContext();
  return <div {...grid.api.elements.hooks.useContentProps()} {...rest} />;
}

export interface DataGridContentProps extends React.HTMLAttributes<HTMLDivElement> {}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace DataGridContent {
  export type Props = DataGridContentProps;
}
