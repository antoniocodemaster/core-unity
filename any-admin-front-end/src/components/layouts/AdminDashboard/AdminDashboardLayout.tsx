import LeftSideNav from './LeftSideNav';
import AdminTopBar from './AdminTopBar';
import { Outlet } from 'react-router-dom';
import UpsertContactsModal from '../../modals/UpsertContactsModal';
import UpsertTasksModal from '../../modals/UpsertTasksModal';

const AdminDashboardLayout = () => {
  return (
    <>
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

      {/* Modals*/}
      <UpsertContactsModal />
      <UpsertTasksModal />
    </>
  );
};

export default AdminDashboardLayout;
