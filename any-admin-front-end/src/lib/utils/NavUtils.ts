import {
  HomeIcon,
  UserGroupIcon,
  ListBulletIcon,
  CubeIcon,
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
];

export const getLinkClassName = (path: string, pathname: string) => {
  if (path === '/admin-dashboard') {
    return `dashboard-left-nav-link ${pathname === path ? 'active' : ''}`;
  }
  return `dashboard-left-nav-link ${pathname.startsWith(path) ? 'active' : ''}`;
};
