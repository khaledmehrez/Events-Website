import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  MDBRow, MDBCol, MDBContainer} from
'mdbreact';

import IntroGuest from "../../components/IntroGuest";
import { Parallax, Background } from 'react-parallax';
//impoert APi
import {getEventsAPi} from "../../../api/apiEvents"
import SectionGuest2 from "../../components/SectionGuest2";
import Footer from "../../../components/Footer";
import SignIn from "../../components/Sign-In";
import SectionCommingSoonEvent from "../../components/SectionCommingSoonEvent";

const HomeGuest =()=> {
  
  const eventState = useSelector((state) => state.eventState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEventsAPi());
   
  }, [dispatch]);

    return (
      <div>

        
     
     <IntroGuest/>
    
     <Parallax
     blur={1}
     bgImage={require("../../../assests/picture/70.jpg")}
     bgImageAlt="the cat"
     strength={1200}
 >
 <SectionCommingSoonEvent  />
 </Parallax>

        
     
     <Parallax
     blur={1}
     bgImage={require("../../../assests/picture/69.jpg")}
     bgImageAlt="the cat"
     strength={1000}
 >
        <SectionGuest2/>
        </Parallax>
  
    <Footer/>
 
     
     </div>
    );
  }


export default HomeGuest;