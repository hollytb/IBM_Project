
import React from 'react';
import ReactDOM from 'react-dom';
//import Footer from './components/Footer.js';
//import Buttons_Footer from './components/Buttons_Footer.js';

import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import $ from "jquery"
import 'jquery/dist/jquery.min.js'
//import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.css';
import 'mdbreact/dist/css/mdb.css';
import './index.css';
//import './style.css';
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();

/*<ul>
{this.state.apiResponse.map((frame)=>{
  return <showButtons frameNumber = {frame.frame_number} />
})}
</ul>
   <ul>
       {filteredKeys.map(item => {
         return <li>{item[1]}</li>;
       })}
      </ul>
*/