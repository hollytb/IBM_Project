// When radio buttons checked, change corresponding value in array if 0 change to 1 and if 1 change to 0
// This will be used in the graph component, and will enable the functionality of selcting one region or multiple region.
// As the graph will be plotted based on which regions are noted 1 in the array 
import $ from "jquery";
//import Graph_Test from "./Graph_Test.js";
import Graph from "./Graph.js";
import React, { useState } from "react";
const Test = props => {
  const total_regions = (JSON.parse(JSON.stringify(props.test)).length); // gets the number of regions
  const [array, setArray] = useState(Array(total_regions.length).fill(0));
    //when a radio button is clicked change its corresponding in the array
    
  //when a radio button is clicked change its corresponding in the array
  const handleClick = (item, idx) => {
    const newArray = [...array]
    if (newArray[idx] == 1) {
      newArray[idx] = 0;
    } else {
      newArray[idx] = 1;
    }
    setArray(newArray);
    };
    return (   // displays radio buttons depending on the number of objects in json
      <div>
        <div>
        
          <Graph  testing={props.test} arrays={array}/>
        </div>
        <div>
          {props.test.map((item, idx) => { 
            return (
              <label key={idx}>
                <input className="region" type="radio" value={idx} onClick={() => handleClick(item, idx)}/>
                <span>{idx}</span> 
              </label>
            );
          })}  
        </div>
      </div>
    );
};
export default Test;