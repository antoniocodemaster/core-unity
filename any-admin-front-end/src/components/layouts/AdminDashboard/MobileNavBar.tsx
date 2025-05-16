import { navItems, getLinkClassName } from '../../../lib/utils/NavUtils';
import { useNavigate, useLocation } from 'react-router-dom';

const MobileNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="fixed bottom-0 w-full bg-primary text-white pb-2 md:hidden shadow-md">
      <div className=" flex overflow-x-auto gap-4 px-2 py-2 z-40  whitespace-nowrap scroll-visible-mobile-menu">
        {navItems.map((tab) => {
          const className = getLinkClassName(tab.path, pathname);
          return (
            <button
              key={tab.path}
              onClick={() => navigate(tab.path)}
              className={`flex flex-col items-center text-xs flex-shrink-0 ${className}`}
            >
              <tab.icon className="h-6 w-6 mb-1" />
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNavBar;
