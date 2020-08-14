import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  MDBRow, MDBCol, MDBContainer,MDBBtn} from
'mdbreact';


import SmallCard from "../../../components/SmallCard";
//import css
import "../css/SectionGuest2.css"
//impoert APi
import {getEventsAPi} from "../../../api/apiEvents"
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";
const SectionGuest2 =()=> {
  
  const eventState = useSelector((state) => state.eventState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEventsAPi());
   
  }, [dispatch]);
console.log(eventState)
    return (
      <div className="SectionGuest2">
     <h1>Find yout IT Event Now</h1>
     <MDBContainer className="CardContainerGuest">
     <MDBRow>
     
     {eventState.map(el=><SmallCard  DataSmallCard={el} link="/MoreInformation" />)}
     
     </MDBRow>
     </MDBContainer>
     <Link to="/AllEvents"> <MDBBtn style={{marginLeft:"52%"}} gradient="blue">Blue</MDBBtn> </Link>
     
     </div>

    );
  }


export default SectionGuest2;
