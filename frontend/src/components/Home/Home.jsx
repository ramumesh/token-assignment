import { NavLink, Outlet } from "react-router-dom";
import "./Home.scss";
import { STRINGS } from "../../utils/contants";
const Home = () => {
    return <div className="main">
        <div className="d-flex justify-content-center align-items-center">
            <h2>
                {STRINGS.APP_MAIN_HEADER}
            </h2>
        </div>
        <div className="nav">
            <NavLink className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')} to="/">
                Generate Single Token
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')} to="/multiToken">Generate Multiple Tokens</NavLink>
        </div>
        <Outlet />
    </div>;
};
export default Home;