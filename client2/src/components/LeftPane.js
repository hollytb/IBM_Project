import React from 'react';
import { Card } from '@material-ui/core';
import Graph from "./Graph.js";

//Sidebar containing graph for selected ROI(S)
const LeftPane = () => {
return (
    
      <Card class= "leftpane fixed-top fixed-bottom" > 
        <Graph/>
      </Card>

);
};

export default LeftPane;