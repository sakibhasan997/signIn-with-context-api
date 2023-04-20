import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './component/Main';
import Home from './component/Home';
import Login from './component/Login';
import Register from './component/Register';
import AuthProvider from './Provider/AuthProvider';
import Order from './component/Order';
import PrivateRoute from './Route/PrivateRoute';
import Profile from './component/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile/></PrivateRoute>
      },
      {
        path: '/order',
        element: <PrivateRoute><Order /></PrivateRoute>
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
