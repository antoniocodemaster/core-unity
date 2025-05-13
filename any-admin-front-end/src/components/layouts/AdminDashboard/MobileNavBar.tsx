import { navItems, getLinkClassName } from '../../../lib/utils/NavUtils';
import { useNavigate, useLocation } from 'react-router-dom';

const MobileNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="fixed bottom-0 w-full bg-primary text-white flex justify-around py-2 z-40 md:hidden shadow-md">
      {navItems.map((tab) => {
        const className = getLinkClassName(tab.path, pathname);
        return (
          <button
            key={tab.path}
            onClick={() => navigate(tab.path)}
            className={`flex flex-col items-center text-xs ${className}`}
          >
            <tab.icon className="h-6 w-6 mb-1" />
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};

export default MobileNavBar;