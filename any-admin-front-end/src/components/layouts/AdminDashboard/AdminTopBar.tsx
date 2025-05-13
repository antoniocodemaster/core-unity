import { NavLink, useLocation } from 'react-router-dom';
import Title from '../../typography/Title';
import Button from '../../UI/Button';
import {
  BellIcon,
  UserCircleIcon,
  Cog8ToothIcon,
} from '@heroicons/react/24/outline';

const pageTitle = {
  '/admin-dashboard': 'Inicio',
  '/admin-dashboard/contacts': 'Contactos',
  '/admin-dashboard/tasks': 'Tareas',
  '/admin-dashboard/inventory': 'Inventario',
  '/admin-dashboard/settings/contacts': 'Configuración de Contactos',
  '/admin-dashboard/settings/tasks': 'Configuración de Tareas',
  '/admin-dashboard/settings/inventory': 'Configuración de Inventario',
};

const settingsPage = {
  '/admin-dashboard/contacts': '/admin-dashboard/settings/contacts',
  '/admin-dashboard/tasks': '/admin-dashboard/settings/tasks',
  '/admin-dashboard/inventory': '/admin-dashboard/settings/inventory',
};

const AdminTopBar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const getCurrentPageTitle = () => {
    if (pathname === '/admin-dashboard') {
      return pageTitle['/admin-dashboard'];
    }
    for (const path in pageTitle) {
      if (path !== '/admin-dashboard' && pathname.startsWith(path)) {
        return pageTitle[path as keyof typeof pageTitle];
      }
    }
    return 'AnyAdmin'; // Default title
  };

  const getCurrentSettingsPage = () => {
    for (const path in settingsPage) {
      if (pathname.startsWith(path)) {
        return settingsPage[path as keyof typeof settingsPage];
      }
    }
    return null;
  };

  return (
    <div className="flex justify-end p-3">
      <div className="mr-auto pl-[5px] flex items-center gap-2">
        <Title title={getCurrentPageTitle()} style="PageTitle" />
        {getCurrentSettingsPage() && (
          <NavLink to={getCurrentSettingsPage() || ''}>
            <Cog8ToothIcon className="w-6 h-6" />
          </NavLink>
        )}
      </div>
      <Button variant="transparent">
        <BellIcon className="w-6 h-6" />
      </Button>
      <Button variant="transparent">
        <UserCircleIcon className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default AdminTopBar;
