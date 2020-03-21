
import React, { Component } from 'react';
import { MDBFormInline } from 'mdbreact';
import { Container, Row, Col } from 'reactstrap';

class Radio_Button extends Component {

//<p>{this.props.region.roi0}</p>
//
//  <h1>hi</h1>
//<p>{ this.props.roi ? this.props.myItem : 'something wrong' }</p>
  render() {
  
    return (
      
    <div>
    <input class="region fixed-top" type="checkbox" name="region1" value="1" />
    <label for="region1"> 1</label>
    </div>
    )
  }
}

export default Radio_Button;






