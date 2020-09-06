import React from "react";
import { MDBCol, MDBIcon,MDBBtn, MDBCard } from "mdbreact";

const SearchHome = (props) => {
  
  return (
    <MDBCol md="12">
      <MDBCard style={{marginTop:"7%"}}>
      <div className="input-group md-form form-sm form-1 pl-0  ">
        <div className="input-group-prepend">
          <span className="input-group-text purple lighten-3" id="basic-text1">
            <MDBIcon className="text-white" icon="search" />
          </span>
        </div>
        <input className="form-control my-0 py-1 " type="text" placeholder="Search" aria-label="Search" onChange={props.handlechange} />
        <MDBBtn rounded color="secondary" style={{borderRadius:"25px"}} onClick={props.handleclick}>OK</MDBBtn>
        
      </div>
      </MDBCard>
      <hr/>

    </MDBCol>
  );
}

export default SearchHome;