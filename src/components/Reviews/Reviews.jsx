

import Stars from "../Stars/Stars"
import "./reviews.scss"


import image from "./img/Image.webp"
import image1 from "./img/Image1.webp"
import image2 from "./img/Image2.webp"
import image3 from "./img/Image3.webp"
import image5 from "./img/Image5.webp"
import Container from "components/Container/Container"

const data = [
    {
        img: image,
        name: "Sarah Thompson",
        city:"San Francisco, USA",
        comment: "The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated."
    },
    {
        img: image1,
        name: "Diego Lopez",
        city:"Barcelona, Spain",
        comment: "The ebooks on renewable energy strategies have given me the insights I needed to pivot our startup toward sustainability."
    },
    {
        img: image2,
        name: "Raj Patel",
        city:"Mumbai, India",
        comment: "The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis, helping me make informed decisions."
    },
    {
        img: image3,
        name: "Emily Adams",
        city:"London, UK",
        comment: "The AI in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care."
    },
    {
        img: image2,
        name: "Alan Jackson",
        city:"Houston, USA",
        comment: "The reports on space mining prospects have fueled my passion for space exploration. They provide a comprehensive view of what lies beyond Earth."
    },
    {
        img: image5,
        name: "Jessica Miller",
        city:"Boston, USA",
        comment: "The research papers on genomic breakthroughs have been a goldmine of information. They've shaped the direction of my research in genomics."
    }
]



const Reviews = () => {
    return (
        <section className="main__real main-real">
            
                <Container>
                <div className="main-real__items">
                    {
                        data.map(item => {
                            return (
                                <ReviewItem key={item.city} {...item}/>
                            )
                        })
                    }
                </div>
                </Container>
                
            
        </section>
    )
}

const ReviewItem = ({img, name, city, comment}) => {

    return (
        <div className="main-real__item">
            <div className="main-real__person person">
                <div className="person__image">
                    <img loading="lazy" width="60" height="60" src={img} alt="user"/>
                </div>
                <div className="person__info">
                    <div className="person__title">
                        <h3>{name}</h3>
                    </div>
                    <div className="person__text">
                        <p>{city}</p>
                    </div>
                </div>
            </div>
            <Stars/>
            <div className="main-real__text">
                <p>{comment}</p>
            </div>
        </div>
    )
}


export default Reviews