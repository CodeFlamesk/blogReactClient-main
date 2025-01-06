

import "./block-number.scss"

const BlockNumber = ({clazz, title, text}) => {
    return (
        <div className={`${clazz} block-number` }>
            <div className="block-number__title ">
                <p >{title}<span className="yellow">+</span></p>
            </div>
            <div className="block-number__text">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default BlockNumber