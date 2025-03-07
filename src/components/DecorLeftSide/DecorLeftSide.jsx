import { useEffect } from "react";
import "./decor-left-side.scss";
import soldier from "./img/soldier.png";
import arrow from "./img/arrows.webp";
import game from './img/game-img.webp';
import over from './img/over-img.webp';

const DecorLeftSide = () => {
    useEffect(() => {
        const decorElements = document.querySelectorAll('.decor-page [class^="decor-page__soldier"]');
        const arrowDown = document.querySelector('.decor-page__arrow-down');
        const arrowUp = document.querySelector('.decor-page__arrow');
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const pageHeight = document.documentElement.scrollHeight;
            const viewportHeight = window.innerHeight;
            const stopPosition = pageHeight - viewportHeight - 176;

            const atTop = scrollY === 0;
            const atBottom = scrollY >= stopPosition;

            arrowDown.style.opacity = scrollY < stopPosition ? '1' : '0';
            arrowUp.style.opacity = atTop || atBottom ? '0' : '1';
            arrowUp.style.transition = 'opacity 0.3s ease';
            arrowDown.style.transition = 'opacity 0.3s ease';

            if (scrollY > lastScrollY) {
                arrowDown.classList.remove('actives');
                arrowUp.classList.add('actives');
            } else {
                arrowUp.classList.remove('actives');
                arrowDown.classList.add('actives');
            }

            lastScrollY = scrollY;

            decorElements.forEach(el => {
                el.style.position = scrollY >= stopPosition ? 'absolute' : 'fixed';
                el.style.bottom = scrollY >= stopPosition ? '176px' : el.dataset.bottom || 'auto';
            });
        };

        arrowUp.style.opacity = '0';

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="decor-page">
            <div className="decor-page__line"></div>
            <div className="decor-page__arrow" style={{ opacity: 0 }}>
                <img src={arrow} alt="arrow" />
            </div>
            <div className="decor-page__over-img" data-bottom="50%">
                <img src={over} alt="over-img" />
            </div>
            <div className="decor-page__game-img" data-bottom="25%">
                <img src={game} alt="game-img" />
            </div>
            <img src={soldier} alt="soldier" className="decor-page__soldier" data-bottom="0px" />
            <div className="decor-page__arrow-down">
                <img src={arrow} alt="arrow" />
            </div>
        </div>
    );
};

export default DecorLeftSide;
