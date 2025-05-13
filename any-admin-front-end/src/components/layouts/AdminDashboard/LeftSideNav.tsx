import { Link, useNavigate, useLocation } from 'react-router-dom';
import Title from '../../typography/Title';
import { PowerIcon } from '@heroicons/react/24/outline';
import useAuthState from '../../../lib/states/AuthState';
import { getLinkClassName, navItems } from '../../../lib/utils/NavUtils';

const LeftSideNav = () => {
  const navigate = useNavigate();
  const { logout } = useAuthState();
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="hidden md:block w-60 bg-white shadow-md">
      <Title
        title="AnyAdmin"
        className="pt-3 pb-2 text-center"
        style="SectionTitle"
      />

      <hr className="mb-6" />

      <div className="w-[90%] mx-auto">
        {navItems.map((item) => (
          <Link
            key={item.path}
            className={getLinkClassName(item.path, pathname)}
            to={item.path}
          >
            <item.icon className="w-6 h-6" />
            {item.label}
          </Link>
        ))}
        <div
          className="dashboard-left-nav-link !ml-0 cursor-pointer"
          onClick={() => {
            logout();
            navigate('/login');
          }}
        >
          <PowerIcon className="w-6 h-6" />
          Cerrar sesión
        </div>
      </div>
    </div>
  );
};

export default LeftSideNav;
