import React from 'react';
import { MDBCard, MDBCardBody, MDBContainer } from "mdbreact";
import { MDBRow, MDBCol,MDBFooter,MDBCardImage,MDBCardTitle,MDBCardText,MDBBtn} from "mdbreact";

const LeftPane = () => {
return (
  
  <MDBCol >
      // Location for left pane
      <MDBCard class = "leftpane "style={{ bottom:0 ,top:0,left: 0, width: "17.1rem" ,position: 'fixed'  }}> 
          <MDBCardTitle>Tittle</MDBCardTitle>
      </MDBCard>
    </MDBCol>
);
};

export default LeftPane;