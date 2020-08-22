import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withCookies } from 'react-cookie';
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./index.css";
//import components
import AppGuest from "./view/Layout Guest/AppGuest";
import AppUser from "./view/Layout User/AppUser";

import cookie from 'react-cookies'
var jwtDecode = require('jwt-decode');
const App =()=> {
  const[cookieState,setCookie]=useState({
    cookieToken:""
  })
  const dispatch = useDispatch();
  useEffect(() => {
    if(document.cookie!=="")
    setCookie(prevState => ({ ...prevState, cookieToken: jwtDecode(document.cookie) }));
    
  
  }, [dispatch]);
  
  if(cookieState.cookieToken.data!==undefined){
    var role=cookieState.cookieToken.data.role
  }
  
 console.log(role)
  const a=1
  if(role==="professionel"||role==="particular"){
    return (
      <AppUser/>
      
    )}
    else{
    return(
      <AppGuest />
    )
    }
  }


export default withCookies(App);
