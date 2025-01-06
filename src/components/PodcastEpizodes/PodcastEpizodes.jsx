

import "./podcast-epizodes.scss"

import image1 from "./img/image1.webp"
import image2 from "./img/image2.webp"
import image3 from "./img/image3.webp"
import image4 from "./img/image4.webp"
import image5 from "./img/image5.webp"
import image6 from "./img/image6.webp"
import Container from "components/Container/Container"


const data = [
    {
        img: image1,
        title:"AI in Healthcare",
        text:"Dr. Lisa Adams discusses how AI is revolutionizing healthcare, from diagnostic tools to patient care."
    },
    {
        img: image2,
        title:"AI Ethics",
        text:"Explore the ethical dilemmas and considerations surrounding AI with guest speaker Dr. Michael Turner."
    },
    {
        img: image3,
        title:"Machine Learning Explained",
        text:"Dive into the intricacies of machine learning with AI expert Sarah Davis. In this episode"
    },
    {
        img: image4,
        title:"AI and the Future of Work",
        text:"Dr. Olivia White joins John Parker to discuss the evolving role of AI in the workplace."
    },
    {
        img: image5,
        title:"AI in Education",
        text:"Explore the role of AI in education as Emily Turner discusses how AI is transforming the learning experience."
    },
    {
        img: image6,
        title:"AI in Entertainment",
        text:"David Smith as they explore the influence of AI in the entertainment industry."
    }
]

const PodcastEpizodes = () => {
    return (
        <div className="main__latest main-latest">
            <Container>

            
                <div className="main-latest__items">
                    {
                        data.map(({img, text,title}) => {
                            return (
                                <article key={img} className="main-latest__item item-video">
                                    <a href="/" className="item-video__iframe">
                                        <img loading="lazy" src={img} alt="image"/>
                                    </a>
                                    <a href="/" className="item-video__title text-anim _anim-items">
                                        <h3 data-splitting="chars">{title}</h3>
                                    </a>
                                    <div className="item-video__text">
                                        <p>{text}</p>
                                    </div>
                                    <div className="item-video__button">
                                        <a href="/" className="button-arrow button">
                                            <span className="button-arrow__text">Listen Podcast </span>      
                                            <span className="button-arrow__image">
                                                <i className="fa-solid fa-arrow-up"></i>
                                            </span>
                                            <div className="fill-container"></div>
                                        </a>
                                    </div>
                                </article>  
                            )
                        })
                    }
                    
                </div>
            </Container>
        </div>
    )
}

export default PodcastEpizodes