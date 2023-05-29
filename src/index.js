import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root.component';
import ErrorPage from './routes/error-page.component';
import LoginPage from "./routes/login/login-page.component"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <LoginPage />
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);