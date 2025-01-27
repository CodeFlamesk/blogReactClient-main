import './home.scss';
/* import soldier from './img/soldier.png'; */
import line from '../../components/footer/img/decor-line.webp'
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
                </div>
                <div className="small-footer__decor-line">
                    <img src={line} alt="decor-line-ua" />
                </div>
                <div className='home-page__right'>
                    <OurTeam />
                </div>
                <div className="small-footer__decor-line">
                    <img src={line} alt="decor-line-ua" />
                </div>
                <Footer />
            </div>




        </div>
    );
};

export default Home;
