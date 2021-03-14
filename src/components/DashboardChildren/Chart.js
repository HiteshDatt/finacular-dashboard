import '../../styles/Chart.css'
import React from 'react'
import { Bar } from 'react-chartjs-2';
import ChartInputs from './ChartInputs';

class Chart extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      datasets:[
        {
          label:'Asset Balance',
          data:[ 110, 250, 320, 450, 590, 640, 780, 820, 953, 1190 ],
          backgroundColor:'#395fbf'
        }
      ]
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt){
    switch(evt.target.id){
      case '1': this.setState({
        datasets:[
          {
            label:'Asset Balance',
            data:[ 
              evt.target.value, 
              this.state.datasets[0].data[1], 
              this.state.datasets[0].data[2], 
              this.state.datasets[0].data[3], 
              this.state.datasets[0].data[4], 
              this.state.datasets[0].data[5], 
              this.state.datasets[0].data[6], 
              this.state.datasets[0].data[7], 
              this.state.datasets[0].data[8], 
              this.state.datasets[0].data[9] 
            ],
            backgroundColor:'#395fbf'
          }
        ]
      })
      break;
      case '2': this.setState({
        datasets:[
          {
            label:'Asset Balance',
            data:[ 
            this.state.datasets[0].data[0],
            evt.target.value, 
            this.state.datasets[0].data[2], 
            this.state.datasets[0].data[3], 
            this.state.datasets[0].data[4], 
            this.state.datasets[0].data[5], 
            this.state.datasets[0].data[6], 
            this.state.datasets[0].data[7], 
            this.state.datasets[0].data[8], 
            this.state.datasets[0].data[9] ],
            backgroundColor:'#395fbf'
          }
        ]
      })
      break;
      case '3': this.setState({
        datasets:[
          {
            label:'Asset Balance',
            data:[ 
            this.state.datasets[0].data[0], 
            this.state.datasets[0].data[1], 
            evt.target.value, 
            this.state.datasets[0].data[3], 
            this.state.datasets[0].data[4], 
            this.state.datasets[0].data[5], 
            this.state.datasets[0].data[6], 
            this.state.datasets[0].data[7], 
            this.state.datasets[0].data[8], 
            this.state.datasets[0].data[9] ],
            backgroundColor:'#395fbf'
          }
        ]
      })
      break;
      case '4': this.setState({
        datasets:[
          {
            label:'Asset Balance',
            data:[ 
            this.state.datasets[0].data[0], 
            this.state.datasets[0].data[1], 
            this.state.datasets[0].data[2], 
            evt.target.value, 
            this.state.datasets[0].data[4], 
            this.state.datasets[0].data[5], 
            this.state.datasets[0].data[6], 
            this.state.datasets[0].data[7], 
            this.state.datasets[0].data[8], 
            this.state.datasets[0].data[9] ],
            backgroundColor:'#395fbf'
          }
        ]
      })
      break;
      case '5': this.setState({
        datasets:[
          {
            label:'Asset Balance',
            data:[ 
            this.state.datasets[0].data[0], 
            this.state.datasets[0].data[1], 
            this.state.datasets[0].data[2], 
            this.state.datasets[0].data[3],
            evt.target.value,
            this.state.datasets[0].data[5], 
            this.state.datasets[0].data[6], 
            this.state.datasets[0].data[7], 
            this.state.datasets[0].data[8], 
            this.state.datasets[0].data[9] ],
            backgroundColor:'#395fbf'
          }
        ]
      })
      break;
      case '6': this.setState({
        datasets:[
          {
            label:'Asset Balance',
            data:[ 
            this.state.datasets[0].data[0], 
            this.state.datasets[0].data[1], 
            this.state.datasets[0].data[2], 
            this.state.datasets[0].data[3],
            this.state.datasets[0].data[4],
            evt.target.value,
            this.state.datasets[0].data[6], 
            this.state.datasets[0].data[7], 
            this.state.datasets[0].data[8], 
            this.state.datasets[0].data[9] ],
            backgroundColor:'#395fbf'
          }
        ]
      })
      break;
      case '7': this.setState({
        datasets:[
          {
            label:'Asset Balance',
            data:[ 
            this.state.datasets[0].data[0], 
            this.state.datasets[0].data[1], 
            this.state.datasets[0].data[2], 
            this.state.datasets[0].data[3],
            this.state.datasets[0].data[4],
            this.state.datasets[0].data[5],
            evt.target.value, 
            this.state.datasets[0].data[7], 
            this.state.datasets[0].data[8], 
            this.state.datasets[0].data[9] ],
            backgroundColor:'#395fbf'
          }
        ]
      })
      break;
      case '8': this.setState({
        datasets:[
          {
            label:'Asset Balance',
            data:[ 
            this.state.datasets[0].data[0], 
            this.state.datasets[0].data[1], 
            this.state.datasets[0].data[2], 
            this.state.datasets[0].data[3],
            this.state.datasets[0].data[4],
            this.state.datasets[0].data[5],
            this.state.datasets[0].data[6], 
            evt.target.value,
            this.state.datasets[0].data[8], 
            this.state.datasets[0].data[9] ],
            backgroundColor:'#395fbf'
          }
        ]
      })
      break;
      case '9': this.setState({
        datasets:[
          {
            label:'Asset Balance',
            data:[ 
            this.state.datasets[0].data[0], 
            this.state.datasets[0].data[1], 
            this.state.datasets[0].data[2], 
            this.state.datasets[0].data[3],
            this.state.datasets[0].data[4],
            this.state.datasets[0].data[5],
            this.state.datasets[0].data[6], 
            this.state.datasets[0].data[7], 
            evt.target.value,
            this.state.datasets[0].data[9] ],
            backgroundColor:'#395fbf'
          }
        ]
      })
      break;
      case '10': this.setState({
        datasets:[
          {
            label:'Asset Balance',
            data:[ 
            this.state.datasets[0].data[0], 
            this.state.datasets[0].data[1], 
            this.state.datasets[0].data[2], 
            this.state.datasets[0].data[3],
            this.state.datasets[0].data[4],
            this.state.datasets[0].data[5],
            this.state.datasets[0].data[6], 
            this.state.datasets[0].data[7], 
            this.state.datasets[0].data[8],
            evt.target.value ],
            backgroundColor:'#395fbf'
          }
        ]
      })
      break;
      default: ;
    }
    console.log(evt.target.id)
  }

  render(){
    return (
      <>
      <section className="chart">
        <Bar 
          data={this.state}
          options={{
            maintainAspectRatio:false,
            responsive:true,
            title:{
              display:true,
              text:'Annual Projection'
            },
            legend:{
              display:false
            },
            scales:{
              yAxes:[{
                scaleLabel:{
                  display:true,
                  labelString:'Asset Balance ( In Lakhs )'
                }
              }],
              xAxes:[{
                scaleLabel:{
                  display:true,
                  labelString:'No. of years'
                }
              }]
            }
          }}
        />
      </section>

      <ChartInputs chartData={this.state} handleChange={this.handleChange}/>
      </>
    );
  }
}

export default Chart;