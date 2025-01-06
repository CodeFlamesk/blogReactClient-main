import Title40 from "components/Title40/Title40"

const ItemAction = ({img, title, text}) => {
    return (
        <>
            <div className="item-action__image ">
                <img width="80" height="80" src={img} alt="image"/>
            </div>
            <div className="item-action__title">
                <Title40 title={title}/>
            </div>
            <div className="item-action__text">
                <p>{text}</p>
            </div>
        </>
    )
}

export default ItemAction