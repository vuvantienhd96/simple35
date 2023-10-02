import {
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
    DashboardOutlined
  } from '@ant-design/icons';


import { Outlet, Link } from "react-router-dom";

export default function Root() {
    return (
      <>
        <div id="sidebar">
          <h1>React Router Contacts</h1>
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