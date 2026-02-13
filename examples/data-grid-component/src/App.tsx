import * as React from 'react';
import { DataGrid, useDataGrid } from '@mui/x-data-grid-headless';
import { paginationPlugin } from '@mui/x-data-grid-headless/plugins/pagination';
import {
  ColumnToRender,
  virtualizationPlugin,
} from '@mui/x-data-grid-headless/plugins/virtualization';
import { type GridSortDirection, sortingPlugin } from '@mui/x-data-grid-headless/plugins/sorting';

import { generateSampleData, generateColumns } from './utils';
import styles from './index.module.css';

const plugins = [sortingPlugin, paginationPlugin, virtualizationPlugin] as const;
const rows = generateSampleData(100);
const columns = generateColumns();

function App() {
  const grid = useDataGrid({
    rows,
    columns,
    plugins,
  });
  return (
    <DataGrid.Root className={styles.Root} grid={grid}>
      <DataGrid.Viewport className={styles.Viewport}>
        <DataGrid.Header className={styles.Header}>
          <DataGrid.HeaderRow className={styles.HeaderRow}>
            {(cell) => (
              <DataGrid.HeaderCell key={cell.column.id} className={styles.HeaderCell}>
                {getHeaderCellIcon(cell.column)}
                {cell.value}
                <DataGrid.SortIndicator className={styles.SortIndicator}>
                  {(direction) => getSortIndicatorIcon(direction)}
                </DataGrid.SortIndicator>
              </DataGrid.HeaderCell>
            )}
          </DataGrid.HeaderRow>
        </DataGrid.Header>
        <DataGrid.Content className={styles.Content}>
          <DataGrid.Body>
            {(row) => (
              <DataGrid.Row key={row.id} className={styles.Row}>
                {(cell) => (
                  <DataGrid.Cell key={cell.column.id} className={styles.Cell}>
                    {formatCellValue(cell)}
                  </DataGrid.Cell>
                )}
              </DataGrid.Row>
            )}
          </DataGrid.Body>
        </DataGrid.Content>
      </DataGrid.Viewport>
    </DataGrid.Root>
  );
}

function getHeaderCellIcon(column: ColumnToRender): React.ReactNode {
  switch (column.field) {
    case 'name':
    case 'manager':
      return <UserIcon />;
    case 'role':
      return <BaselineIcon />;
    case 'salary':
    case 'rating':
    case 'yearsExperience':
    case 'projects':
      return <HashIcon />;
    case 'hireDate':
      return <CalendarIcon />;
    case 'status':
      return <CircleDashed />;
    case 'skills':
    case 'team':
    case 'office':
      return <ListIcon />;
    default:
      return null;
  }
}

function getSortIndicatorIcon(direction: GridSortDirection): React.ReactNode {
  if (direction === 'asc') {
    return <ChevronUpIcon />;
  }
  if (direction === 'desc') {
    return <ChevronDownIcon />;
  }
  return null;
}

function formatCellValue(cell: { column: ColumnToRender; value: any }) {
  switch (cell.column.field) {
    case 'name':
    case 'manager':
      return (
        <React.Fragment>
          <Avatar name={cell.value} />
          {cell.value}
        </React.Fragment>
      );
    case 'skills':
      return cell.value.split(',').map((skill: string) => <Badge key={skill}>{skill}</Badge>);
    case 'salary':
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
        cell.value,
      );
    case 'hireDate':
      return new Date(cell.value).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
      });
    case 'status':
    case 'team':
    case 'office':
      return <Badge>{cell.value}</Badge>;
    case 'phone':
      return (
        <a className={styles.Link} href={`tel:${cell.value}`}>
          {cell.value}
        </a>
      );
    default:
      return cell.value;
  }
}

function Badge({ children }: { children: React.ReactNode }) {
  return <span className={styles.Badge}>{children}</span>;
}

function Avatar({ name }: { name: string }) {
  return (
    <div className={styles.Avatar} aria-hidden="true">
      {name[0].toUpperCase()}
    </div>
  );
}

function ChevronUpIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function BaselineIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 20h16" />
      <path d="m6 16 6-12 6 12" />
      <path d="M8 12h8" />
    </svg>
  );
}

function HashIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="9" y2="9" />
      <line x1="4" x2="20" y1="15" y2="15" />
      <line x1="10" x2="8" y1="3" y2="21" />
      <line x1="16" x2="14" y1="3" y2="21" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function CircleDashed() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10.1 2.182a10 10 0 0 1 3.8 0" />
      <path d="M13.9 21.818a10 10 0 0 1-3.8 0" />
      <path d="M17.609 3.721a10 10 0 0 1 2.69 2.7" />
      <path d="M2.182 13.9a10 10 0 0 1 0-3.8" />
      <path d="M20.279 17.609a10 10 0 0 1-2.7 2.69" />
      <path d="M21.818 10.1a10 10 0 0 1 0 3.8" />
      <path d="M3.721 6.391a10 10 0 0 1 2.7-2.69" />
      <path d="M6.391 20.279a10 10 0 0 1-2.69-2.7" />
    </svg>
  );
}

function ListIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 5h.01" />
      <path d="M3 12h.01" />
      <path d="M3 19h.01" />
      <path d="M8 5h13" />
      <path d="M8 12h13" />
      <path d="M8 19h13" />
    </svg>
  );
}

export default App;
