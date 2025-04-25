import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './routers/AppRouter';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <Toaster />
    <React.StrictMode>
      <RouterProvider router={AppRouter} />
    </React.StrictMode>
  </>
);
