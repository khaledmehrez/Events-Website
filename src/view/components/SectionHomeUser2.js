import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  MDBRow, MDBCol, MDBContainer,MDBBtn,MDBCarousel,MDBCarouselInner} from
'mdbreact';



//import css

//impoert APi
import {getEventsAPi} from "../../api/apiEvents"

import MultiCarousel from "../../components/MultiCardCarousel";
const SectionHomeUser2 =()=> {
  
  const eventState = useSelector((state) => state.eventState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEventsAPi());
   
  }, [dispatch]);

    return (
      <div >
     
     
     <MDBContainer >
     <h1>Events For You</h1>
      <MDBCarousel activeItem={1} length={eventState.length-1} slide={true} showControls={true} showIndicators={true} multiItem>
        <MDBCarouselInner>
        
          
     {eventState.map((el,i)=><MultiCarousel  DataMultiCardCarousel={el} id={i} link="/MoreInformation" />)}
     
            
            
     </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
    <hr/>
    
     
     
     
     </div>

    );
  }


export default SectionHomeUser2;
