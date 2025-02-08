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


            const shouldShowArrows = scrollY < stopPosition;
            arrowDown.style.display = shouldShowArrows ? 'block' : 'none';
            arrowUp.style.display = shouldShowArrows ? 'block' : 'none';


            if (scrollY > lastScrollY) {
                arrowDown.classList.remove('active');
                arrowUp.classList.add('active');
            } else {
                arrowUp.classList.remove('active');
                arrowDown.classList.add('active');
            }

            lastScrollY = scrollY;

            decorElements.forEach(el => {
                el.style.position = scrollY >= stopPosition ? 'absolute' : 'fixed';
                el.style.bottom = scrollY >= stopPosition ? '176px' : el.dataset.bottom || 'auto';
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="decor-page">
            <div className="decor-page__line"></div>
            <div className="decor-page__arrow">
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
