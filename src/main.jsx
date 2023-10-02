import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root.jsx';
import ErrorPage from './error-page.jsx';
import { Dasboard } from './components/DashBoard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "DashBoard",
        element: <Dasboard />,
      },
      {
        path: "Form",
        element: <h2>Form</h2>,
      },
      {
        path: "Table",
        element: <h2>Table</h2>,
      },
    ],
  },
  {
    path: "/home",
    element: <div>Home</div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
