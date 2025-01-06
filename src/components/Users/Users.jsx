

import image from "./img/Image.webp"
import image1 from "./img/Image1.webp"
import image2 from "./img/Image2.webp"
import image3 from "./img/Image3.webp"

import "./users.scss"

const data = [
    {
        path: image
    },
    {
        path: image1
    },
    {
        path: image2
    },
    {
        path: image3
    }
]


const Users = () => {
    return (
        <>
            {
                data.map(({path}) => {
                    return (
                        <div key={path} className="users__item">
                            <img width="60" height="60" src={path} alt="user"/>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Users