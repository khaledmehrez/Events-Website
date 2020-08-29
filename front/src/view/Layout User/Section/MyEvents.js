import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MDBBtn,MDBContainer,MDBRow } from "mdbreact";
import Navbar from "../../../components/Navbar";
import { Link } from "react-router-dom";





//import css

//impoert APi
import {getEventsAPi} from "../../../api/apiEvents"
import SmallCard from "../../../components/SmallCard";

var jwtDecode = require('jwt-decode');
const MyEvents =()=> {
  const eventState = useSelector((state) => state.eventState);
  const userState = useSelector((state) => state.userState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEventsAPi());
   
  }, [dispatch]);
  

const id=userState._id
const role=userState.role
    return (
      <div >
     <Navbar/>
    {role==="professionel"? <Link to="/CreateEvents"><MDBBtn gradient="peach">Create New Event</MDBBtn></Link>:null}
    
     <div >
     <h1 > your IT Event </h1>
     <MDBContainer >
     <MDBRow>
     
     {eventState.filter(el=>el.iduser===id).map(el=><SmallCard idUser={id}  DataSmallCard={el} link="/MoreInformation" />)}
     
     </MDBRow>
     </MDBContainer>
     
     
     </div>
    
     
     
     
     </div>

    );
    
  }


export default MyEvents;