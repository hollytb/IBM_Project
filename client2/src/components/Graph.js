import React, { Component } from "react";
import { render } from "react-dom";
import Chart from "react-google-charts";
import jsonData from "./Output.json";

class Graph extends Component {
  constructor(props) {
    super(props);

    this.allData = jsonData.map((o) => o.norm_times_series.map((a) => a[0]));
    this.numROIs = this.allData.length;
    this.ROIsVisible = [];
    for (let i = 0; i < this.numROIs; i++) this.ROIsVisible[i] = true;

    this.currentData = [];
    this.currentFrame = 0;
    this.maxFrame = this.allData[0].length;
    this.state = { data: this.currentData };

    this.interval = setInterval(() => {
      if (this.currentFrame < this.maxFrame) {
        this.currentFrame++;
        this.redraw();
      } else clearInterval(this.interval);
    }, 500);
  }
  // The graph will be plotted based on which regions are noted 1 in the array 
  redraw() {
    this.currentData = [];
    let headers = ["Frame"];
    for (let ROI = 0; ROI < this.numROIs; ROI++)
      if (this.props.regions_displayed[ROI]) headers.push("ROI" + ROI);
    this.currentData.push(headers);

    for (let i = 0; i < this.currentFrame; i++) {
      let intensities = [i];
      for (let ROI = 0; ROI < this.numROIs; ROI++)
        if (this.props.regions_displayed[ROI]) intensities.push(this.allData[ROI][i]);
      this.currentData.push(intensities);
    }

    this.setState({ data: this.currentData });
  }

  // call props same way in grah_test but add this. infront
  render() {
    return (
      <div>
        <div>
          <Chart
            width={"500px"}
            height={"500px"}
            chartType="LineChart"
            data={this.state.data}
            options={{
              chartArea: { width: '75%' },
              legend: { position: "bottom" },
              hAxis: { title: "Frame", 
                titleTextStyle: {
                color: "#777",
                fontName: "sans-serif",
                fontSize: 17,
                bold: true,
                italic: false
            } 
            },
              vAxis: {
                title: "Intensity",
                viewWindowMode: "explicit",
                viewWindow: { min: -1, max: 200 },
                  titleTextStyle: {
                  color: "#777",
                  fontName: "sans-serif",
                  fontSize: 17,
                  bold: true,
                  italic: false
              } 
                
              },
            }}
          />
          <br />     
        </div>
      </div>
    );
  }
}
export default Graph;

