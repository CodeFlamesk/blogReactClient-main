import Container from "components/Container/Container"
import Title40 from "components/Title40/Title40"
import Settings from "components/User/Settings/Settings"

import "./user-settings.scss";


const UserSettings = () => {
    return (
        
        <Container>
            <div className="setting-user-title">
                <Title40 title={"User Account Settings"}/>
            </div>
            <Settings/>
        </Container>
    )
}

export default UserSettings