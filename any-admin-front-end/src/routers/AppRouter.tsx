import { createBrowserRouter } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LogInPage';
import ErrorPage from '../pages/ErrorPage';
import adminDashboardRoutes from './AdminDashboardRouter'; // Import the admin routes config

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
  adminDashboardRoutes,
]);

export default AppRouter;
