import { Link, useNavigate, useLocation } from 'react-router-dom';
import Title from '../../typography/Title';
import {
  HomeIcon,
  Bars3Icon,
  PowerIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import useAuthState from '../../../lib/states/AuthState';

const LeftSideNav = () => {
  const navigate = useNavigate();
  const { logout } = useAuthState();
  const location = useLocation();
  const pathname = location.pathname;

  const getLinkClassName = (path: string) => {
    return `dashboard-left-nav-link ${
      pathname === path ? 'active' : ''
    }`;
  };

  return (
    <div className="w-52 h-screen bg-white">
      <Title title="Admin Dashboard" className="p-4" style="SectionTitle" />
      <Link
        className={getLinkClassName('/admin-dashboard')}
        to="/admin-dashboard"
      >
        <Bars3Icon className="w-6 h-6" />
        Dashboard
      </Link>
      <Link
        className={getLinkClassName('/admin-dashboard/contacts')}
        to="/admin-dashboard/contacts"
      >
        <UserGroupIcon className="w-6 h-6" />
        Contacts
      </Link>
      <Link className={getLinkClassName('/')} to="/">
        <HomeIcon className="w-6 h-6" />
        Landing Page
      </Link>
      <div
        className="dashboard-left-nav-link !ml-0 cursor-pointer"
        onClick={() => {
          logout();
          navigate('/login');
        }}
      >
        <PowerIcon className="w-6 h-6" />
        Logout
      </div>
    </div>
  );
};

export default LeftSideNav;
