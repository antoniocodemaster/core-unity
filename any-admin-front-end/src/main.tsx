import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './routers/AppRouter';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './index.css';

// Import fonts
import './assets/fonts/HelveticaNeue-Roman.otf';
import './assets/fonts/HelveticaNeue-Bold.otf';
import './assets/fonts/HelveticaNeue-Light.otf';
import './assets/fonts/HelveticaNeue-Medium.otf';
import './assets/fonts/HelveticaNeue-Thin.otf';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <Toaster />
    <React.StrictMode>
      <RouterProvider router={AppRouter} />
    </React.StrictMode>
  </>
);
