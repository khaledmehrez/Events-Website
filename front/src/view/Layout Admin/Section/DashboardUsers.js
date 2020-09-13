import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdbreact";

import TablePage from "../../../components/Tables";

//api
import { getUsersApi } from "../../../api/apiUsers";
import { Link } from "react-router-dom";

const DashboardUsers = () => {
  return (
    
    <MDBContainer >
      <MDBRow>
        <MDBCol>
          <MDBCard style={{ width: "22rem" }}>
            <MDBCardImage
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
              waves
            />
            <MDBCardBody>
              <MDBCardTitle>Organizer</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card&apos;s content.
              </MDBCardText>
            <Link to="/Organizer">  <MDBBtn href="/Tables/Organizer">Show Organizer</MDBBtn></Link>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard style={{ width: "22rem" }}>
            <MDBCardImage
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
              waves
            />
            <MDBCardBody>
              <MDBCardTitle>Participant</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card&apos;s content.
              </MDBCardText>
              <Link to="/Participant"><MDBBtn href="#">Show Participant</MDBBtn></Link>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default DashboardUsers;
