import type { ColumnDef } from '@mui/x-data-grid-headless';

export interface RowData {
  id: number;
  name: string;
  email: string;
  age: number;
  department: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  salary: number;
  hireDate: string;
  status: string;
  role: string;
  manager: string;
  team: string;
  office: string;
  yearsExperience: number;
  rating: number;
  projects: number;
  skills: string;
}

/** Shuffle an array randomly (Fisher–Yates). */
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/** Generate sample grid rows. */
export function generateSampleData(count: number): RowData[] {
  const names = [
    'John',
    'Jane',
    'Bob',
    'Alice',
    'Charlie',
    'Diana',
    'Eve',
    'Frank',
    'Grace',
    'Henry',
  ];
  const surnames = [
    'Doe',
    'Smith',
    'Johnson',
    'Williams',
    'Brown',
    'Jones',
    'Garcia',
    'Miller',
    'Davis',
    'Wilson',
  ];
  const departments = [
    'Engineering',
    'Sales',
    'Marketing',
    'HR',
    'Finance',
    'Operations',
    'Support',
    'Product',
  ];
  const cities = [
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Phoenix',
    'Seattle',
    'Boston',
    'Denver',
  ];
  const countries = ['USA', 'Canada', 'UK', 'Germany', 'France', 'Australia'];
  const statuses = ['Active', 'On Leave', 'Remote', 'Hybrid'];
  const roles = ['Junior', 'Mid-Level', 'Senior', 'Lead', 'Manager', 'Director'];
  const teams = ['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta'];
  const offices = ['HQ', 'Branch A', 'Branch B', 'Remote', 'Satellite'];
  const skillsList = ['React', 'Python', 'Java', 'SQL', 'AWS', 'TypeScript', 'Node.js', 'Docker'];

  const allCombinations: RowData[] = [];
  for (let i = 0; i < count; i += 1) {
    const nameIndex = Math.floor(Math.random() * names.length);
    const surnameIndex = Math.floor(Math.random() * surnames.length);
    const departmentIndex = Math.floor(Math.random() * departments.length);
    const age = 20 + Math.floor(Math.random() * 40);
    const managerNameIndex = Math.floor(Math.random() * names.length);
    const managerSurnameIndex = Math.floor(Math.random() * surnames.length);

    allCombinations.push({
      id: i + 1,
      name: `${names[nameIndex]} ${surnames[surnameIndex]}`,
      email: `${names[nameIndex].toLowerCase()}.${surnames[surnameIndex].toLowerCase()}@example.com`,
      age,
      department: departments[departmentIndex],
      phone: `+1-${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`,
      address: `${Math.floor(Math.random() * 9999) + 1} Main St`,
      city: cities[Math.floor(Math.random() * cities.length)],
      country: countries[Math.floor(Math.random() * countries.length)],
      salary: Math.floor(Math.random() * 150000) + 50000,
      hireDate: `${2015 + Math.floor(Math.random() * 10)}-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
      status: statuses[Math.floor(Math.random() * statuses.length)],
      role: roles[Math.floor(Math.random() * roles.length)],
      manager: `${names[managerNameIndex]} ${surnames[managerSurnameIndex]}`,
      team: teams[Math.floor(Math.random() * teams.length)],
      office: offices[Math.floor(Math.random() * offices.length)],
      yearsExperience: Math.floor(Math.random() * 20) + 1,
      rating: Math.round((Math.random() * 4 + 1) * 10) / 10,
      projects: Math.floor(Math.random() * 15) + 1,
      skills: skillsList.slice(0, Math.floor(Math.random() * 4) + 2).join(', '),
    });
  }

  return allCombinations;
}

/** Generate sample column definitions. */
export function generateColumns(): ColumnDef<RowData>[] {
  return [
    // { id: 'id', field: 'id' as keyof RowData, header: 'ID', size: 60 },
    { id: 'name', field: 'name' as keyof RowData, header: 'Employee', size: 200 },
    // { id: 'email', field: 'email' as keyof RowData, header: 'Email', size: 230 },
    // { id: 'age', field: 'age' as keyof RowData, header: 'Age', size: 60 },
    // { id: 'department', field: 'department' as keyof RowData, header: 'Department', size: 110 },
    // { id: 'phone', field: 'phone' as keyof RowData, header: 'Phone', size: 140 },
    // { id: 'address', field: 'address' as keyof RowData, header: 'Address', size: 130 },
    // { id: 'city', field: 'city' as keyof RowData, header: 'City', size: 100 },
    // { id: 'country', field: 'country' as keyof RowData, header: 'Country', size: 80 },
    { id: 'role', field: 'role' as keyof RowData, header: 'Role', size: 130 },
    { id: 'team', field: 'team' as keyof RowData, header: 'Team', size: 120 },
    { id: 'office', field: 'office' as keyof RowData, header: 'Office', size: 120 },
    { id: 'status', field: 'status' as keyof RowData, header: 'Status', size: 120 },
    { id: 'salary', field: 'salary' as keyof RowData, header: 'Salary', size: 140 },
    { id: 'hireDate', field: 'hireDate' as keyof RowData, header: 'Hire Date', size: 140 },
    { id: 'manager', field: 'manager' as keyof RowData, header: 'Manager', size: 180 },
    {
      id: 'yearsExperience',
      field: 'yearsExperience' as keyof RowData,
      header: 'Experience',
      size: 140,
    },
    { id: 'rating', field: 'rating' as keyof RowData, header: 'Rating', size: 120 },
    { id: 'projects', field: 'projects' as keyof RowData, header: 'Projects', size: 120 },
    { id: 'skills', field: 'skills' as keyof RowData, header: 'Skills', size: 250 },
  ];
}
