// Footer Component - contains the list of clickable boxes
import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="mdb-color" className="fixed-bottom offset-md-3">
      <MDBContainer className="text-center text-md-left">
        <MDBRow className="text-center text-md-left ">
          <MDBCol >
            <h6 className="text-uppercase mb-4 font-weight-bold">
                Region of Interest Selections:
            </h6>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}
export default Footer;