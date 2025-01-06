import { useState } from "react";
import Input from "components/forms/Input/Input";
import PoliticCheckbox from "components/forms/PoliticCheckbox/PoliticCheckbox";
import SendButton from "components/forms/SendButton/SendButton";
import Textarea from "components/forms/Textarea/Textarea";
import ModalFeedback from "components/Modals/ModalFeedback/ModalFeedback";
import contactFormAction from "action/contactFormAction";
import "./contact-form.scss";

const ContactForm = () => {
    const [active, setActive] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        number: "",
        message: "",
        checked: false,
    });

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleCheckboxChange = (e) => {
        setFormData({ ...formData, checked: e.target.checked });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { firstName, lastName, email, number, message, checked } = formData;

        if (checked && message && firstName && lastName && number && email) {
            try {
                const res = await contactFormAction.sendMessageFromContactPage(
                    lastName,
                    firstName,
                    email,
                    message,
                    number
                );
                
                if (res.status === 200) {
                    setActive(true);
                }
            } catch (error) {
                console.error("Error submitting contact form:", error);
            }
        }
    };

    const { firstName, lastName, email, number, message, checked } = formData;

    return (
        <div className="form">
            <form className="form__body" onSubmit={handleSubmit}>
                <div className="form__top">
                    <Input
                        setValue={(value) => handleInputChange("firstName", value)}
                        value={firstName}
                        holder="Enter First Name"
                        type="text"
                        text="First Name"
                    />
                    <Input
                        setValue={(value) => handleInputChange("lastName", value)}
                        value={lastName}
                        holder="Enter Last Name"
                        type="text"
                        text="Last Name"
                    />
                    <Input
                        setValue={(value) => handleInputChange("email", value)}
                        value={email}
                        holder="Enter your Email"
                        type="email"
                        text="Email"
                    />
                    <Input
                        setValue={(value) => handleInputChange("number", value)}
                        value={number}
                        holder="Enter Phone Number"
                        type="tel"
                        text="Phone Number"
                    />
                </div>
                <div className="form__item-textarea">
                    <Textarea
                        setValue={(value) => handleInputChange("message", value)}
                        value={message}
                        text="Enter your message"
                    />
                </div>
                <div className="form__check">
                    <PoliticCheckbox
                        checked={checked}
                        onChangeChecked={handleCheckboxChange}
                    />
                    <div className="form__button">
                        <SendButton cb={handleSubmit} />
                    </div>
                </div>
            </form>
            {active && (
                <ModalFeedback
                    cb={() => setActive(false)}
                    mainTitle="You have successfully sent a message"
                />
            )}
        </div>
    );
};

export default ContactForm;