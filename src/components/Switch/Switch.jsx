

import { useAutoAnimate } from "@formkit/auto-animate/react"
import "./switch.scss"
import { useState } from "react"

const data = [
    {
        text:"Whitepapers"
    },
    {
        text:"Ebooks"
    },
    {
        text:"Reports"
    },
]

const Switch = () => {
    const [state, setState] = useState("Whitepapers");

    const [block] = useAutoAnimate()
    return (
        <div className="main-into__switch switch">
            <div ref={block} className="switch__body">
                
                {
                    data.map(({text},i) => {
                        return (
                            <button onClick={() => setState(text)} className={`switch__item ${text === state && " _active"}`}>{text}</button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Switch