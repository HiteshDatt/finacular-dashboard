import '../styles/Dashboard.css'
import Chart from './DashboardChildren/Chart'
import DashboardGrid from './DashboardChildren/DashboardGrid'
import TopBar from './DashboardChildren/TopBar'

function Dashboard() {
    return (
        <section className="dashboard">
            <TopBar/>
            <Chart/>
            <DashboardGrid/>
        </section>
    )
}

export default Dashboard
