import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  MDBRow, MDBCol, MDBContainer,MDBBtn} from
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
    var thisday="0"+(today.getMonth() + 1)
  }
  else var thisday=today.getMonth() + 1


   var date = today.getFullYear() + '-' + thisday + '-' + today.getDate();


    return (
      <div className="SectionCommingSoon">
     <h1 id="titleSEctionCommingSoon">what e have this day</h1>
     <MDBContainer >
       <div className="SmallCardContainer">
    
     
     {eventState.filter(el=>el.date===date).slice(0,3).map(el=><SmallCard  DataSmallCard={el} link="/MoreInformation" />)}
     
     </div>
     
     <Link to="/AllEvents"> <MDBBtn style={{marginLeft:"52%"}} gradient="blue">See All</MDBBtn> </Link>
     </MDBContainer>
     </div>

    );
  }


export default SectionCommingSoonEvent;