import React from 'react'
import SettingsPanelButtons from '../SettingsPanelButtons/SettingsPanelButtons'
import SettingsContent from '../SettingsContent/SettingsContent'

import "./settings.scss"

const Settings = () => {
    return (
        <div className='settings-body'>
            <div className="settings-body__panel">
                <SettingsPanelButtons/>
            </div>
            <div className="settings-body__content">
                <SettingsContent/>
            </div>
        </div>
    )
}

export default Settings