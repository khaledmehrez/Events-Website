import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  MDBRow, MDBCol, MDBContainer} from
'mdbreact';




import HomeGuest from "./Section/HomeGuest";
import { Switch,Route,Redirect } from "react-router-dom";
import MoreInformation from "../components/MoreInformation";
import BrowseAllEvents from "../components/BrowseAllEvents";
import SignUp from "../components/SignUp";
import Navbar from "../../components/Navbar";
const AppGuest =()=> {
  
  
    return (
      <div>
        <Navbar/>
        
      <Switch> 
      <Route exact path="/" component={() => (<Redirect to='/Home' />)} />
      <Route path='/MoreInformation/:id' component={MoreInformation}/>
      <Route path='/Home' component={HomeGuest} />
      <Route path="/AllEvents" component={BrowseAllEvents}/>
      <Route path='/SignUp' component={SignUp} />
     </Switch> 
   
     </div>
    );
  }


export default AppGuest;
