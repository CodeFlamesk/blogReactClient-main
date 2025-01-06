import ButtonAdmin from "components/Buttons/ButtonAdmin/ButtonAdmin"
import { useDispatch } from "react-redux"
import { changeClient, changePanel } from "store/DashboardReducer";

import "./dashboard-panel.scss"
import logo from "./img/logo-mobile.webp"
import DashboardPanelButtons from "./DashboardPanelButtons/DashboardPanelButtons";
import DashboardIcon from "./Icons/DashboardIcon";


const DashboardPanel = () => {

    const dispatch = useDispatch();


    return (
        <div className="dashboard__panel">
            <div className="dashboard__top">
                <img width={126} height={35} alt="Logo" src={logo}/>
                <ButtonAdmin to={"/"} cb={() => dispatch(changeClient())}/>
            </div>
            <div className="dashboard__buttons">
                <DashboardPanelButtons cb={() => dispatch(changePanel("dashboard"))} text={"Dashboard"}>
                    <DashboardIcon/>
                </DashboardPanelButtons>
                <DashboardPanelButtons cb={() => dispatch(changePanel("news"))} text={"News"}>
                    <DashboardIcon/>
                </DashboardPanelButtons>
                <DashboardPanelButtons cb={() => dispatch(changePanel("category"))} text={"Category"}>
                    <DashboardIcon/>
                </DashboardPanelButtons>
            </div>
        </div>
    )
}

export default DashboardPanel