import { NavLink } from 'react-router-dom';
const TabsGame = () => {
    return (
        <div>
            <NavLink
                to={`addgame`}
            /* className={({ isActive }) => isActive ? "active" : "button-tabs"} */
            >
                Edit
            </NavLink>
        </div>
    );
};
export default TabsGame;