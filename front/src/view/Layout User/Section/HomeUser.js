import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  MDBRow, MDBCol, MDBContainer} from
'mdbreact';



//impoert APi
import {getEventsAPi} from "../../../api/apiEvents"
import IntroUser from "../../components/IntroUser";
import SectionHomeUser2 from "../../components/SectionPrefferedEvents";
import SectionHomeUser3 from "../../components/SectionHomeUser3";
import Footer from "../../../components/Footer";
import PopupModal from "../../../components/PopupModal";
import AllEvents from "../../components/AllEvents";
import SectionCommingSoonEvent from "../../components/SectionCommingSoonEvent";

const HomeUser =()=> {
  const userState = useSelector((state) => state.userState);
  const eventState = useSelector((state) => state.eventState);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEventsAPi());
   
  }, [dispatch]);

    return (
      <div style={{marginTop:"5%"}}>
      
     <IntroUser/>
     <SectionHomeUser2/>
     <SectionCommingSoonEvent/>
     <div style={{}}>
     <AllEvents/>
     </div>
    <Footer />
     
     </div>
    );
  }


export default HomeUser;