import '../../styles/Chart.css'

function ChartInputs(props) {
    return (
        <section className="inputs">
        <h3>**Additional: Custom Inputs**</h3>
        <input type="text" id='1' value={props.chartData.datasets[0].data[0]} onChange={(evt)=>props.handleChange(evt)}/>
        <input type="text" id='2' value={props.chartData.datasets[0].data[1]} onChange={(evt)=>props.handleChange(evt)}/>
        <input type="text" id='3' value={props.chartData.datasets[0].data[2]} onChange={(evt)=>props.handleChange(evt)}/>
        <input type="text" id='4' value={props.chartData.datasets[0].data[3]} onChange={(evt)=>props.handleChange(evt)}/>
        <input type="text" id='5' value={props.chartData.datasets[0].data[4]} onChange={(evt)=>props.handleChange(evt)}/>
        <input type="text" id='6' value={props.chartData.datasets[0].data[5]} onChange={(evt)=>props.handleChange(evt)}/>
        <input type="text" id='7' value={props.chartData.datasets[0].data[6]} onChange={(evt)=>props.handleChange(evt)}/>
        <input type="text" id='8' value={props.chartData.datasets[0].data[7]} onChange={(evt)=>props.handleChange(evt)}/>
        <input type="text" id='9' value={props.chartData.datasets[0].data[8]} onChange={(evt)=>props.handleChange(evt)}/>
        <input type="text" id='10' value={props.chartData.datasets[0].data[9]} onChange={(evt)=>props.handleChange(evt)}/>
      </section>
    )
}

export default ChartInputs
