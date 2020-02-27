import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={apiResponse:""}
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
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{this.state.apiResponse}</p>// print response from api
      </header>
    </div>
  );
}
}
export default App;
