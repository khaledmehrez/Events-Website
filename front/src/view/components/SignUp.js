import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBInput,
  MDBContainer,
  MDBBtn,
  MDBInputGroup,
} from "mdbreact";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBFormInline,
} from "mdbreact";
import { MDBAnimation } from "mdbreact";
import { Link } from "react-router-dom";
//import components
import SelectWithSearch from "../../components/SelectWithSearch";

import MapWrapped from "../../components/GooleMap";

//import css

//impoert APi
import { postUsersSignUpApi } from "../../api/apiUsers";
import Modal from "../../components/PopupModal";

//import picture
import person from "../../assests/picture/person.jpg";
import company from "../../assests/picture/company.jpg";

const SignUp = () => {
  //state
  const [state, setState] = useState({
    toggle: "",
  });
  const [stateData, setStateData] = useState({
    role: "",
    type: "",
    socialReason: "",
    firstName: "",
    lastName: "",
    mail: "",
    password: "",
    adresse: "",
  });
  //dispatch
  const dispatch = useDispatch();
  //get data from input
  function handlechange(e) {
    const { name, value } = e.target;
    setStateData((prevState) => ({ ...prevState, [name]: value }));
    console.log(e.target);
  }
  //change state from picture
  function handlechangePicture(e, value) {
    const { name } = e.target;
    setStateData((prevState) => ({ ...prevState, [name]: value }));
  }

  //post new user
  function PostNewuser() {
    dispatch(postUsersSignUpApi(stateData));
  }
  //change input
  const toggleFunction = (e) => {
    setState((prevState) => ({ ...prevState, toggle: e.target.title }));
  };
 

  return (
    <div>
      <Modal />

      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Recent posts
      </h2>
      <p className="text-center w-responsive mx-auto mb-5">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      <hr className="my-5" />
      <MDBCard style={{ width: "80rem", marginLeft: "2.5%" }}>
        <MDBCardBody>
          {state.toggle === "" ? (
            <div>
              <p>Are you</p>
              <MDBFormInline>
              <MDBBtn
                gradient="blue"
                size="lg"
                title="Professionel"
                name="role"
                value="professionel"
                onClick={(e) => {
                  toggleFunction(e);
                  handlechange(e);
                }}
              >
                Organizer
              </MDBBtn>
              <br />
              <MDBBtn
                gradient="purple"
                title="particular"
                name="role"
                value="particular"
                onClick={(e) => {
                  toggleFunction(e);
                  handlechange(e);
                }}
              >
                Participant
              </MDBBtn>
              </MDBFormInline>

              <br />
              <br />
            </div>
          ) : null}

          {/*professionel part*/}

          {state.toggle === "Professionel" ? (
            <div>
              <p>Are you</p>
              <MDBRow>
                <MDBCol>
                  <MDBAnimation type="slideInRight">
                    <p>a company</p>
                    <img
                      className="img-fluid"
                      width="250vw"
                      height="5vh"
                      alt=""
                      title="company"
                      name="type"
                      onClick={(e) => {
                        toggleFunction(e);
                        handlechangePicture(e, "company");
                      }}
                      src={company}
                    />
                  </MDBAnimation>
                </MDBCol>
                <MDBCol>
                  <MDBAnimation type="slideInRight">
                    <p>a person</p>
                    <img
                      className="img-fluid"
                      width="250vw"
                      alt=""
                      title="person"
                      name="type"
                      value="person"
                      onClick={(e) => {
                        toggleFunction(e);
                        handlechangePicture(e, "person");
                      }}
                      src={person}
                    />
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </div>
          ) : null}

          {/*if it is a company*/}
          {state.toggle === "company" ? (
            <div>
              <MDBInput
                label="Soacial Raison"
                icon="user"
                name="socialReason"
                onChange={handlechange}
              />
              <MDBInput label="mail" name="mail" onChange={handlechange} />
              <MDBInput
                label="password"
                name="password"
                onChange={handlechange}
              />
              <MDBInput label="adress" name="adresse" onChange={handlechange} />
              <MDBBtn onClick={PostNewuser}>SUBMIT</MDBBtn>
            </div>
          ) : null}
          {/*if it is a person*/}
          {state.toggle === "person" || state.toggle === "particular" ? (
            <div>
              <MDBInput
                label="First name"
                name="firstName"
                onChange={handlechange}
              />
              <MDBInput
                label="Last name"
                name="lastName"
                onChange={handlechange}
              />

              <MDBInput label="mail" name="mail" onChange={handlechange} />
              <MDBInput
                label="password"
                name="password"
                onChange={handlechange}
              />
              <MDBInput
                label="adresse"
                name="adresse"
                onChange={handlechange}
              />
              <MDBBtn onClick={PostNewuser}>SUBMIT</MDBBtn>
            </div>
          ) : null}
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default SignUp;
