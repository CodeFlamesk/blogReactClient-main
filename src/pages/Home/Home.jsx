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
import OurTeam from 'components/OurTeam/OurTeam';
const Home = () => {




    return (
        <div className="main__home-page home-page">
            <DecorLeftSide />
            <div className='box-right'>
                <div className='home-page__right'>
                    <StmgInfo />
                    <OurTeam />

                </div>
                <Footer />
            </div>




        </div>
    );
};

export default Home;
