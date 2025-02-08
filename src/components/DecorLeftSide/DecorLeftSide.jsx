import { useEffect } from "react";
import "./decor-left-side.scss";
import soldier from "./img/soldier.png";
import arrow from "./img/arrows.webp";
import game from './img/game-img.webp';
import over from './img/over-img.webp';

const DecorLeftSide = () => {
    useEffect(() => {
        const decorElements = document.querySelectorAll('.decor-page [class^="decor-page__"]');

        const handleScroll = () => {
            const viewportHeight = window.innerHeight;
            const scrollY = window.scrollY;
            const pageHeight = document.documentElement.scrollHeight;
            const stopPosition = pageHeight - viewportHeight - 176;

            decorElements.forEach(el => {
                if (scrollY >= stopPosition) {
                    el.style.position = 'absolute';
                    el.style.bottom = '176px';
                } else {
                    el.style.position = 'fixed';
                    el.style.bottom = el.dataset.bottom || 'auto';
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="decor-page">
            <div className="decor-page__line"></div>
            <img src={over} alt="over-img" className="decor-page__over-img" />
            <img src={game} alt="game-img" className="decor-page__game-img" />
            <img src={soldier} alt="soldier" className="decor-page__soldier" />
            <img src={arrow} alt="arrow" className="decor-page__arrow-down" />
        </div>
    );
};

export default DecorLeftSide;
