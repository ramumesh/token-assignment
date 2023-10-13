import { NavLink, Outlet } from 'react-router-dom';
import './Home.scss';
import { STRINGS } from '../../utils/contants';
const Home = () => {
  return (
    <div className="main">
      <div className="d-flex justify-content-center align-items-center">
        <h2>{STRINGS.APP_MAIN_HEADER}</h2>
      </div>
      <div className="nav">
        <NavLink
          className={({ isActive }) =>
            isActive ? 'nav-item active' : 'nav-item'
          }
          to="/"
        >
          {STRINGS.SINGLE_TOKEN_NAV}
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'nav-item active' : 'nav-item'
          }
          to="/multiToken"
        >
          {STRINGS.MULTI_TOKEN_NAV}
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};
export default Home;
