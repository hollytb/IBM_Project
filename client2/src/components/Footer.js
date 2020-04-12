/*import React from "react";
import { MDBFormInline } from 'mdbreact';
import { MDBBtn } from "mdbreact";
import { Container } from 'reactstrap';
import $ from "jquery";

  const Footer = props => {
    const [currentFrame, setCurrentFrame] = React.useState(0);
    const frames = React.useMemo(() => {
      const keys = props.test.map(frame =>
        Object.keys(frame)
      );
      return keys.map(frame =>
        frame.filter(key => new RegExp(/^roi\d+$/).test(key))
      );
    }, [props.test]);
    const playing = currentFrame < frames.length - 1;
    React.useEffect(() => {
      let timer;
      const up = () => {
        setCurrentFrame(frame => frame + 1);
        timer = playing && setTimeout(up, 1000);
      };
      timer = playing && setTimeout(up, 1000);
      return () => clearTimeout(timer);
    }, [playing]);
    
    // Enables the Functionality of the "Select Multiple Region's" switch using jquery
      $(".region").click(function(e){
      if($('#customSwitches').is(':not(:checked)')){
        if($('.region:checked').length > 1){ // Multiply regions unable to be selected
          alert('You can not check multiple');
          e.preventDefault();
        }
      }
    
  });

    //Enables functionality of "Select only one ROI" as default



  $("#customSwitches").click(function(e){ // Multiple regions of interest able to be selected
     $(".region").prop('checked', false);
  }); 
  
  return (
    <div className = "container"
     
      > 
    <div>
    <div className='custom-control custom-switch' >
    <input type='checkbox' className='custom-control-input' id='customSwitches' />
    <label  className='custom-control-label' htmlFor='customSwitches'>
      <p className="font-weight-bold">   Multiple Region's </p>
    </label> 
    </div>
      <div>
      <MDBBtn color="blue-grey" variant="link"  onClick={() => setCurrentFrame(0)}>
        reset
      </MDBBtn>
      </div>
      {currentFrame >= frames.length
        ? null
        : frames[currentFrame].map((roi, index) => (
          
            <div key={roi}>
          
              <label className ="label">
            
              <p classnName = "font-weight-bold">{`roi${index}`}</p>
                <MDBFormInline>              
                <input className ="region" id = "radio_btn" type="radio" />
              </MDBFormInline>  
              </label>
               
            </div>  
                
          ))}
    </div>
    </div>
  );
};
export default Footer;  
<div>
{props.testing && props.testing.map((item, idx) => { 
  return (
    <label key={idx}>
      <input className="region" type="radio" value={idx} />
      <span>{idx}</span> 
    </label>
  );
})}  
</div>
*/


























































































































































































































































































































































































































































































