import { useState } from "react"
import InputItem from "../DashboardItemElements/Input/InputItem"
import Title from "../DashboardItemElements/Title/Title"
import dashboardAction from "action/dashboardAction"
import RightButton from "components/RightButton/RightButton"

import "./category.scss"


const DashboardCategory = () => {
    const [title, setTitle] = useState("")

    const onChangeTitle = (e) => setTitle(e)

    const onAddCategory = async (title) => {
        await dashboardAction.addCategory(title)
            .then(response => {
                if(response.status === 200) {
                    setTitle("")
                }
            })
    }

    return (
        <div>
            <Title title={"Category"}/>

            <form className="category-form">
                <InputItem 
                    value={title}
                    onChange={onChangeTitle}
                    placeholder={"Enter text category"} 
                    type={"text"}/>

                <RightButton cb={() => onAddCategory(title)} type={"submit"} text={"Add category"}/>
            </form>
            
        </div>
    )
}

export default DashboardCategory