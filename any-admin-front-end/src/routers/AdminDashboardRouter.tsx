// src/routers/AdminDashboardRouter.tsx
import AdminDashboardLayout from '../components/layouts/AdminDashboard/AdminDashboardLayout';
import DashboardPage from '../pages/AdminDashboard/DashboardPage';
import ContactsPage from '../pages/AdminDashboard/contacts/ContactsPage';
import PrivateRoute from './PrivateRoute';
import SingleContactPage from '../pages/AdminDashboard/contacts/SingleContactPage';
import TasksPage from '../pages/AdminDashboard/tasks/TasksPage';
import InvetoryPage from '../pages/AdminDashboard/invetory/InvetoryPage';
import SingleInventoryPage from '../pages/AdminDashboard/invetory/SingleInventoryPage';
import SettingsContactsPage from '../pages/AdminDashboard/settings/SettingsContactsPage';
import SettingsTasksPage from '../pages/AdminDashboard/settings/SettingsTasksPage';
import SettingsInventoryPage from '../pages/AdminDashboard/settings/SettingsInventoryPage';
import PointOfSalesPage from '../pages/AdminDashboard/point-of-sales/PointOfSalesPage';
import SinglePointOfSalesPage from '../pages/AdminDashboard/point-of-sales/SinglePointOfSalesPage';
import PayrollPage from '../pages/AdminDashboard/payroll/PayrollPage';

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
    {
      path: 'inventory/:id',
      element: <SingleInventoryPage />,
    },
    // Point of Sales
    {
      path: 'point-of-sales',
      element: <PointOfSalesPage />,
    },
    {
      path: 'point-of-sales/:id',
      element: <SinglePointOfSalesPage />,
    },
    // Payroll
    {
      path: 'payroll',
      element: <PayrollPage />,
    },
    // Settings
    {
      path: 'settings/contacts',
      element: <SettingsContactsPage />,
    },
    {
      path: 'settings/tasks',
      element: <SettingsTasksPage />,
    },
    {
      path: 'settings/inventory',
      element: <SettingsInventoryPage />,
    },
  ],
};

// Export the configuration object
export default adminDashboardRoutes;
