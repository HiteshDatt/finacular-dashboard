import '../../styles/DashboardGrid.css'
import AssetBalance from './GridChildren/AssetBalance'
import GrowthRate from './GridChildren/GrowthRate'
import MajorInvestments from './GridChildren/MajorInvestments'
import FinancialIndependence from './GridChildren/FinancialIndependence'
import AverageExpenses from './GridChildren/AverageExpenses'


function DashboardGrid() {
    return (
        <section className="dashboard-grid">
            <AssetBalance />
            <GrowthRate/>
            <MajorInvestments/>
            <FinancialIndependence/>
            <AverageExpenses/>
        </section>
    )
}

export default DashboardGrid
