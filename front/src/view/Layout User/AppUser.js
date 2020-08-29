import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  MDBRow, MDBCol, MDBContainer} from
'mdbreact';




import { Switch,Route,Redirect } from "react-router-dom";

import HomeUser from "./Section/HomeUser";
import MoreInformation from "../components/MoreInformation";
import BrowseAllEvents from "../components/BrowseAllEvents";
import MyEvents from "./Section/MyEvents";
import CreateEvents from "../components/CreateEvents";
const AppUser =()=> {
  
  
    return (
      <div>
      <Switch> 
      <Route exact path="/" component={() => (<Redirect to='/Home' />)} />
      <Route path='/MoreInformation/:id' component={MoreInformation}/>
      <Route path='/Home' component={HomeUser} />
      <Route path="/AllEvents" component={BrowseAllEvents}/>
      <Route path="/MyEvents" component={MyEvents}/>
      <Route path="/CreateEvents" component={CreateEvents}/>
     </Switch> 
     
     </div>
    );
  }


export default AppUser;
