import { NavLink, Outlet } from "react-router-dom";
import "./Main.scss";
const Main = () => {
    return <div className="main">
        <div className="d-flex justify-content-center align-items-center">
            <h3>
                Generate Tokens
            </h3>
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
export default Main;