import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

import Buttons_Footer from './components/Buttons_Footer.js';
import LeftPane from './components/LeftPane.js';
//import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={apiResponse:""}
    this.state = {
      number:[1,2,3,4,5,6,7,]
    }
  }
  // Comunicate with API
  callAPI(){
    fetch("http://localhost:9000/test_back_end") //React app talks to API at this url
    .then(res=>res.text())
    .then(res=>this.setState({apiResponse: res}));
  }
  componentWillMount(){
    this.callAPI();
  }
render() {
  const greeting = 'Welcome to React';

  return (
    <div className="App">
      <header className="App-header">
        
        <p>{this.state.apiResponse}</p>
      
      <Buttons_Footer></Buttons_Footer>
      <LeftPane></LeftPane>

      </header>
    </div>
  );
}
}
export default App;
