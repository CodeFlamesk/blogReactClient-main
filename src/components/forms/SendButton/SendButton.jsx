


import "./send-button.scss"
const SendButton = ({cb}) => {
    return (
        <button onClick={e => cb(e)} className="button__send">Send</button>
    )
}

export default SendButton