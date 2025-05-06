
import { useSelector } from "react-redux";

import DashboardPanel from "./DashboardPanel/DashboardPanel";

import "./dashboard.scss"
import DashboardAddNews from "./DashboardItems/DashboardItemAddNews/DashboardAddNews";
import DashboardCategory from "./DashboardItems/DashboardCategory/DashboardCategory";

const Dashboard = () => {
    const panel = useSelector(store => store.dashboard.panel)

    return (
        <div className="dashboard">
            <DashboardPanel />
            <div className="dashboard__right">
                {panel === "dashboard"}
                {panel === "news" && <DashboardAddNews />}
                {panel === "category" && <DashboardCategory />}
            </div>
        </div>

    )
}

export default Dashboard