import Title24 from "components/Title24/Title24"
import ModalsParent from "../ModalsParent/ModalsParent"
import Input from "components/forms/Input/Input"
import { useState } from "react"
import ButtonRight from "components/Buttons/buttonRight/ButtonRight"
import askAction from "action/askAction"




const AskModal = ({cb}) => {
    const [question, setQuestion] = useState("");
    const [email, setEmail] = useState("");



    const sendAnswer = async () => {
        await askAction.sendMessageFromContactPage(email, question);
    }

    return (
        <ModalsParent cb={cb}>
            <div className="modals-thank-body mb-25">
                <Title24 text={"Submit your question"}/>
            </div>
            <div className="flex-16">
                <Input setValue={setQuestion} value={question} text={"Your Question"} holder={"Enter Your Question"}/>
                <Input setValue={setEmail} value={email} type={"email"} text={"Your Email"} holder={"Enter Your Email"}/>
                <ButtonRight cb={() => sendAnswer()} text={"Send Question"}/>
            </div>
        </ModalsParent>
    )
}

export default AskModal