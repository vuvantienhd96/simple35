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
import TableCp from './tables/Table.jsx';
import AddItemTable from './tables/AddItemTable';

import store from './store'
// library
import { Provider } from 'react-redux'
import Form from './forms/form.jsx';

import RequireAuth from './auth/RequireAuth';
import {fakeAuthProvider} from './auth/auth';

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <RequireAuth>
      <Root />
    </RequireAuth>
    ,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "DashBoard",
        element: <Dasboard />,
      },
      {
        path: "Form",
        element: <Form />,
      },
      {
        path: "Table",
        element: <TableCp />
      },
      {
        path: "addItemTable",
        element: <AddItemTable />
      },
      {
        path: "err",
        element: <>errr</>,
      },
    ],
    
  },
  {
    path: 'login',
    element: <>login</>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      {/* children */}
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </AuthProvider>
  </React.StrictMode>,
)


let AuthContext = React.createContext(null);

export const useAuth = () => {
  return React.useContext(AuthContext);
}

function AuthProvider({ children }) {

  // user kieem tra xem nguoi dung login chua
  let [user, setUser] = React.useState(null);

  let signin = (newUser, callback) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser.user.email);
      // token get from freibase
      localStorage.setItem('tokenUser', newUser._tokenResponse.idToken);
      // user get from freibase
      localStorage.setItem('user', newUser.user.email);
      callback;
    });
  };

  let signout = (callback) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      localStorage.clear();
      callback;
    });
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}