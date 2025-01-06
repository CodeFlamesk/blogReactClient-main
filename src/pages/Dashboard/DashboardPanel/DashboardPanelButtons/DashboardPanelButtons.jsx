

import "./dashboard-panel-buttons.scss"
const DashboardPanelButtons = ({text, children, cb}) => {

    return (
        <button onClick={() => cb()} className="dashboard__panel-buttons">
            {children}
            {text}
        </button>
    )
}

export default DashboardPanelButtons