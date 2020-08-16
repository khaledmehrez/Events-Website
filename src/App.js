import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./index.css";
//import components
import AppGuest from "./view/Layout Guest/AppGuest";
import AppUser from "./view/Layout User/AppUser";

const App =()=> {
  
  const a=2
  if(a===1){
    return (
      <AppGuest />
    )}
    else{
    return(
      <AppUser/>
    )
    }
  }


export default App;
