import React from 'react'
import './SidebarOption.css'

function SidebarOption({ active, text, Icon, handleLogout, handleUserProfile}) {

    return (
        <div className={`sidebarOption ${active && `sidebarOption--active`}`} onClick={handleLogout != null ? handleLogout : handleUserProfile}>
            <Icon/>
            <h2>{text}</h2>
        </div>
    )
}

export default SidebarOption
