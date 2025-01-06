
import Container from "components/Container/Container"
import image1 from "./img/image1.webp"
import image2 from "./img/image2.webp"
import image3 from "./img/image3.webp"
import image4 from "./img/image4.webp"

import "./visual.scss"

const data = [
    {
        img: image1,
        title: "Mars Exploration: Unveiling Alien Landscapes",
        text:"Embark on a journey through the Red Planet's breathtaking landscapes and uncover the mysteries of Mars."
    },
    {
        img: image2,
        title: "Blockchain Explained: A Revolution in Finance",
        text:"Delve into the world of blockchain technology and its transformative impact on the financial industry."
    },
    {
        img: image3,
        title: "Breaking the Silence: Mental Health Awareness in the Workplace",
        text:"An exploration of the importance of mental health awareness and the initiatives reshaping workplaces for employee well-being."
    },
    {
        img: image4,
        title: "Revolutionizing Investment Strategies",
        text:"An in-depth look at global efforts to conserve biodiversity and safeguard endangered species from extinction."
    }
]


const Visual = () => {
    return (
        <div className="main__visual main-visual">
            <Container>
                <div className="main-visual__items">
                    {
                        data.map((item) => {
                            return <ItemVideo {...item}/> 
                        })
                    }
                </div>
            </Container>
        </div>
    )
} 


const ItemVideo = ({img, title, text}) => {
    return (
        <article className="main-visual__item item-video">
            <div className="item-video__iframe">
                <img loading="lazy" src={img} alt="image"/>
            </div>
            <a className="item-video__title title-24">
                <h3>{title}</h3>
            </a>
            <div className="item-video__text">
                <p>{text}</p>
            </div>
        </article>
    )
}


export default Visual