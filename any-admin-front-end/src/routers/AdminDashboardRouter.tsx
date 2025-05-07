// src/routers/AdminDashboardRouter.tsx
import AdminDashboardLayout from '../components/layouts/AdminDashboard/AdminDashboardLayout';
import DashboardPage from '../pages/AdminDashboard/DashboardPage';
import ContactsPage from '../pages/AdminDashboard/contacts/ContactsPage';
import PrivateRoute from './PrivateRoute';
import SingleContactPage from '../pages/AdminDashboard/contacts/SingleContactPage';
import TasksPage from '../pages/AdminDashboard/tasks/TasksPage';
import InvetoryPage from '../pages/AdminDashboard/invetory/InvetoryPage';

const adminDashboardRoutes = {
  path: '/admin-dashboard',
  element: (
    <PrivateRoute>
      <AdminDashboardLayout />
    </PrivateRoute>
  ),
  children: [
    // Dashboard
    {
      index: true,
      element: <DashboardPage />,
    },
    // Contacts
    {
      path: 'contacts',
      element: <ContactsPage />,
    },
    {
      path: 'contacts/:id',
      element: <SingleContactPage />,
    },
    // Tasks
    {
      path: 'tasks',
      element: <TasksPage />,
    },
    // Inventory
    {
      path: 'inventory',
      element: <InvetoryPage />,
    },
  ],
};

// Export the configuration object
export default adminDashboardRoutes;
