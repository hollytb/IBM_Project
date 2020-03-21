import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactPlayer from 'react-player'


import Buttons_Footer from "./components/Buttons_Footer.js";
import LeftPane from "./components/LeftPane.js";
import Video from "./components/Video.js";


//import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
    this.state = {
      number: [1, 2, 3, 4, 5, 6, 7]
    };
  }
  // Comunicate with API
  callAPI() {
    fetch("http://localhost:9000/IntensityAPI") //React app talks to API at this url
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }
  componentWillMount() {
    this.callAPI();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>{this.state.apiResponse}</p>
          <div class="row fixed-bottom no-gutters">
            <div class="col-3 fixed-top fixed-bottom">
              <LeftPane></LeftPane>
            </div>
            <div class="offset-md-3">
              <Buttons_Footer></Buttons_Footer>
            </div>
           
          </div>
        </header>
        <Video></Video>
      </div>
    );
  }
}
export default App;
