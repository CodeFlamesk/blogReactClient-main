import Title24 from "components/Title24/Title24"
import { useDispatch, useSelector } from "react-redux"
import RightButton from "components/RightButton/RightButton"
import { changeActiveModal } from "store/modalsStore"



const ModalsThankBack = ({children}) => {

    const {text, mainTitle} = useSelector(store => store.modals);
    const dispatch = useDispatch();



    return (
        <div className="modals-thank-body">
            <Title24 text={mainTitle}/> 
            <p>{text}</p>
            <div className="modals-thank-body__buttons">
                
                <RightButton cb={() => dispatch(changeActiveModal(false))} text={"Come back"}/>
            </div>
        </div>
    )
}

export default ModalsThankBack