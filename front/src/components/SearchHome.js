import React from "react";
import { MDBCol, MDBIcon,MDBBtn, MDBCard } from "mdbreact";

//import css
import "../assests/css/SearchHome.css"

const SearchHome = (props) => {
  
  return (
    <MDBCol md="12">
      <div style={{marginTop:"-25%",width:"80%",marginLeft:"auto",marginRight:"auto"}}>
      <div className="input-group md-form form-sm form-1 pl-0  ">
        
        
        <input style={{color:"yellow"}} className="form-control my-0 py-1 InputSearch" type="text" placeholder="Search" aria-label="Search" onChange={props.handlechange} />
        <div className="input-group-prepend">
          
          <MDBBtn className={"btnSearcgHome"} color={"light-blue lighten-1"} size={"lg"}  onClick={props.handleclick}><MDBIcon  className="text-white" icon="search" /></MDBBtn>
          
        </div>
      
        
      </div>
      </div>
      <hr/>

    </MDBCol>
  );
}

export default SearchHome;