import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBInput,
  MDBContainer,
  MDBBtn
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
import { Link } from "react-router-dom";
import SelectWithSearch from "../../components/SelectWithSearch";

//import css

//impoert APi

const CreateEvents = () => {
  const [state, setState] = useState({
    toggle: true,
  });
  const toggleFunction = () => {
    setState((prevState) => ({ ...prevState, toggle: !state.toggle }));
  };
  const optionstype = [
    {
      text: "workshop",
      value: "1",
    },
    {
      text: "Hackaton",
      value: "2",
    },
    {
      text: "Seminaire",
      value: "3",
    },
    {
      text: "Training",
      value: "4",
    },
  ];
  const optionscategorie = [
    {
      text: "Web Developemnt",
      value: "1",
    },
    {
      text: "Mobile DEvelopement",
      value: "2",
    },
    {
      text: "Software Developement",
      value: "3",
    },
    {
      text: "Gaming Developement",
      value: "4",
    },
    {
      text: "Artificial Intelegent",
      value: "5",
    },
    {
      text: "Cryptocurency",
      value: "6",
    },
    {
      text: "Security",
      value: "7",
    },
    {
      text: "Network",
      value: "8",
    },
  ];

  return (
    <div>
      <MDBNavbar color="unique-color-dark" style={{ marginTop: "20px" }} dark>
        <Link to="/Home">
          {" "}
          <MDBNavbarBrand href="/Home">
            <img
              src="https://mdbootstrap.com/img/logo/mdb-transparent.png"
              height="30"
              alt=""
            />
          </MDBNavbarBrand>
        </Link>
      </MDBNavbar>
      <MDBContainer className="mt-5">
        <img
          src="https://image.freepik.com/free-vector/create-concept-illustration_114360-315.jpg"
          className="img-fluid"
          alt=""
          style={{ width: "100%", height: "90vh" }}
        />
      </MDBContainer>

      
        <MDBCard
          style={{ width: "80rem", marginLeft: "2.5%", marginTop: "-10%" }}
        >
          <MDBCardBody>
              {state.toggle?
              <div>
            <p>ADD TITLE</p>
            <MDBInput label="Large input" size="lg" /><br/><br/>
            <p>WHAT IS YOUR EVENT TYPE</p>
            <SelectWithSearch options={optionstype} /><br/><br/>
            <p>WHAT IS YOUR EVENT CATEGORIE</p>
            <SelectWithSearch options={optionscategorie} /><br/><br/>
            <p>IS IT FREE OR NOT</p>
            <MDBFormInline>
              <MDBInput
                label="1"
                type="checkbox"
                id="checkbox1"
                containerClass="mr-5"
              />
              <MDBInput
                label="2"
                type="checkbox"
                id="checkbox2"
                containerClass="mr-5"
              />
              
              
            </MDBFormInline><br/><br/>
            <p>Describe your event</p>
            <MDBInput type="textarea" label="Material textarea" rows="5" /><br/><br/>
            <MDBBtn color="primary" rounded onClick={toggleFunction}>
        NEXT
      </MDBBtn>
            </div>
            :
            <div>
                <input type="date" id="birthday" name="birthday"/>
            </div>
            }
          </MDBCardBody>
        </MDBCard>
      
        
      
     
    </div>
  );
};

export default CreateEvents;
