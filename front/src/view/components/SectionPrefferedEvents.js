import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  MDBRow, MDBCol, MDBContainer,MDBBtn,MDBCarousel,MDBCarouselInner, MDBAnimation, MDBCard} from
'mdbreact';



//import css
import "../../assests/css/SectionPrefferdEvents.css"

//impoert APi
import {getEventsAPi} from "../../api/apiEvents"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";import MultiCarousel from "../../components/MultiCardCarousel";
import SmallCard from "../../components/SmallCard";
const SectionPrefferedEvents =(props)=> {
  
  const eventState = useSelector((state) => state.eventState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEventsAPi());
   
  }, [dispatch]);

//get user
const userState = useSelector((state) => state.userState);
//get Event by preference
let tabEventPreffered=[]
for(let i=0;i<userState.pre.length;i++){
  const a=eventState.filter(el=>el.categorie===userState.pre[i])
  if(a.length>0)
  tabEventPreffered.push(a[0])
}
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
 
    return (
     
      <MDBContainer>
        <div className="bodySectionHomeUser2" >
         
      
         <MDBAnimation type="slideInLeft" duration="800ms" reveal>
     <h1 id="titleSectionHomeUser2" className="titleHome h1-responsive">Suggested Events For You</h1>
     </MDBAnimation>
     <MDBCard>
     <Carousel
    swipeable={false}
    draggable={false}
    showDots={true}
    responsive={responsive}
    ssr={true} // means to render carousel on server-side.
    infinite={true}
    autoPlay={props.deviceType !== "mobile" ? true : false}
    autoPlaySpeed={1000}
    keyBoardControl={true}
    customTransition="all .5"
    transitionDuration={500}
    containerClass="carousel-container"
    removeArrowOnDeviceType={["tablet", "mobile"]}
    deviceType={props.deviceType}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
    className="carouselHomeUser"
    
  >
    
    {tabEventPreffered.map(el=><div><SmallCard  DataSmallCard={el} link="/MoreInformation" /></div>)}
   
  </Carousel>
  </MDBCard>
    <hr/>
    
     
     
     
     
     
     </div>
     </MDBContainer>
     
    );
  }


export default SectionPrefferedEvents;
