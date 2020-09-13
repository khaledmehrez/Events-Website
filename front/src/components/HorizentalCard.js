import React, { useEffect, useState } from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBIcon,
  MDBView,
  MDBBtn,
  MDBContainer,
} from "mdbreact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const HorizntalCard = (props) => {
  const { DataHorizentalCard, DataHorizentalCard2 } = props;
  //get userdata


  const UserEventData = DataHorizentalCard2.filter(
    (el) => el._id === DataHorizentalCard.iduser
  );
 
  return (
    <MDBCard>
      
        
          <MDBCardBody>
            <MDBRow>
              <MDBCol lg="5" xl="4">
                <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                  <img
                    className="img-fluid"
                    src={`http://localhost:5000/${DataHorizentalCard.image}`}
                    alt=""
                    
                  />

                  <a>
                    <MDBMask overlay="white-slight" />
                  </a>
                </MDBView>
              </MDBCol>
              <MDBCol lg="2" xl="8">
                <span style={{display:"flex",justifyContent:"space-between"}}>
                <h3 className="font-weight-bold mb-3 p-0">
                  <strong>{DataHorizentalCard.title}</strong>
                </h3>

                 
                <strong className="deep-orange-text">
                    {DataHorizentalCard.date + " " + DataHorizentalCard.time}
                  </strong>
               
                  </span>
                  
                  <span style={{display:"flex",justifyContent:"space-between"}}>
                 
                  <Link
                  to={{
                    pathname: `/Profile/${UserEventData[0]._id}`,
                    
                  }}>
               
                  <a  className="font-weight-bold">
                    {UserEventData[0].role === "professionel" &&
                    UserEventData[0].type === "company" ? (
                      <p>by {UserEventData[0].socialraison}</p>
                    ) : (
                      <p> by {UserEventData[0].firstname}</p>
                    )}
                  </a>
                 
                  </Link>
                  
                <Link
                  to={{
                    pathname: `/MoreInformation/${DataHorizentalCard._id}`,
                    state: { DataHorizentalCard },
                  }}
                >
                  <MDBBtn color="primary" size="md">
                    Read More
                  </MDBBtn>
                </Link>
                </span>
              </MDBCol>
            </MDBRow>
            <hr className="my-5" />
          </MDBCardBody>
        
    
    </MDBCard>
  );
};

export default HorizntalCard;
