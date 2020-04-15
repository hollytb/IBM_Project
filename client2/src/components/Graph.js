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

  redraw() {
    this.currentData = [];
    let headers = ["Frame"];
    for (let ROI = 0; ROI < this.numROIs; ROI++)
      if (this.props.arrays[ROI]) headers.push("ROI" + ROI);
    this.currentData.push(headers);

    for (let i = 0; i < this.currentFrame; i++) {
      let intensities = [i];
      for (let ROI = 0; ROI < this.numROIs; ROI++)
        if (this.props.arrays[ROI]) intensities.push(this.allData[ROI][i]);
      this.currentData.push(intensities);
    }

    this.setState({ data: this.currentData });
  }

  toggle(i) {
    this.ROIsVisible[i] = !this.ROIsVisible[i];
    console.log(this.ROIsVisible);
    this.redraw();
  }
  // call props same way in grah_test but add this. infront
  render() {
    return (
      <div>
        <div>
          {this.props.arrays && this.props.arrays.length > 0 && (
            <p>{this.props.arrays[0]}</p>
          )}
        </div>
        <div>
          <Chart
            width={"100%"}
            height={"400px"}
            chartType="LineChart"
            data={this.state.data}
            options={{
              legend: { position: "bottom" },
              hAxis: { title: "Frame" },
              vAxis: {
                title: "Intensity",
                viewWindowMode: "explicit",
                viewWindow: { min: -1, max: 200 },
              },
            }}
          />
          <br />
          <label>
            <input
              id=""
              type="radio"
              defaultChecked={true}
              onChange={(e) => this.toggle(1)}
              visibility="hidden"
            />{" "}
          </label>
        </div>
      </div>
    );
  }
}
export default Graph;
