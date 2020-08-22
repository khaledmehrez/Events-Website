import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBInput,
  MDBContainer,
  MDBBtn,
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
//import components
import SelectWithSearch from "../../components/SelectWithSearch";


import MapWrapped from "../../components/GooleMap";

//import css

//impoert APi
import {PostEventsAPi} from "../../api/apiEvents"
import Modal from "../../components/PopupModal";



var jwtDecode = require('jwt-decode');
const CreateEvents = () => {
  //state
  const [state, setState] = useState({
    toggle: true,
  });
  const [stateData,setStateData]=useState({
    Title:"",
    Type:"",
    Categorie:"",
    location:"",
    date:"",
    payment:"",
    idUser:""
})
//dispatch
const dispatch =useDispatch()
//get data from input
function handlechange(event){
  const { name, value } = event.target;
  setStateData(prevState => ({ ...prevState, [name]: value }));
 
 
}
//get user id
const[cookieState,setCookie]=useState({
  cookieToken:""
})

useEffect(() => {
  if(document.cookie!=="")
  setCookie(prevState => ({ ...prevState, cookieToken: jwtDecode(document.cookie) }));
  

}, [dispatch]);
const SaveId=()=>{
if(cookieState.cookieToken.data!==undefined){
  var id=cookieState.cookieToken.data._id
  setStateData(prevState => ({ ...prevState, idUser: id }));
  
}
}

//post new event
function PostNewEvents(){
  
dispatch(PostEventsAPi(stateData))
}
  //change input
  const toggleFunction = () => {
    setState((prevState) => ({ ...prevState, toggle: !state.toggle }));
  };
  
  //option passed to the select components
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
      <Modal isOpen={true} />
      <MDBContainer className="mt-5">
        <img
          src="https://image.freepik.com/free-vector/create-concept-illustration_114360-315.jpg"
          className="img-fluid"
          alt=""
          style={{ width: "100%", height: "90vh" }}
        />
      </MDBContainer>

     {state.toggle? (<MDBCard
        style={{ width: "80rem", marginLeft: "2.5%", marginTop: "-10%" }}
      >
        <MDBCardBody>
         
            <div>
              <p>ADD TITLE</p>
              <MDBInput label="Large input" size="lg" name="Title" onChange={handlechange} />
              <br />
              <br />
              <p>WHAT IS YOUR EVENT TYPE</p>
              <SelectWithSearch options={optionstype} />
              <br />
              <br />
              <p>WHAT IS YOUR EVENT CATEGORIE</p>
              <SelectWithSearch options={optionscategorie} />
              <br />
              <br />
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
              </MDBFormInline>
              <br />
              <br />
              <p>Describe your event</p>
              <MDBInput type="textarea" label="Material textarea" rows="5" />
              <br />
              <br />
              <input type="date" id="birthday" name="birthday" />
              <input type="time" id="appt" name="appt" />
              <MDBBtn color="primary" rounded onClick={()=>{toggleFunction();SaveId()}}>
                NEXT
              </MDBBtn>
            </div>
          
        </MDBCardBody>
      </MDBCard>):(
      <div>
        <div style={{ width: "100vw", height: "100vh" }}>
     <MapWrapped
     googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
      'AIzaSyBLVScCQd-jFxdXw36rq61F8y2a-CuMK8w'
    }`}
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `100%` }} />}
    mapElement={<div style={{ height: `100%` }} />}
     />
     </div>
      <MDBBtn color="primary" rounded onClick={()=>{PostNewEvents()}}>
               Submit
              </MDBBtn>
              </div>
      )}
    </div>
  );
};

export default CreateEvents;
