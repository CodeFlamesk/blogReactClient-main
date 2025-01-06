import  { useState } from 'react'
import {useAutoAnimate} from "@formkit/auto-animate/react"

import "./Spollers.scss"
const Spollers = ({title, text}) => {

    const [show, setShow] = useState(false);
    const [block] = useAutoAnimate()

    return (
        <div ref={block} className="tabs__item">
            <button onClick={() => setShow(prev => !prev)} className="tabs__trigger ">
                <span >{title}</span>
                {!show && <i className="fa-solid fa-plus"></i>}
                {show && <i className="fa-solid fa-minus"></i>}
            </button>
            {
                show &&  <div  className="tabs__content">{text}</div>
            }
        </div>
    )
}

export default Spollers