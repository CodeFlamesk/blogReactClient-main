import "./stmg-info.scss"

import decor from './img/decor.webp'
import intro from './video/intro.mp4'
const StmgInfo = () => {
    const delay = 5000;
    return (
        <div className="home-page__stmg-info stmg-info">
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
        </div>
    )
}

export default StmgInfo