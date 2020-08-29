import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  MDBRow, MDBCol, MDBContainer,MDBBtn} from
'mdbreact';


import SmallCard from "../../components/SmallCard";
//import css
import "../../assests/css/SectionGuest2.css"
//impoert APi
import {getEventsAPi} from "../../api/apiEvents"
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
const SectionGuest2 =()=> {
  
  const eventState = useSelector((state) => state.eventState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEventsAPi());
   
  }, [dispatch]);

    return (
      <div className="SectionGuest2">
     <h1 className="titleSectionGuest2">Find yout IT Event Now</h1>
     <MDBContainer>
     <div className="SmallCardContainer">
    
     
     {eventState.slice(0,6).map(el=><SmallCard  DataSmallCard={el} link="/MoreInformation" />)}
     
     </div>
     </MDBContainer>
     <Link to="/AllEvents"> <MDBBtn style={{marginLeft:"52%"}} gradient="blue">Blue</MDBBtn> </Link>
     
     </div>

    );
  }


export default SectionGuest2;
