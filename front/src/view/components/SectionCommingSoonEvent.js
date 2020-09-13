import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  MDBRow, MDBCol, MDBContainer,MDBBtn, MDBCard, MDBAnimation} from
'mdbreact';


import SmallCard from "../../components/SmallCard";
//import css
import "../../assests/css/SectionCommingSoon.css"
import "../../assests/css/GridSmallCardContainer.css"
//impoert APi
import {getEventsAPi} from "../../api/apiEvents"
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
const SectionCommingSoonEvent =()=> {
  
  const eventState = useSelector((state) => state.eventState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEventsAPi());
   
  }, [dispatch]);
  
  var today = new Date()
  if((today.getMonth() + 1)<10){
    var thismonth="0"+(today.getMonth() + 1)
  }
  else var thismonth=today.getMonth() + 1

  if((today.getDate() )<10){
    var thisday="0"+(today.getDate())
  }
  else var thisday=today.getDate()

   var date = today.getFullYear() + '-' + thismonth + '-' + thisday;
console.log(date)


    return (

      <div className="SectionCommingSoon">
       <MDBAnimation type="slideInLeft" duration="800ms" reveal>
       
      </MDBAnimation>
      <MDBContainer  >
      <MDBCard >
      <h1 id="titleSEctionCommingSoon">events this day</h1>
     
       <div className="SmallCardContainer containerCardCommingSoon">
    
     
     {eventState.filter(el=>el.date===date).slice(0,3).map(el=><SmallCard  DataSmallCard={el} link="/MoreInformation" />)}
     
     </div>
     
     <Link to="/AllEvents"> <MDBBtn id="btnCommingSoon" gradient="blue">See All</MDBBtn> </Link>
    
   
     </MDBCard>
     </MDBContainer>
     <hr/>
     </div>
    );
  }


export default SectionCommingSoonEvent;