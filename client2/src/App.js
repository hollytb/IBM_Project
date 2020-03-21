
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactPlayer from 'react-player'


import Buttons_Footer from "./components/Buttons_Footer.js";
import LeftPane from "./components/LeftPane.js";
import Video from "./components/Video.js";
import Radio_Button from "./components/Radio_Button.js";
import Test from "./components/test.js";
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
        
        
          <div class="row fixed-top fixed-bottom" >
            <div class="col-3 fixed-top fixed-bottom">
              <LeftPane></LeftPane>
            </div>
            <div class="offset-md-3 fixed-top fixed-bottom" >
            <Video></Video>
            </div>
            </div>
            <div class ="row">
            <div class="offset-md-3 fixed-bottom">
              <Buttons_Footer></Buttons_Footer>
            </div>
            </div>
            <div class ="row  fixed-bottom">
            <div class="offset-md-3 fixed-top ">
            
          </div>
          </div>
        <Test test = {this.state.apiResponse}/>
        
        
        
      </div>
    );
  }
}
export default App;

