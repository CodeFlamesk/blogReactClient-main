
import axios from "axios";
import { _API_URL } from "../../config";
import { changeActiveModal, changeTextModal, changeThankError, changeTitleModal } from "store/modalsStore";
import { changeActiveModalsSubscribe, changeSubscribe } from "store/newsletterStore";

class NewsletterAction {

    subscribe(email) {
        return async dispatch => {
        
            try {
                const response = await axios.post(`${_API_URL}/newsletter`, {email});
                if(response.status === 200) {
                    localStorage.setItem("newsletterBlog", true)
                    dispatch(changeTextModal("Благодаря подписке вы сможете получать актуальные новости."));
                    dispatch(changeTitleModal("Спасибо, что подписались."))
                    dispatch(changeSubscribe(true));
                    
                }

            } catch(e) {
                dispatch(changeTextModal(e.response.data.message));
                dispatch(changeTitleModal("Произошла  ошибка"))
            } finally {
                dispatch(changeActiveModalsSubscribe(false))
                dispatch(changeThankError(true))
                dispatch( changeActiveModal(true))
            }
        }
    }

}

export default new NewsletterAction()