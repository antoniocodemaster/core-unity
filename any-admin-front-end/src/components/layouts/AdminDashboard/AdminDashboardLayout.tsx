import LeftSideNav from './LeftSideNav';
import AdminTopBar from './AdminTopBar';
import { Outlet } from 'react-router-dom';
import UpsertContactsModal from '../../modals/UpsertContactsModal';
// Import modals
import UpsertTasksModal from '../../modals/UpsertTasksModal';
import MobileNavBar from './MobileNavBar';
import ProcessSalesModal from '../../modals/ProcessSalesModal';

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
      <ProcessSalesModal />
    </>
  );
};

export default AdminDashboardLayout;
