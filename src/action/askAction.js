
import axios from "axios";
import { _API_URL } from "../../config";

class AskAction {
    async sendMessageFromContactPage(userEmail, ask) {
        try {
            const response = await axios.post(`${_API_URL}/ask`, {ask, userEmail});

            return response;
        } catch(e) {
            console.log(e)
        }
    }
}

export default new AskAction