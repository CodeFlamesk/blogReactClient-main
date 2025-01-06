
import "./links.scss"

import image1 from "./img/Icon.png"
import image2 from "./img/image2.png"
import image3 from "./img/image3.png"
import Container from "components/Container/Container"

const data = [
    {
        label:"Latest News Updates",
        title:"Stay Current",
        text:"Over 1,000 articles published monthly",
        img: image1
    },
    {
        label:"Expert Contributors",
        title:"Trusted Insights",
        text:"50+ renowned AI experts on our team",
        img: image2
    },
    {
        label:"Global Readership",
        title:"Worldwide Impact",
        text:"2 million monthly readers",
        img: image3
    }
]

const Links = () => {
    return (
        <section className="main__links main-links">	
            <Container>
                <div className="main-links__body">
                    {
                        data.map(item => {
                            return (
                                <Link key={item.img} {...item}/>
                            )
                        })
                    }
                </div>
            </Container>
        </section>
    )
}

const Link = ({img, text, title, label}) => {
    return (
        <div className="main-links__item link-item">
            <div className="link-item__image ">
                <img width="50" height="50" src={img} alt="icon"/>
            </div>
            <div className="link-item__header header-link">
                <div className="header-link__body">
                    <div className="header-link__title">
                        <h3>{label}</h3>
                    </div>
                    <div className="header-link__text">
                        <p>{title}</p>
                    </div>
                </div>
                <div className="header-link__btn">
                    <a href="#" className="header-link__button">
                        <i className="fa-solid fa-arrow-up"></i>
                    </a>
                </div>
            </div>
            <div className="link-item__text">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Links