import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withCookies } from 'react-cookie';
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./index.css";
//import components
import AppGuest from "./view/Layout Guest/AppGuest";
import AppUser from "./view/Layout User/AppUser";

//import actions
import{storeUserAction} from "./action/userAction"
import AppAdmin from "./view/Layout Admin/AppAdmin";
var jwtDecode = require('jwt-decode');
const App =()=> {
  const[cookieState,setCookie]=useState({
    cookieToken:""
  })
  const dispatch = useDispatch();
  useEffect(() => {
    const token=sessionStorage.getItem('token')
    
    if(token!==null)
    setCookie(prevState => ({ ...prevState, cookieToken: jwtDecode(token) }));
   
  }, []);
  
  
  if(cookieState.cookieToken.data!==undefined){
    dispatch(storeUserAction(cookieState.cookieToken.data))
    var role=cookieState.cookieToken.data.role
  }
  

  
  if(role==="professionel"||role==="particular"){
    return (
      <AppUser/>
      
    )}

else if(role==="admin"){
  return(
    <AppAdmin/>
  )
}

    else{
    return(
      <AppGuest />
    )
    }
  }


export default withCookies(App);
