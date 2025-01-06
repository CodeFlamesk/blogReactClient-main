

const DataItem = ({comment, link, likes}) => {
    return (
        <>
            <button  className="data__item">
                <span  className="data__image data-heart">
                    <i className="fa-regular fa-heart"></i>
                </span>
                <span className="data__text">{likes}k</span>
            </button>
            <a href="/" className="data__item">
                <span className="data__image">
                    <i className="fa-regular fa-comment"></i>
                </span>
                <p className="data__text">{comment}</p>
            </a>
            <a href="/" className="data__item">
                <span className="data__image">
                    <i className="fa-regular fa-paper-plane"></i>
                </span>
                <p className="data__text">{link}</p>
            </a>
        </>
    )
}

export default DataItem