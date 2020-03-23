import React from 'react';
import { Card } from '@material-ui/core';
import Graph from "./Graph.js";

const LeftPane = () => {
return (
    
      <Card class= "leftpane fixed-top fixed-bottom" > 
        <Graph/>
      </Card>

);
};

export default LeftPane;