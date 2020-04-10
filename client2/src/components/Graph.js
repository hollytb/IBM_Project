import React, { Component } from 'react'
import { render } from 'react-dom'
import Chart from 'react-google-charts'
import { jsonData } from './Output.js'

class Graph extends Component{

  constructor(){
    super()
    this.allData = JSON.parse(jsonData).map( o => [o.frame_number, o.intensity0, o.intensity1] ) 
    this.d2 = [['Frame','Int-0','Int-1'], [1,1,1]]  // dummy first data point to prevent initial chart data error
    this.di = 0
    this.state = { data: this.d2 }
    this.interval = setInterval(() => { 
      if(this.di < this.allData.length) this.d2.push(this.allData[this.di++])
      else clearInterval(this.interval) 
      this.setState({ data: this.d2 })
    },500)
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
