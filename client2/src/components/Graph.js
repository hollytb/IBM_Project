import React, { Component } from 'react'
import { render } from 'react-dom'
import Chart from 'react-google-charts'
import { jsonData } from './data'

class Graph extends Component{

  getData(){
    let d1 = JSON.parse(jsonData), d2 = [[ 'Frame', 'Int-0', 'Int-1' ]]
    for(let o of d1) d2.push([ o.frame_number, o.intensity0, o.intensity1 ])
    return d2;
  }

  render(){
    return(
      <Chart
        width='100%'
        height='400px'
        chartType='LineChart'
        data={ this.getData() }
        options={{ 
          hAxis: { title: 'Frame' }, 
          vAxis: { title: 'Intensity' } 
        }}
      />
    )
  }

}

export default Graph;
//render(<Graph/>, document.getElementById('root'))
