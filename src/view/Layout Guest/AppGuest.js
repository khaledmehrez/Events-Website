import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  MDBRow, MDBCol, MDBContainer} from
'mdbreact';




import HomeGuest from "./Section/HomeGuest";
import { Switch,Route,Redirect } from "react-router-dom";
import MoreInformation from "./Section/MoreInformation";
import BrowseAllEvents from "./Section/BrowseAllEvents";
const AppGuest =()=> {
  
  
    return (
      <div>
      <Switch> 
      <Route exact path="/" component={() => (<Redirect to='/Home' />)} />
      <Route path='/MoreInformation/:id' component={MoreInformation}/>
      <Route path='/Home' component={HomeGuest} />
      <Route path="/AllEvents" component={BrowseAllEvents}/>
     </Switch> 
     
     </div>
    );
  }


export default AppGuest;
