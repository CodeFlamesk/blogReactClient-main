

import "./future-block.scss"

const FututreBlockParent = ({childrenLeft, childrenRight}) => {
    return (
        <div className="main-future__item item-action">
            <div className="item-action__body">
                {childrenLeft}
            </div>
            <div className="item-action__content">
                {childrenRight}
            </div>
        </div>
    )
}

export default FututreBlockParent