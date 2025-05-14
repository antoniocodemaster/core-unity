import {
  HomeIcon,
  UserGroupIcon,
  ListBulletIcon,
  CubeIcon,
  BuildingStorefrontIcon,
  BanknotesIcon,
} from '@heroicons/react/24/outline';

export const navItems = [
  {
    label: 'Inicio',
    icon: HomeIcon,
    path: '/admin-dashboard',
  },
  {
    label: 'Contactos',
    icon: UserGroupIcon,
    path: '/admin-dashboard/contacts',
  },
  {
    label: 'Tareas',
    icon: ListBulletIcon,
    path: '/admin-dashboard/tasks',
  },
  {
    label: 'Inventario',
    icon: CubeIcon,
    path: '/admin-dashboard/inventory',
  },
  {
    label: 'Punto de Venta',
    icon: BuildingStorefrontIcon,
    path: '/admin-dashboard/point-of-sales',
  },
  {
    label: 'Nómina',
    icon: BanknotesIcon,
    path: '/admin-dashboard/payroll',
  },
];

export const getLinkClassName = (path: string, pathname: string) => {
  if (path === '/admin-dashboard') {
    return `dashboard-left-nav-link ${pathname === path ? 'active' : ''}`;
  }
  return `dashboard-left-nav-link ${pathname.startsWith(path) ? 'active' : ''}`;
};
