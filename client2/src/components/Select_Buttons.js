// When check buttons ticked, value in array is 1 if not ticked value is 0.
// This dynamically changing array is used in the graph component and decides which regions are dislaped

import $ from "jquery";
import Graph from "./Graph.js";
import React, { useState } from "react";
import jsonData from "./Output.json"; // Json file automatically added to components, when vanilla_tracker.py ran
const Select_Buttons = props => {

  const allData = jsonData.map((o) => o.norm_times_series.map((a) => a[0])); 
  const numROIs = allData.length; // number of objects in json 
  const array_structure = Array(numROIs);
  // "array": hold 0/1's, 1 if region is displayed and 0 if region is not displayed
  const [region_Array, setArray] = useState(array_structure.fill(1));  // default setting: all regions displayed
    
  const handleClick = (item, idx) => {   // when a radio button is clicked change its corresponding value in array
    const newArray = [...region_Array]
    if (newArray[idx] == 1) { 
      newArray[idx] = 0;
    }else {
      newArray[idx] = 1;
    }
    setArray(newArray);
  };
  // Creates checkboxs depending on no.regions in json 
  return (   
    <div>
      <div>
        <Graph regions_displayed = {region_Array}/> 
      </div>
      <div>
        {props.tracker_ouput.map((item, idx) => { 
          return (
            <ul>
            <label  className="region_labels" key={idx}>
              <span  style={{fontWeight: "bold"}}>ROI     {idx}</span>
              <p></p>
              <input className="region" defaultChecked={true} type="checkbox" value={idx} onClick={() => handleClick(item, idx)} />
            </label>
            </ul>
          );
        })}  
      </div>
    </div>
  );
};
export default Select_Buttons;