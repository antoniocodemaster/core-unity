import LeftSideNav from './LeftSideNav';
import AdminTopBar from './AdminTopBar';
import { Outlet } from 'react-router-dom';

const AdminDashboardLayout = () => {
  return (
    <div className="bg-gray-100 flex">
      <LeftSideNav />

      {/* Right Content */}
      <div className="flex-1">
        {/* Top Bar */}
        <AdminTopBar />

        {/* Main Content */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
