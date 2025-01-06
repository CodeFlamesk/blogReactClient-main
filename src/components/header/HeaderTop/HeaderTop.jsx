

import useMediaQuery from "hooks/useMediaQuery"
import "./header-top.scss"
import ModalsParent from "components/Modals/ModalsParent/ModalsParent";
import ModalsNewsletter from "components/Modals/ModalsNewsletter/ModalsNewsletter";
import { useDispatch, useSelector } from "react-redux";
import ModalsThank from "components/Modals/ModalsThank/ModalsThank";
import { changeActiveModal } from "store/modalsStore";
import { changeActiveModalsSubscribe } from "store/newsletterStore";



const HeaderTop = () => {

    const query = useMediaQuery('(max-width:767.98px)');
    const {active} = useSelector(store => store.modals);
    const {modalsNewsletter} = useSelector(store => store.newsletter);

    const dispatch = useDispatch();

    const onActiveModal = (e) => {
        e.preventDefault()
        dispatch(changeActiveModalsSubscribe(true))
    }

    return (
        <div className="header-top">
            <button onClick={(e) => onActiveModal(e)} className="header-top__link">
                {
                query ? 
                <span>Subscribe to our Newsletter For Blogs and Resources</span>
                : 
                <span>Subscribe to our Newsletter For New & latest Blogs and Resources</span>
                }
                <i className="fa-solid fa-arrow-left"></i>
            </button>
            {
                modalsNewsletter && <ModalsParent cb={() => dispatch(changeActiveModalsSubscribe(false))}>
                <ModalsNewsletter></ModalsNewsletter>
            </ModalsParent>
            }

            {
                active && <ModalsParent cb={() => dispatch(changeActiveModal(false))}>
                    <ModalsThank/>
                </ModalsParent>
            }
            
        </div>

    )
}

export default HeaderTop