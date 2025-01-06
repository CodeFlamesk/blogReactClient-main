

import "./container.scss"

const Container = ({children}) => {
    return (
        <div className={`_container`}>
            {children}
        </div>
    )
}

export default Container