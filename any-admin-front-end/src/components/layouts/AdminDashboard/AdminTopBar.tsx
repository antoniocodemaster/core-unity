import { useLocation } from 'react-router-dom';
import Title from '../../typography/Title';
import Button from '../../UI/Button';
import { BellIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const pageTitle = {
  '/admin-dashboard': 'Inicio',
  '/admin-dashboard/contacts': 'Contactos',
  '/admin-dashboard/tasks': 'Tareas',
  '/admin-dashboard/inventory': 'Inventario',
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

  return (
    <div className="flex justify-end p-3">
      <Title className="mr-auto pl-[5px]" title={getCurrentPageTitle()} style="PageTitle" />
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
