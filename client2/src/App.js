import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactPlayer from 'react-player'
import LeftPane from "./components/LeftPane.js";
import Video from "./components/Video.js";
//import Footer from "./components/Footer.js";
import Test from "./components/Test.js";
import Graph_Test from "./components/Graph_Test.js";
//import './App.css';

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
      <div className="App">
          <div class="row fixed-top fixed-bottom no-gutters"  >
            <div class="col-3 fixed-top fixed-bottom">
              <LeftPane></LeftPane>
            </div>
            <div class="offset-md-3 fixed-top fixed-bottom" >
              <Video></Video>
            </div>
            <div class=" col-3 fixed-bottom">
            <Test test = {this.state.apiResponse}/>
            <Graph_Test testing = {this.state.apiResponse} arrays={[]}  />
              
            </div>      
            </div>
          
      </div>
    );
  }
}
export default App;
//  <Footer test = {this.state.apiResponse}/>
