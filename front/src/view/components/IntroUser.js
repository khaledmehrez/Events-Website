import React, { Component, useState, useEffect } from "react";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBBtn,
} from "mdbreact";
import Navbar from "../../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
// import api
import { getEventsAPi } from "../../api/apiEvents";
import { Link } from "react-router-dom";

const IntroUser = () => {
  const [state, setState] = useState({
    collapsed: false,
  });
  const eventState = useSelector((state) => state.eventState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEventsAPi());
  }, [dispatch]);

  const handleTogglerClick = () => {
    setState((prevState) => ({ ...prevState, collapsed: !collapsed }));
  };
  const { collapsed } = state;
  return (
    <div>
     

      <MDBCarousel
        activeItem={1}
        length={eventState.length-1}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>

       {eventState.map((el,i)=> 
       
          <MDBCarouselItem itemId={`${i}`}>
            <MDBView>
              <img
                className="d-block w-100"
                src={`http://localhost:5000/${el.image}`}
                alt="First slide"
                height="550vh"
              />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              
              <Link to ={{
      pathname:`/MoreInformation/${el._id}`,
      
  }}>
              <MDBBtn gradient="blue" style={{borderRadius:"20px"}}>Consult Event</MDBBtn></Link>
              
            </MDBCarouselCaption>
          </MDBCarouselItem>
          
          
       )}
        </MDBCarouselInner>
      </MDBCarousel>

      <hr />
    </div>
  );
};

export default IntroUser;
