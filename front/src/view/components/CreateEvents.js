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

import * as Constant from "./Constant";
import MapWrapped from "../../components/GooleMap";
import Modal from "../../components/PopupModal";

//import css

//impoert APi
import { PostEventsAPi } from "../../api/apiEvents";
import { getCategorieAPi, getTypeAPi } from "../../api/Categorie&typeaApi";
import {UploadPictureAPi} from "../../api/apiUpload"
import axios from "axios";
var jwtDecode = require("jwt-decode");
const CreateEvents = () => {
  //state
  const [state, setState] = useState({
    toggle: true,
  });
  const [stateData, setStateData] = useState({
    Title: "",
    Type: "",
    Categorie: "",
    location: "",
    date: "",
    time: "",
    Payement: "",
    Description: "",
    Location: "",
    idUser: "",
    ReservedPerson: [],
    Image:""
    
  });
  const [statepicture, setStatepicture] = useState({
    picture:""
  }
    
  );
  //dispatch
  const dispatch = useDispatch();
  //get data from input
  function handlechange(event) {
    const { name, value } = event.target;
    setStateData((prevState) => ({ ...prevState, [name]: value }));
  }
  //get user id
  const userState = useSelector((state) => state.userState);
  const id = userState._id;

  //save user id
  const SaveId = () => {
    setStateData((prevState) => ({ ...prevState, idUser: id }));
  };

  //post new event
  function PostNewEvents() {
   
    dispatch(PostEventsAPi(stateData));
  }
  //upload picture
 

  function handleOnSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", statepicture.picture);
   
    console.log(formData)
    

    axios
      .post("http://localhost:5000/image", formData)
      .then(res => console.log(res))
      .catch(err => console.error(err));
  };
  
  //change input
  const toggleFunction = () => {
    setState((prevState) => ({ ...prevState, toggle: !state.toggle }));
  };

  //get type and categorie
  const CategorieState = useSelector((state) => state.CategorieState);
  const TypeState = useSelector((state) => state.TypeState);

  useEffect(() => {
    dispatch(getCategorieAPi());
    dispatch(getTypeAPi());
  }, [dispatch]);
//get picture
const getPicture=(e)=>{
  let img=e.target.files[0]
  setStatepicture((prevState) => ({ ...prevState, picture:img }));
  setStateData((prevState) => ({ ...prevState, Image:img.name }));
  
}
console.log(statepicture.picture)

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

      {state.toggle ? (
        <MDBCard
          style={{ width: "80rem", marginLeft: "2.5%", marginTop: "-10%" }}
        >
          <MDBCardBody>
            
            <div>
              <p>ADD TITLE</p>
              <MDBInput
                label="Large input"
                size="lg"
                name="Title"
                onChange={handlechange}
              />
              <br />
              <br />
              <p>WHAT IS YOUR EVENT TYPE</p>
              <SelectWithSearch
                options={TypeState}
                handlechange={handlechange}
                name={"Type"}
              />
              <br />
              <br />
              <p>WHAT IS YOUR EVENT CATEGORIE</p>
              <SelectWithSearch
                options={CategorieState}
                handlechange={handlechange}
                name={"Categorie"}
              />
              <br />
              <br />
              <p>IS IT FREE OR NOT</p>
              <MDBFormInline>
                <MDBInput
                  label="yes"
                  type="checkbox"
                  id="checkbox1"
                  containerClass="mr-5"
                  name="Payement"
                  value="free"
                  onChange={handlechange}
                />
                <MDBInput
                  label="no"
                  type="checkbox"
                  id="checkbox2"
                  containerClass="mr-5"
                  name="Payement"
                  value="paying"
                  onChange={handlechange}
                />
              </MDBFormInline>
              <br />
              <br />
              <p>Describe your event</p>
              <MDBInput
                type="textarea"
                label="Material textarea"
                rows="5"
                name="Description"
                onChange={handlechange}
              />
              <br />
              <br />
              <input
                type="date"
                id="birthday"
                name="date"
                onChange={handlechange}
              />
              <input
                type="time"
                id="appt"
                name="time"
                onChange={handlechange}
              />
              <MDBBtn
                color="primary"
                rounded
                onClick={() => {
                  toggleFunction();
                  SaveId();
                }}
              >
                NEXT
              </MDBBtn>
            </div>
          </MDBCardBody>
        </MDBCard>
      ) : (
        <div>
          
          <form   >
  <input type="file" name="file"  onChange={getPicture} />
  <button type="submit" class="btn" onClick={handleOnSubmit}>Submit</button>

</form>
            
          
          <div style={{ width: "100vw", height: "100vh" }}>
            <MapWrapped
              googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${"AIzaSyBLVScCQd-jFxdXw36rq61F8y2a-CuMK8w"}`}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
          <MDBBtn
            color="primary"
            rounded
            onClick={() => {
              PostNewEvents();
            }}
          >
            Submit
          </MDBBtn>
        </div>
       
      )}
    </div>
  );
};

export default CreateEvents;
