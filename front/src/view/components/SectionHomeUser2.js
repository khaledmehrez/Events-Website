import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  MDBRow, MDBCol, MDBContainer,MDBBtn,MDBCarousel,MDBCarouselInner} from
'mdbreact';



//import css
import "../../assests/css/SectionHomeUser2.css"
//impoert APi
import {getEventsAPi} from "../../api/apiEvents"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";import MultiCarousel from "../../components/MultiCardCarousel";
import SmallCard from "../../components/SmallCard";
const SectionHomeUser2 =(props)=> {
  
  const eventState = useSelector((state) => state.eventState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEventsAPi());
   
  }, [dispatch]);



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
      <div className="bodySectionHomeUser2" >
     <h1 id="titleSectionHomeUser2">Suggested Events For You</h1>
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
    draggable
  >
    
    {eventState.map(el=><div><SmallCard  DataSmallCard={el} link="/MoreInformation" /></div>)}
   
  </Carousel>
    
    <hr/>
    
     
     
     
     </div>

    );
  }


export default SectionHomeUser2;
