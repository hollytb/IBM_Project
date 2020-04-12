import React from "react";
import $ from "jquery";
//<h1>{props.testing.map}</h1>
const Graph_Test = (props) => {
  return (
    <div>
      <div>
        {props.arrays && props.arrays.length > 0 && <p>{props.arrays[0]}</p>}
      </div>
      <div>
        {props.testing &&
          props.testing.map((item, idx) => {
            // The below code is temp this replcae this code with graph mechanism
            return (
              <label key={idx}>
                <input className="region" type="radio" value={idx} />
                <span>{idx}</span>
              </label>
            );
          })}
      </div>
    </div>
  );
};
export default Graph_Test;
