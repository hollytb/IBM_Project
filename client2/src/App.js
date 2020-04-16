import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactPlayer from 'react-player'
import Video from "./components/Video.js";
import Select_Buttons from "./components/Select_Buttons.js";
import Graph from "./components/Graph.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: [] };

  }
  // Comunicate with API
  callAPI() {
    fetch("http://localhost:9000/IntensityAPI") //React app talks to API at this url
      .then(res => res.json())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }
  
  render() {
    return (
      <div  className="App" class="row fixed-top fixed-bottom no-gutters"  >
        <div class="col-3 fixed-top fixed-bottom">
          <Select_Buttons tracker_ouput = {this.state.apiResponse}/>
        </div>
        <div class="offset-md-3 fixed-top fixed-bottom" >
          <Video></Video>
        </div>
      </div>
    );
  }
}
export default App;