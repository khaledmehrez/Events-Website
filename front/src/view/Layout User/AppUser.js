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
import Profile from "../components/Profile";
import Navbar from "../../components/Navbar";
const AppUser =()=> {
  
  
    return (
      <div >
        <Navbar parametre={false}/>
      <Switch> 
      <Route exact path="/" component={() => (<Redirect to='/Home' />)} />
      <Route path='/MoreInformation/:id' component={MoreInformation}/>
      <Route path='/Home' component={HomeUser} />
      <Route path="/AllEvents" component={BrowseAllEvents}/>
      <Route path="/MyEvents" component={MyEvents}/>
      <Route path="/CreateEvents" component={CreateEvents}/>
      <Route path='/Profile/:id' component={Profile}/>
     </Switch> 
     
     </div>
    );
  }


export default AppUser;
