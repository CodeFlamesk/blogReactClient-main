

import image from "./img/Image.png"
import image2 from "./img/Image2.png"
import image3 from "./img/Image3.png"

import "./download.scss"
import ButtonArrow from "components/Buttons/ButtonArrow/ButtonArrow"
import Container from "components/Container/Container"

const data = [
    {
        img:  image,
        title: "FutureTech Trends 2024",
        text:"An ebook that predicts upcoming technology trends for the next year, including AI developments"
    },
    {
        img:  image2,
        title: "Space Exploration Ebook",
        text:"An ebook that predicts upcoming technology trends for the next year, including AI developments"
    },
    {
        img:  image3,
        title: "Quantum Computing Whitepaper",
        text:"An in-depth whitepaper exploring the principles, applications."
    },
]

const DownloadPDF = () => {
    return (
        <div className="main__latest main-latest">
            <Container>

            <div className="main-latest__items">
                    {
                        data.map((item) => {
                            return (
                                <ItemVideo {...item}/>
                            )
                        })
                    }
                </div>
            </Container>
        </div>
    )
}


const ItemVideo = ({text,title, img}) => {
    return (
        <article className="main-latest__item item-video">
            <div className="item-video__iframe">
                <img loading="lazy" src={img} alt="image"/>
            </div>
            <a className="item-video__title ">
                <h3 >{title}</h3>
            </a>
            <div className="item-video__text">
                <p>{text}</p>
            </div>
            <div className="item-video__buttons">
                <ButtonArrow text={"View Details"} href={"/"}/>
                <ButtonArrow text={"Download PDF Now"} href={"/"}/>
            </div>
        </article> 
    )
}
export default DownloadPDF