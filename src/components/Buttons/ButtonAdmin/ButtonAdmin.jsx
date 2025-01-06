

import { Link } from "react-router-dom"
import "./button-admin.scss"

const ButtonAdmin = ({cb, to}) => {
    return (
        <Link to={to} onClick={() => cb()} className="button-admin"> 
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="14" viewBox="0 0 17 14" fill="none">
                <path d="M14.9999 0.999969H16.9999V13H14.9999V0.999969ZM12.9999 5.99997H4.41394L8.70694 1.70697L7.29294 0.292969L0.585938 6.99997L7.29294 13.707L8.70694 12.293L4.41394 7.99997H12.9999V5.99997Z" fill="#F8FAFC"/>
            </svg>
        </Link>
    )
}

export default ButtonAdmin