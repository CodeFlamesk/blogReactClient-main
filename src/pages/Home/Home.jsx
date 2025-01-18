import './home.scss';
/* import soldier from './img/soldier.png'; */
import { useEffect, useState } from 'react';
import axios from 'axios';
import smallLogo from '../../components/header/img/Image.png'
/* import decor from './img/decor.webp'
import intro from './video/intro.mp4' */
import StmgInfo from 'components/StmgInfo/StmgInfo';
const Home = () => {
    const [users, setUsers] = useState([]);
    const delay = 5000;
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
            <StmgInfo />
            {/*  <div className="home-page__stmg-info stmg-info">
                <div className='stmg-info__info-block info-block '>
                    <p className='info-block__decor'><img src={decor} alt="decor" /></p>
                    <div className='info-block__container container-contant'>

                        <p className='container-contant__title'>Play your favorites  </p>


                        <div className="container-contant__video-container">
                            <video

                                autoPlay
                                muted
                                loop={false}
                                onEnded={(e) => {
                                    setTimeout(() => {
                                        e.target.play();
                                    }, delay);
                                }}
                            >
                                <source src={intro} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>


                        <p className='container-contant__text'>STMG - Small Tactical Mobile Group. Наше невелике ком'юніті було засновано двома командирами Дуся(Юра) та Катарп(Владислав), після чого навесні 2023 року було прийнято рішення переформуватися в повноцінний клан. На данний момент ми орієнтуємося виключно по грі "Squad".</p>

                    </div>
                </div>
            </div> */}

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
                                        {user.surname}  ({user.name})
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
