import $ from "jquery";
import React, { Component } from 'react';
import { MDBCol, MDBBtn , MDBContainer, MDBRow, MDBFooter,MDBFormInline, MDBInput } from 'mdbreact';

// Footer Component with checkbox's used to select region/region's of interest 
class Buttons_Footer extends Component {

  // Enables the Functionality of the "Select Multiple Region's" switch using jquerys
  componentDidMount() {
    $(".region").click(function(e){
    if($('#customSwitches').is(':not(:checked)')){
      if($('.region:checked').length > 1){ // Multiply regions unable to be selected
        alert('You can not check multiple');
        e.preventDefault();
      }
    }
});

$("#customSwitches").click(function(e){ // Multiply regions able to be selected
   $(".region").prop('checked', false);
}); }
  

  render() {
    return (
      <div class = "container">
      <MDBFooter color="mdb-color" className="fixed-bottom offset-md-3">
        <MDBContainer className="text-center text-md-left">
          <MDBRow className="text-center text-md-left ">
            <div className='custom-control custom-switch' >
            <input type='checkbox' className='custom-control-input' id='customSwitches' />
            <label  className='custom-control-label' htmlFor='customSwitches'>
                 Select Multiple Region's
            </label> 
              <MDBFormInline>
                <input class="region" type="checkbox" name="region1" value="1" />
                <label for="region1"> 1</label>
                <input class="region" type="checkbox" name="region2" value="2" />
                <label for="region2"> 2</label>
                <input class="region" type="checkbox" name="region3" value="3" />
                <label for="region3"> 3</label>
                <input class="region" type="checkbox" name="region4" value="4" />
                <label for="region4"> 4</label>
                <input class="region" type="checkbox" name="region5" value="5" />
                <label for="region5"> 5</label>
                <input class="region" type="checkbox" name="region6" value="6" />
                <label for="region6"> 6</label>
                <input class="region" type="checkbox" name="region7" value="7" />
                <label for="region7"> 7</label>
                <input class="region" type="checkbox" name="region8" value="8" />
                <label for="region8"> 8</label>
                <input class="region" type="checkbox" name="region9" value="9" />
                <label for="region9"> 9</label>
                <input class="region" type="checkbox" name="region10" value="10" />
                <label for="region10"> 10</label>
                <input class="region" type="checkbox" name="region11" value="11" />
                <label for="region11"> 11</label>
                <input class="region" type="checkbox" name="region12" value="12" />
                <label for="region12"> 12</label>
                <input class="region" type="checkbox" name="region13" value="13" />
                <label for="region13"> 13</label>
                <input class="region" type="checkbox" name="region14" value="14" />
                <label for="region14"> 14</label>
                <input class="region" type="checkbox" name="region15" value="15" />
                <label for="region15"> 15</label>
                <input class="region" type="checkbox" name="region16" value="16" />
                <label for="region16"> 16</label>
                <input class="region" type="checkbox" name="region17" value="17" />
                <label for="region17"> 17</label>
                <input class="region" type="checkbox" name="region18" value="18" />
                <label for="region18"> 18</label>
                <input class="region" type="checkbox" name="region19" value="19" />
                <label for="region19"> 19</label>
                <input class="region" type="checkbox" name="region20" value="20" />
                <label for="region20"> 20</label>
                <input class="region" type="checkbox" name="region21" value="21" />
                <label for="region21"> 21</label>
                <input class="region" type="checkbox" name="region22" value="22" />
                <label for="region22"> 22</label>
                <input class="region" type="checkbox" name="region23" value="23" />
                <label for="region23"> 23</label>
                <input class="region" type="checkbox" name="region24" value="24" />
                <label for="region24"> 24</label>
                <input class="region" type="checkbox" name="region25" value="25" />
                <label for="region25"> 25</label>
                <input class="region" type="checkbox" name="region26" value="26" />
                <label for="region26"> 26</label>
                <input class="region" type="checkbox" name="region27" value="27" />
                <label for="region27"> 27</label>
                <input class="region" type="checkbox" name="region28" value="28" />
                <label for="region28"> 28</label>
                <input class="region" type="checkbox" name="region29" value="29" />
                <label for="region29"> 29</label>
                <input class="region" type="checkbox" name="region30" value="30" />
                <label for="region30"> 30</label>
                <input class="region" type="checkbox" name="region31" value="31" />
                <label for="region31"> 31</label>
                <input class="region" type="checkbox" name="region32" value="32" />
                <label for="region32"> 32</label>
                <input class="region" type="checkbox" name="region33" value="33" />
                <label for="region33"> 33</label>
                <input class="region" type="checkbox" name="region34" value="34" />
                <label for="region34"> 34</label>
                <input class="region" type="checkbox" name="region35" value="35" />
                <label for="region35"> 35</label>
                <input class="region" type="checkbox" name="region36" value="36" />
                <label for="region36"> 36</label>
                <input class="region" type="checkbox" name="region37" value="37" />
                <label for="region37"> 37</label>
                <input class="region" type="checkbox" name="region38" value="38" />
                <label for="region38"> 38</label>
                <input class="region" type="checkbox" name="region39" value="39" />
                <label for="region39"> 39</label>
                <input class="region" type="checkbox" name="region40" value="40" />
                <label for="region40"> 40</label>
             </MDBFormInline>
            </div>      
          </MDBRow>
        </MDBContainer>
      </MDBFooter>
    </div>
    );
  }
}

export default Buttons_Footer;






