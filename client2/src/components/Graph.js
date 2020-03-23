import React, { Component } from 'react'
import { render } from 'react-dom'
import Chart from 'react-google-charts'
import { jsonData } from './Output.js'

class Graph extends Component{

  constructor(){
    super()
    this.jData = JSON.parse(jsonData)
    this.allData = this.jData.map( o => [ o.frame_number, o.intensity0, o.intensity1 ])
    this.d2 = [[ 'Frame', 'Int-0', 'Int-1' ], [1,1,1]] 
    this.di = 0
    this.state = { data: this.d2 }
  }

 componentDidMount() {
    this.interval = setInterval(() => { 
      if(this.di++ < 500) this.d2.push(this.allData[this.di])
      else clearInterval(this.interval) 
      this.setState({ data: this.d2 })
    }, 500);
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);

  }

  render(){
    return(
      <Chart
        width='100%'
        height='400px'
        chartType='LineChart'
        data={ this.state.data }
        options={{ 
          hAxis: { title: 'Frame' }, 
          vAxis: { title: 'Intensity' },
          legend: { position: 'bottom' }
        }}
      />
    )
  }

}
export default Graph;
