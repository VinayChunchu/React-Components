import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Timesheet from "./Timesheet";
import { Icon } from 'react-icons-kit';
import { home } from 'react-icons-kit/icomoon/home';
import { calendar } from 'react-icons-kit/icomoon/calendar';
import { profile } from 'react-icons-kit/icomoon/profile';
import Timesheet2 from "./Timesheet2";

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.
const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <Timesheet2/>
  },
  {
    path: "/Timesheet",
    sidebar: () => <div>Timesheet!</div>,
    main: () => <Timesheet/>
  },
  {
    path: "/Reports",
    sidebar: () => <div>Reports!</div>,
    main: () => <h2>Reports</h2>
  }
];

function Sidebar() {
  return (
    <Router>
      <div style={{ display: "flex"}}>
        <div
          style={{
            padding: "10px",
            width: "15%",
            background: "#f0f0f0"
          }}
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/"><Icon size={32} icon={home}></Icon><p>Home</p></Link>
            </li>
            <li>
              <Link to="/Timesheet"><Icon size={32} icon={calendar}></Icon><p>Timesheet</p></Link>
            </li>
            <li>
              <Link to="/Reports"><Icon size={32} icon={profile}></Icon><p>Reports</p></Link>
            </li>
          </ul>

          {routes.map((route, index) => (
            // You can render a <Route> in as many places
            // as you want in your app. It will render along
            // with any other <Route>s that also match the URL.
            // So, a sidebar or breadcrumbs or anything else
            // that requires you to render multiple things
            // in multiple places at the same URL is nothing
            // more than multiple <Route>s.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.sidebar}
            />
          ))}
        </div>

        <div style={{ flex: 1, padding: "10px" }}>
          {routes.map((route, index) => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </div>
      </div>
    </Router>
  );
}

export default Sidebar;