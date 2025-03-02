import "./tabs-games.scss";
import { NavLink } from 'react-router-dom';
const TabsGame = () => {
    return (
        <div className='tabs-container'>
            <NavLink
                to={`addgame`}
                className={({ isActive }) => isActive ? "active" : "button-tabs"}
            >
                Create
            </NavLink>
            <NavLink
                to={`userinfo`}
                className={({ isActive }) => isActive ? "active" : "button-tabs"}
            >
                Dashboard
            </NavLink>

        </div>
    );
};
export default TabsGame;