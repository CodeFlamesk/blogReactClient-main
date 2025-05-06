
import { useSelector } from "react-redux";

import DashboardPanel from "./DashboardPanel/DashboardPanel";

import "./dashboard.scss"


const Dashboard = () => {
    const panel = useSelector(store => store.dashboard.panel)

    return (
        <div className="dashboard">
            <DashboardPanel />
            <div className="dashboard__right">
                {panel === "dashboard"}
                {panel === "news"}
                {panel === "category" >}
            </div>
        </div>

    )
}

export default Dashboard