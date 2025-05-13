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
        <div className="w-full overflow-hidden">
          {/* Top Bar */}
          <AdminTopBar />

          {/* Main Content */}
          <div className="p-4 min-h-screen pb-24 md:pb-4">
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
