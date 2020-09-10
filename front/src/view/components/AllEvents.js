import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  MDBRow, MDBCol, MDBContainer,MDBBtn, MDBCard, MDBAnimation, MDBCardBody} from
'mdbreact';


import SmallCard from "../../components/SmallCard";
//import css
import "../../assests/css/SectionGuest2.css"
//impoert APi
import {getEventsAPi} from "../../api/apiEvents"
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
const AllEvents =()=> {
  
  const eventState = useSelector((state) => state.eventState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEventsAPi());
   
  }, [dispatch]);

    return (
      <div className="SectionGuest2">
    

     <MDBContainer>
     <MDBAnimation type="slideInLeft" duration="800ms" reveal>
        <h1 id="titleSEctionAllEVENTS">All Events</h1>
      </MDBAnimation>
     <MDBCard>
       <MDBCardBody>
     <div className="SmallCardContainer sectionGuest2Card">
    
     
     {eventState.slice(0,6).map(el=><SmallCard  DataSmallCard={el} link="/MoreInformation" />)}
     
     </div>
     <Link to="/AllEvents"> <MDBBtn id="btnSectionAllEvents"  gradient="blue">Browse More</MDBBtn> </Link>
     </MDBCardBody>
     </MDBCard>
     
     </MDBContainer>
     
    
     </div>

    );
  }


export default AllEvents;
