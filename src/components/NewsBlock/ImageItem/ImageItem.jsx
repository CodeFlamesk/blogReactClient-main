
import RightButtonLink from "components/RightButton/RightButtonLink"
import { _URL_SERVER } from "../../../../config"
import "./ImageItem.scss"
import { useDispatch } from "react-redux";
import { changeActivePostId } from "store/DashboardReducer";


const ImageItem = ({
    imageBlog,
    _id,
    categoryId,
    mainTitle,
    likes,
    share
}) => {
    const imageUrl = _URL_SERVER + imageBlog;

    const dispatch = useDispatch();

    const scroolTo = () => {
        window.scrollTo({
            top:0, 
            behavior:"smooth"
        })
    }

    return (
        <article className="main-activity__item image-item">
            <div className="image-item__image">
                <img width={512} height={222} src={imageUrl} alt="image"/>
            </div>
            <div className="image-item__title ">
                <h3>{mainTitle}</h3>
            </div>
            <div className="image-item__text ">
                <p>{categoryId}</p>
            </div>
            <div className="main-activity__block">
                <div className="main-activity__data data-items">
                    <button  className="data__item">
                        <span  className="data__image data-heart">
                            <i className="fa-regular fa-heart"></i>
                        </span>
                        <span className="data__text">{likes} k</span>
                    </button>
                    <a href="/" className="data__item">
                        <span className="data__image">
                            <i className="fa-regular fa-paper-plane"></i>
                        </span>
                        <p className="data__text">{share}</p>
                    </a>
                </div>
                <div className="main-activity__button">
                    <RightButtonLink cb={() => {
                        scroolTo()
                        dispatch(changeActivePostId(_id))
                    }} to={"/blog"} text={"Read More"}/>
                </div>
            </div>
        </article>
    )
}

export default ImageItem