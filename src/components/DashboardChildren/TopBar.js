import '../../styles/TopBar.css'
import { IoSettingsSharp, IoNotifications } from 'react-icons/io5'

function TopBar() {
    return (
        <section className="top-bar">
            <div className="settings">
                <IoSettingsSharp/>
            </div>
            <div className="notifs">
                <IoNotifications/>
            </div>
        </section>
    )
}

export default TopBar
