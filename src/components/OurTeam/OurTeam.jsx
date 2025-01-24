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
    return (
        <section className="team-section">
            <p className="team-section__title">Our Team</p>
            <div className="team-section__list">
                {users.length > 0 ? (
                    users.map((user) => (
                        <div key={user._id} className="team__box box-user ">
                            <div className='box-user__team team'>
                                <p className="team__member-name">
                                    {user.surname}  ({user.name})
                                </p>
                                <p className="team__member-email">{user.role}</p>
                            </div>

                        </div>
                    ))
                ) : (
                    <p>юзери пішли на перекур(No users found)</p>
                )}
            </div>
        </section>
    )
}
export default OurTeam;