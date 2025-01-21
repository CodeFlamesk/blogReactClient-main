import './home.scss';
/* import soldier from './img/soldier.png'; */
import { useEffect, useState } from 'react';
import axios from 'axios';
import smallLogo from '../../components/header/img/Image.png'
/* import decor from './img/decor.webp'
import intro from './video/intro.mp4' */
import StmgInfo from 'components/StmgInfo/StmgInfo';
import DecorLeftSide from 'components/DecorLeftSide/DecorLeftSide';
import Footer from 'components/footer/Footer';
const Home = () => {
    const [users, setUsers] = useState([]);
    const delay = 5000;
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
        <div className="main__home-page home-page">
            <DecorLeftSide />
            <div className='box-right'>
                <div className='home-page__right'>
                    <StmgInfo />
                    <div className="home-page__team team">
                        {/*     <p className="team__title title">Our Team</p> */}
                        {/*  <div className="team__list">
                        {users.length > 0 ? (
                            users.map((user) => (
                                <div key={user._id} className="team__box box-user ">
                                    <div className='box-user__img' >
                                        <img src={smallLogo} alt="logo" className='small__img' />
                                    </div>
                                    <div className='box-user__team team'>
                                        <p className="team__member-name">
                                            {user.surname}  ({user.name})
                                        </p>
                                        <p className="team__member-email">{user.role}</p>
                                    </div>

                                </div>
                            ))
                        ) : (
                            <p>No users found</p>
                        )}
                    </div> */}
                    </div>
                </div>
                <Footer />
            </div>




        </div>
    );
};

export default Home;
