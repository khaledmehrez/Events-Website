import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  MDBRow, MDBCol, MDBContainer} from
'mdbreact';



//impoert APi
import {getEventsAPi} from "../../../api/apiEvents"
import IntroUser from "../../components/IntroUser";
import SectionHomeUser2 from "../../components/SectionHomeUser2";
import SectionHomeUser3 from "../../components/SectionHomeUser3";
import Footer from "../../../components/Footer";
import PopupModal from "../../../components/PopupModal";

const HomeUser =()=> {
  const userState = useSelector((state) => state.userState);
  const eventState = useSelector((state) => state.eventState);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEventsAPi());
   
  }, [dispatch]);

    return (
      <div>
      
     <IntroUser/>
     <SectionHomeUser2/>
     <SectionHomeUser3/>
    <Footer />
     
     </div>
    );
  }


export default HomeUser;