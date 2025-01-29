import { useEffect, useState } from "react";
import './our-team.scss'
import axios from 'axios';

const OurTeam = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/user/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error.message);
                if (error.response) {
                    console.error('Server response:', error.response.data);
                }
            }
        };

        fetchUsers();
    }, []);
    const roles = ["LEADER", "ADMIN", "OFFICER", "SERGEANT", "STATIK", "RECRUIT"];
    const renderRoleBlock = (role) => {
        const roleUsers = users.filter((user) => user.role === role);
        if (roleUsers.length === 0) return null;
        return (
            <div className="team__block" key={role}>
                <h2>{role}</h2>
                <div className="team-block__container">
                    {roleUsers.map((user) => (
                        <div key={user._id} className="team__box box-user">
                            <div className="box-user__user user">
                                <p>{user.surname}</p>
                                <p>({user.name})</p>
                                {/* <p className="role">{user.role}</p> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };
    return (
        <section className="team-section">
            <p className="team-section__title">Our Team</p>
            <div className="team-section__list team">
                {users.length > 0 ? (
                    roles.map(renderRoleBlock)
                ) : (
                    <p>юзери пішли на перекур (No users found)</p>
                )}
            </div>
        </section>
    );
};

export default OurTeam;
