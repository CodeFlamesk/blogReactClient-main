import { useSelector } from "react-redux"


const Avatar = ({name}) => {

    const {img} = useSelector(store => store.user.user);


    if(img) {
        return (
            <div className="image-avatar">
                <img src="" alt="" />
            </div>
        )
    }
    
}

export default Avatar