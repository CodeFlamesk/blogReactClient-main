import { useSelector } from "react-redux"
import ImageItem from "./ImageItem/ImageItem"
import "./news-block.scss";
import Container from "components/Container/Container";

const NewsBlockPopular = () => {

    const posts = useSelector(store => store.dashboard.posts);

    return (
        <section className="main__image main-activity">
            <Container>
                <div className="main-activity__items">
                    {
                        posts.map((item) => {
                            return (
                                <ImageItem key={item._id} {...item}/> 
                            )
                        })
                    }
                </div>
            </Container>
        </section>
    )
}

export default NewsBlockPopular