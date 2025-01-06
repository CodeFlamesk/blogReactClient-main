

import "./future-items.scss"

const FutureItems = ({data}) => {
    return (
        <div className="future__items">
            {
                data.map(({title, text}, i) => {
                    return (
                        <div key={i} className="item-action__item card-info">
                            <div className="card-info__title ">
                                <h4>{title}</h4>
                            </div>
                            <div className="card-info__text">
                                <p>{text}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FutureItems