import {
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
    DashboardOutlined
  } from '@ant-design/icons';


import { Outlet, Link, useNavigate } from "react-router-dom";
import { useAuth } from './../main';

export default function Root() {
    let authStore = useAuth();
    let navigate = useNavigate();


    const logoutPage = () => {
        authStore.signout( navigate("/"));
    }

    return (
      <>
        <div id="sidebar">
          <h1 onClick={() => logoutPage()}>Logout - Đăng xuất</h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <form method="post">
              <button type="submit">New</button>
            </form>
          </div>
          <nav>
            <ul>
              <li>
                <Link  to={`/DashBoard`}>
                    <DashboardOutlined style={{ fontSize: '16px', color: '#08c' }} />
                    DashBoard</Link>
              </li>
              <li>
                <Link to={`/Form`}><SettingFilled />Form</Link>
              </li>
              <li>
                <Link to={`/Table`}><SmileOutlined />Table</Link>
              </li>
              <li>
                <Link to={`/err`}><SyncOutlined />List User</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail">
            <Outlet></Outlet>
        </div>
      </>
    );
  }