import './home.scss';
import logo from './img/logo-stmg.png';
import { useEffect, useState } from 'react';
import axios from 'axios';
import smallLogo from '../../components/header/img/Image.png'
const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/user/users'); // Перевірте URL
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
        <div className="main__home-page home-page">
            <div className="home-page__stmg-info stmg-info">
                <div className="stmg-info__logo logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="stmg-info__team-info team-info">
                    <p className="team-info__title">STMG Fam info</p>
                    <p className="team-info__contant">
                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
                        born and I will give you a complete account of the system, and expound the actual teachings of the
                        great explorer of the truth, the master-builder of human happiness...
                    </p>
                </div>
            </div>

            <div className="home-page__team team">
                <p className="team__title title">Our Team</p>
                <div className="team__list">
                    {users.length > 0 ? (
                        users.map((user) => (
                            <div key={user._id} className="team__box box-user ">
                                <div className='box-user__img' >
                                    <img src={smallLogo} alt="logo" className='small__img' />
                                </div>
                                <div className='box-user__team team'>
                                    <p className="team__member-name">
                                        {user.name} {user.surname}
                                    </p>
                                    <p className="team__member-email">{user.role}</p>
                                </div>

                            </div>
                        ))
                    ) : (
                        <p>No users found</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
