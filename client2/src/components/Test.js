// When radio buttons checked, change corresponding value in array if 0 change to 1 and if 1 change to 0
// This will be used in the graph component, and will enable the functionality of selcting one region or multiple region.
// As the graph will be plotted based on which regions are noted 1 in the array 

import React from 'react';
import $ from "jquery";

const Test = props => {
  const total_regions = (JSON.parse(JSON.stringify(props.test)).length); // gets the number of regions
  
  //when a radio button is clicked change its corresponding in the array 
  const handleClick = (item, idx) => {
  console.log(`item ${item} with index ${idx} clicked`); // just checking if works when clicked 
};
  return (
    // displays radio buttons depending on the number of objects in json
    <div>
    {props.test.map((item, idx) => { 
      return (
        <label key={idx}>
          <input className="region" type="radio" value={idx} onClick={() => handleClick(item, idx)} />
          <span>{idx}</span> 
        </label>
      );
    })}
    </div>
     
  );
};
export default Test;