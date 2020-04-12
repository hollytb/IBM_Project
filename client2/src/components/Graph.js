import React, { Component } from 'react'
import { render } from 'react-dom'
import Chart from 'react-google-charts'
import { jsonData } from './Output.js'

class Graph extends Component{ 

  constructor(){
    super()
    this.allData = JSON.parse(jsonData).map( o => o.norm_times_series.map( a => a[0] ))
    console.log(this.allData)
  
    this.numLines = this.allData.length
    this.linesVisible = []
    for(let i=0; i<this.numLines; i++) this.linesVisible[i] = true
    this.d2 = []
    this.di = 0
    this.dmax = this.allData[0].length
    this.state = { data: this.d2 }

    this.interval = setInterval(()=>{ 
      if(this.di < this.dmax){
        this.di++
        this.redraw()
      }
      else clearInterval(this.interval) 
    },1000)
  }

  redraw(){
    this.d2=[]
    let headers = ['Frame']
    for(let line=0; line<this.numLines; line++) if(this.linesVisible[line]) headers.push('ROI'+line)
    this.d2.push(headers)

    for(let i=0; i<this.di; i++){
      let a = [i]
      for(let line=0; line<this.numLines; line++) if(this.linesVisible[line]) a.push(this.allData[line][i])
      this.d2.push(a)
    }

    this.setState({ data: this.d2 })
  }

  toggle(i){
    this.linesVisible[i] = !this.linesVisible[i]
    console.log(this.linesVisible)
    this.redraw()
  }
  
  render(){
    return(
      <div>
        <Chart
          width={'100%'}
          height={'400px'}
          chartType='LineChart'
          data={ this.state.data }
          options={{ 
            hAxis: { title: 'Frame' }, 
            vAxis: {
              title: 'Intensity',
              viewWindowMode:'explicit',
              viewWindow: { min:-1, max:200 }
            }
          }}
        />
        <label><input id="roi0" type="checkbox" defaultChecked={true} onChange={e=>this.toggle(0)}/> ROI-0 </label><br/>
        <label><input id="roi1" type="checkbox" defaultChecked={true} onChange={e=>this.toggle(1)}/> ROI-1 </label>
      </div>
     )
  }  
}
export default Graph;