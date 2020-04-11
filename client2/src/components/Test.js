// When radio buttons checked, change corresponding value in array if 0 change to 1 and if 1 change to 0
// This will be used in the graph component, and will enable the functionality of selcting one region or multiple region.
// As the graph will be plotted based on which regions are noted 1 in the array 

import React from 'react';
import $ from "jquery";

const Test = props => {
  const total_regions = (JSON.parse(JSON.stringify(props.test)).length); // gets the number of regions
  var ROI = [];
  for (var i = 0; i < total_regions.length; i++) { // Array to represent which regions need to be displayed
    ROI[i] = 0; // deault setting all regions equal 1 as must be displayed
  }
  //when a radio button is clicked change its corresponding in the array 
  const handleClick = (item, idx) => {
    if(ROI[idx] == 1){ // if region displayed and clicked -> undisplay region 
      ROI[idx] = 0; 
    }else{ // if region not displayed and clicked -> display region 
        ROI[idx] = 1; 
    }
    console.log(`Array ${ROI[idx]} with index ${idx} clicked`); // Used to test functionality of array 
  };

  return (
    // displays radio buttons depending on the number of objects in json
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
  );
};
export default Test;