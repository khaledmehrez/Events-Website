import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";






import SideBar from "../../components/SideBar";
import { Switch, Route } from "react-router-dom";

import Tables from "./Section/DashboardUsers";
import Profile from "../components/Profile";
import { MDBNav, MDBNavbar, MDBNavbarBrand } from "mdbreact";
import OrganizerUser from "./component/OrganizerUser";
import ParticipantUser from "./component/ParticipantUser";
import {pushRotate as Menu } from 'react-burger-menu'
import MoreInformation from "../components/MoreInformation";
import DashboardEvents from "./component/DashboardEvents";
import DashboardCategorie from "./component/DashboardCategoreie";
const AppAdmin =()=> {
  
  
    return (
 
      <div  >
        <SideBar/>
         <MDBNavbar  color="grey lighten-4" style={{ height:"15vh" }} dark>
        
          <MDBNavbarBrand href="/Home">
            <img
             
              height="30"
              alt=""
            />
          </MDBNavbarBrand>
       
      </MDBNavbar>
     
      <Switch>
     
      <Route path='/MoreInformation/:id' component={MoreInformation}/>
      <Route path='/DashboardUser' component={Tables} />
      <Route path='/DashboardEvents' component={DashboardEvents} />
      <Route path='/DashboardCategorie' component={DashboardCategorie} />
      <Route path='/Organizer' component={OrganizerUser} />
      <Route path='/Participant' component={ParticipantUser} />
      <Route path='/Profile/:id' component={Profile}/>
      </Switch>
     </div>
     
    );
  }
 

export default AppAdmin;
