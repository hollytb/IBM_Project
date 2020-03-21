import React from "react";

const Test = (props)=> {

  const keys = props.test.map(frame => Object.keys(frame));
  const filteredKeys = keys.map(frame =>
    frame.filter(key => new RegExp(/^roi\d+$/).test(key))
  );
  if (filteredKeys.length === 0) return null;
  const showButtons = (frameNumber) => {
  return filteredKeys[frameNumber].map((roi, index) =>  (
      <div>
        <label for={`roi${frameNumber}`}>{`roi${index}`}</label>
        <input type="radio" id={`roi${frameNumber}`} />
       </div>
    ));
  };
  return (
    <div className="Test">    
    {showButtons(400)}
    </div>
  );
};
export default Test;
/*  {(() => {
     for (let i = 0; i <= 400; i++) {
        return {showButtons(i)} ;
      }
    })()}
    {" "}
*/