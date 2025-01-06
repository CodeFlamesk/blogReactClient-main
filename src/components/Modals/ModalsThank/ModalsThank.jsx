import Title24 from "components/Title24/Title24"

import { useDispatch, useSelector } from "react-redux"
import RightButtonLink from "components/RightButton/RightButtonLink"
import RightButton from "components/RightButton/RightButton"
import { changeActiveModal } from "store/modalsStore"



const ModalsThank = ({children}) => {

    const {text, mainTitle, thankError} = useSelector(store => store.modals);
    const isAuth = useSelector(store => store.user.isAuth)
    const dispatch = useDispatch();



    return (
        <div className="modals-thank-body">
            <Title24 text={mainTitle}/> 
            <p>{text}</p>
            <div className="modals-thank-body__buttons">
                {children}
                
                {
                    !thankError  && <RightButtonLink to={"/"} text={"Home"}/> 
                }
                {
                    !isAuth && <RightButton cb={() => dispatch(changeActiveModal(false))} text={"Come back"}/>
                }
            </div>
        </div>
    )
}

export default ModalsThank