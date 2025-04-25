import { Link, useNavigate } from 'react-router-dom';
import Title from '../../typography/Title';
import {
  HomeIcon,
  Bars3Icon,
  BookOpenIcon,
  PowerIcon,
} from '@heroicons/react/24/outline';
import useAuthState from '../../../lib/states/AuthState';

const LeftSideNav = () => {
  const navigate = useNavigate();
  const { logout } = useAuthState();

  return (
    <div className="w-52 h-screen bg-white">
      <Title title="Admin Dashboard" className="p-4" style="SectionTitle" />
      <Link className="dashboard-left-nav-link" to="/admin-dashboard">
        <Bars3Icon className="w-6 h-6" />
        Dashboard
      </Link>
      <Link className="dashboard-left-nav-link" to="/admin-dashboard/reports">
        <BookOpenIcon className="w-6 h-6" />
        Reports
      </Link>
      <Link className="dashboard-left-nav-link" to="/">
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
