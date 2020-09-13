import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  MDBAnimation, MDBContainer,MDBBtn, MDBIcon } from "mdbreact";


import { Parallax, Background } from "react-parallax";
//impoert APi
import { getEventsAPi } from "../../../api/apiEvents";

//import css
import "../../../assests/css/HomeGuest.css";
import "../../../assests/css/GridSmallCardContainer.css"
//import components
import AllEvents from "../../components/AllEvents";
import Footer from "../../../components/Footer";

import SectionCommingSoonEvent from "../../components/SectionCommingSoonEvent";
import IntroGuest from "../../components/IntroGuest";
import SearchHome from "../../../components/SearchHome"
import SmallCard from "../../../components/SmallCard";


const HomeGuest = () => {
  const eventState = useSelector((state) => state.eventState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEventsAPi());
  }, [dispatch]);
//get search data
const  [StateSearch,setStateSearch]=useState({
  Search:""
})
const [Statetoggle,setStatetoggle]=useState({
  toggle:false
})
const handlechange=(e)=>{
  const {value}=e.target
  setStateSearch((prevState) => ({ ...prevState,Search: value }));
}
const handleclick=()=>{
  setStatetoggle((prevState) => ({ ...prevState,toggle: !Statetoggle.toggle }));
  window.scrollTo(0, 500)
}
if(Statetoggle.toggle===false){
  return (
    <div>
      <IntroGuest />
      <div className="">
        <MDBContainer>
      <SearchHome handlechange={handlechange} handleclick={handleclick}/>
      </MDBContainer>
      </div>
      

      <SectionCommingSoonEvent />
      
      <AllEvents/>
      

      <Footer />
    </div>
  );
}
else if(Statetoggle){
  const filtredArray=eventState
  .filter(
    StateSearch.Search !== ""
      ? (el) => el.title.toLowerCase().includes(StateSearch.Search.toLowerCase())
      : (el) => el
  )
return(
  <div>
  <IntroGuest />
  
  <MDBContainer >
  
  <MDBBtn gradient="blue" onClick={handleclick}><MDBIcon icon="arrow-left" /></MDBBtn>
  <div className="SmallCardContainer CardContaienrHomeGuest">
    
  {filtredArray.length>0?filtredArray.map(el=><SmallCard  DataSmallCard={el} link="/MoreInformation" />)
:<p id="filterEmpty">Sorry there is no Events</p>  
}
    </div>
    </MDBContainer>
  
  </div>
)
}
};

export default HomeGuest;
