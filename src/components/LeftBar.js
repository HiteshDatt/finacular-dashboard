import '../styles/LeftBar.css'
import { useState } from 'react'
import logo from '../assets/logo.png'
import userImage from '../assets/user.jpg'
import { FaAngleRight } from 'react-icons/fa'
import { MdDashboard } from "react-icons/md"
import { BiPieChart } from 'react-icons/bi'
import { FiBarChart2 } from 'react-icons/fi'
import { FaCalendarAlt } from 'react-icons/fa'

function LeftBar() {
    const [nav, setNav] = useState(false)

    function toggleNav(){
        setNav(!nav)
    }

    let screenSize = 'small-screen'
    function myfunc(){
        if(x.matches){
            screenSize = 'small-screen'
        }
        else{
            screenSize = 'none'
        }
    }
    var x = window.matchMedia("(max-width: 845px)");
    myfunc(x);

    return (
        <section className={`left-bar ${screenSize}`} style={{left:(nav) ? '0px' : '-200px'}}>
            <div className="logo">
                <img src={logo} alt="site-logo"/>
                <div>Finacular</div>
                <span className="nav-opener" onClick={toggleNav} >
                    <FaAngleRight style={{transform:(nav) ? 'rotate(180deg)' : 'rotate(0deg)' }}/>
                </span>
            </div>
            <nav>
                <ul>
                    <li><MdDashboard/> <div>Dashboard</div></li>
                    <li><BiPieChart/> <div>Assets</div></li>
                    <li><FiBarChart2/> <div>Tracker</div></li>
                    <li><FaCalendarAlt/> <div>Planning &amp; Advisory</div></li>
                </ul>
            </nav>
            <div className="user">
                <img src={userImage} alt="user"/>
                <span>Vandana M</span>
            </div>
        </section>
    )
}

export default LeftBar
