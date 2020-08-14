import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  MDBRow, MDBCol, MDBContainer} from
'mdbreact';

import IntroGuest from "../components/IntroGuest";

//impoert APi
import {getEventsAPi} from "../../../api/apiEvents"
import SectionGuest2 from "../components/SectionGuest2";
import Footer from "../../../components/Footer";
const HomeGuest =()=> {
  
  const eventState = useSelector((state) => state.eventState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEventsAPi());
   
  }, [dispatch]);
console.log(eventState)
    return (
      <div>
        
     <IntroGuest/>
    <SectionGuest2/>
    <Footer/>
     
     </div>
    );
  }


export default HomeGuest;