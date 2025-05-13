import LeftSideNav from './LeftSideNav';
import AdminTopBar from './AdminTopBar';
import { Outlet } from 'react-router-dom';
import UpsertContactsModal from '../../modals/UpsertContactsModal';
import UpsertTasksModal from '../../modals/UpsertTasksModal';
import MobileNavBar from './MobileNavBar';

const AdminDashboardLayout = () => {
  return (
    <>
      <div className="bg-gray-100 flex">
        <LeftSideNav />

        {/* Right Content */}
        <div className="w-full">
          {/* Top Bar */}
          <AdminTopBar />

          {/* Main Content */}
          <div className="p-4 min-h-screen">
            <Outlet />
          </div>
        </div>

        <MobileNavBar />
      </div>

      {/* Modals*/}
      <UpsertContactsModal />
      <UpsertTasksModal />
    </>
  );
};

export default AdminDashboardLayout;
