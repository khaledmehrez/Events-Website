import React, { Component, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//mdb
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBIcon,
  MDBView,
  MDBModal,
  MDBModalBody,
  MDBBtn,
  MDBInput,
  MDBFormInline,
} from "mdbreact";

//api
import {
  patchEventsToApi,
  getEventsAPi,
  addReservationApi,
  deleteEventsApi,
} from "../../api/apiEvents";
import { getUsersApi } from "../../api/apiUsers";

import "../../assests/css/MoreInformation.css";
//components
import SelectWithSearch from "../../components/SelectWithSearch";
import Loader from "../../components/Loader";
import * as Constant from "./Constant";
import SignIn from "./Sign-In";
import ModalPage from "../../components/Modal";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import PopupModal from "../../components/PopupModal";

const MoreInformation = (props) => {
  //dispatch
  const dispatch = useDispatch();
  //get user id
  const userState = useSelector((state) => state.userState);
  const id = userState._id;
  //get event id
  const idEvent = props.location.pathname.replace("/MoreInformation/", "");
  //get user role
  const userRole = userState.role;

  // get event data
  const eventState = useSelector((state) => state.eventState);

  var dataEvent = eventState.filter((el) => el._id === idEvent)[0];

  useEffect(() => {
    dispatch(getEventsAPi());
    window.scrollTo(0, 0);
  }, []);

  // get all users
  const getusersState = useSelector((state) => state.getusersState);
  useEffect(() => {
    dispatch(getUsersApi());
  }, []);

  //const data = props.location.state.DataSmallCard;
  /*********************edit*****************/
  const [stateData, setStateData] = useState({});
  //state toggle edit
  const [toggleEditState, SetToggleEdit] = useState({
    toggleEdit: false,
  });
  //toggle edit input
  const toggleEditInput = () => {
    SetToggleEdit((prevState) => ({ ...prevState, toggleEdit: true }));
    setStateData((prevState) => ({ ...prevState, Title: dataEvent.title }));
    setStateData((prevState) => ({ ...prevState, Type: dataEvent.type }));
    setStateData((prevState) => ({
      ...prevState,
      Categorie: dataEvent.categorie,
    }));
    setStateData((prevState) => ({ ...prevState, date: dataEvent.date }));
    setStateData((prevState) => ({ ...prevState, time: dataEvent.time }));
    setStateData((prevState) => ({
      ...prevState,
      Payement: dataEvent.payement,
    }));
    setStateData((prevState) => ({
      ...prevState,
      Description: dataEvent.description,
    }));
    setStateData((prevState) => ({
      ...prevState,
      Location: dataEvent.location,
    }));
    setStateData((prevState) => ({ ...prevState, idUser: dataEvent.iduser }));
    setStateData((prevState) => ({
      ...prevState,
      ReservedPerson: dataEvent.ReservedPerson,
    }));
  };
  //cancel edit
  const cancel = () => {
    SetToggleEdit((prevState) => ({ ...prevState, toggleEdit: false }));
  };
  // collect data to edit

  function handlechange(event) {
    const { name, value } = event.target;
    setStateData((prevState) => ({ ...prevState, [name]: value }));
  }
  //save edit
  const save = () => {
    dispatch(patchEventsToApi(stateData, dataEvent._id));
    SetToggleEdit((prevState) => ({ ...prevState, toggleEdit: false }));
    window.location.reload()
  };
  //Reserve

  const reserve = () => {
    const ReservedPerson = dataEvent.ReservedPerson;
    ReservedPerson.push(id);

    dispatch(addReservationApi(ReservedPerson, dataEvent._id));
    window.location.reload()
  };
  let tab = [];
  //SHOW RESERVED PERSON
  const ShowReservedPerson = () => {
    if (tab.length === 0) {
      for (let i = 0; i < dataEvent.ReservedPerson.length; i++) {
        tab.push(
          getusersState.filter((el) => el._id === dataEvent.ReservedPerson[i])
        );
      }
    }
    
  };
  //cancel reservation
  if (dataEvent !== undefined) {
    const didHeReserved = dataEvent.ReservedPerson.filter((el) => el === id);
  }
  //Cancel reservation from the participant
const CancelReservation=()=>{
    const DeleteReservation =dataEvent.ReservedPerson.filter(el=>el!==id)
    dispatch(addReservationApi(DeleteReservation, dataEvent._id));
    window.location.reload()
}
//Cancel Reservation from the organizer
const CancelReservationOrganizer=(idReservation)=>{
  const DeleteReservationOrganizer =dataEvent.ReservedPerson.filter(el=>el!==idReservation)
  dispatch(addReservationApi(DeleteReservationOrganizer, dataEvent._id));
  window.location.reload()
}
  //delete event

  function deleteEvents() {
    dispatch(deleteEventsApi(dataEvent._id));
    window.location.assign("http://localhost:3000/MyEvents");
  }
  let didHeReserved;
  if (dataEvent !== undefined) {
    didHeReserved = dataEvent.ReservedPerson.filter((el) => el === id);
  }

  return (
    <div>
      
      <MDBCard
        className="my-5 px-5 mx-auto"
        style={{ fontWeight: 300, maxWidth: "90%" }}
      >
        <MDBCardBody style={{ paddingTop: 0 }}>
          <MDBRow>
            <MDBCol
              md="12"
              lg="8"
              style={{ marginTop: "5%", marginLeft: "15%" }}
            >
              <MDBView hover rounded className="z-depth-1-half mb-4">
                {dataEvent !== undefined ? (
                  <img
                    className="img-fluid"
                    src={`http://localhost:5000/${dataEvent.image}`}
                    alt=""
                  />
                ) : (
                  <Loader />
                )}
                <a>
                  <MDBMask overlay="white-slight" className="waves-light" />
                </a>
              </MDBView>
              <div className="d-flex justify-content-between">
                <a className="deep-orange-text">
                  {toggleEditState.toggleEdit === false ? (
                    dataEvent !== undefined ? (
                      <h6 className="font-weight-bold">
                        <MDBIcon icon="tag" className="pr-2" />
                        {dataEvent.type}
                      </h6>
                    ) : (
                      <Loader />
                    )
                  ) : (
                    <SelectWithSearch
                      options={Constant.optionstype}
                      name={"Type"}
                      handlechange={handlechange}
                      TitleSelect={stateData.Type}
                    />
                  )}
                </a>
                {toggleEditState.toggleEdit === false ? (
                  dataEvent !== undefined ? (
                    <h6 className="font-weight-bold deep-orange-text">
                      <MDBIcon icon="tag" className="pr-2" />
                      {dataEvent.categorie}
                    </h6>
                  ) : (
                    <Loader />
                  )
                ) : (
                  <SelectWithSearch
                    options={Constant.optionscategorie}
                    name={"Categorie"}
                    handlechange={handlechange}
                    TitleSelect={stateData.Categorie}
                   
                  />
                )}
              </div>
              {toggleEditState.toggleEdit === false ? (
                dataEvent !== undefined ? (
                  <h3 className="font-weight-bold dark-grey-text mb-3 p-0">
                    <a>{dataEvent.title}</a>
                  </h3>
                ) : (
                  <Loader />
                )
              ) : (
                <MDBInput
                  label="Edit Title"
                  name="Title"
                  onChange={handlechange}
                  value={stateData.Title}
                />
              )}
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol md="12" lg="6">
              <div
                className="mb-4"
                style={{
                  marginTop: "8rem",
                }}
              >
                <h1>About The Event</h1>
                {toggleEditState.toggleEdit === false ? (
                  dataEvent !== undefined ? (
                    <p className=" text-justify dark-grey-text  mb-lg-0 mb-md-5 mb-4">
                      {dataEvent.description}
                    </p>
                  ) : (
                    <Loader />
                  )
                ) : (
                  <textarea
                  className="form-control"
                    label="Edit Description"
                    name="Description"
                    onChange={handlechange}
                    value={stateData.Description}
                  />
                )}
              </div>
            </MDBCol>

            <MDBCol md="12" lg="6">
              <div
                style={{
                  borderBottom: "1px solid #e0e0e0",
                  marginBottom: "8rem",
                }}
              ></div>

              <div
                style={{
                  borderBottom: "1px solid #e0e0e0",
                  marginBottom: "1.5rem",
                }}
              >
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="https://wi-images.condecdn.net/image/8baD2J5bBDn/crop/2040/f/wired-timezones-hero.jpg"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask
                          overlay="white-slight"
                          className="waves-light"
                        />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    {toggleEditState.toggleEdit === false ? (
                      dataEvent !== undefined ? (
                        <p className="font-weight-bold dark-grey-text">
                          {dataEvent.time}
                        </p>
                      ) : (
                        <Loader />
                      )
                    ) : (
                      <input
                        type="time"
                        id="appt"
                        name="time"
                        onChange={handlechange}
                        value={stateData.time}
                      />
                    )}
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                          Itaque earum rerum hic tenetur a sapiente delectus
                        </a>
                      </MDBCol>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>

              <div
                style={{
                  borderBottom: "1px solid #e0e0e0",
                  marginBottom: "1.5rem",
                }}
              >
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="https://image.freepik.com/free-vector/hand-with-pen-mark-calendar_1325-126.jpg"
                        alt=""
                      />

                      <MDBMask overlay="white-slight" className="waves-light" />
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    {toggleEditState.toggleEdit === false ? (
                      dataEvent !== undefined ? (
                        <p className="font-weight-bold dark-grey-text">
                          {dataEvent.date}
                        </p>
                      ) : (
                        <Loader />
                      )
                    ) : (
                      <input
                        type="date"
                        id="appt"
                        name="date"
                        onChange={handlechange}
                        value={stateData.date}
                      />
                    )}
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                          Soluta nobis est eligendi optio cumque nihil impedit
                          quo minus
                        </a>
                      </MDBCol>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>

              <div className="mb-4">
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="https://image.freepik.com/free-photo/financial-concept-with-icon-wooden-cubes-calculator-turquoise-table-flat-lay_176474-9441.jpg"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask
                          overlay="white-slight"
                          className="waves-light"
                        />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    {toggleEditState.toggleEdit === false ? (
                      dataEvent !== undefined ? (
                        <p className="font-weight-bold dark-grey-text">
                          {dataEvent.payement}
                        </p>
                      ) : (
                        <Loader />
                      )
                    ) : (
                      <SelectWithSearch
                        options={Constant.optionsPayement}
                        name={"Payement"}
                        handlechange={handlechange}
                        TitleSelect={stateData.Payement}
                      />
                    )}
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a className="dark-grey-text">
                          Duis aute irure dolor in reprehenderit in voluptate
                        </a>
                      </MDBCol>
                    </div>
                    {dataEvent !== undefined && dataEvent.iduser === id ? (
                      <div className="modalReserved">
                        <ModalPage
                          modalMethod={ShowReservedPerson}
                          modalMethod2={CancelReservationOrganizer}
                          fullHeightPosition={"right"}
                          DataModal={tab}
                          modalBtnTitle={"Show who reserved "}

                        />
                      </div>
                    ) : null}
                  </MDBCol>
                </MDBRow>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
      <MDBBtn>CLOSE</MDBBtn>
      <MDBModal
        isOpen={true}
        backdrop={false}
        size="fluid"
        frame
        position="bottom"
      >
        <MDBModalBody className="text-center">
          {dataEvent !== undefined &&
          dataEvent.iduser !== id &&
          didHeReserved.length === 0 &&
          (userRole === "professionel" || userRole === "particular") ? (
            <PopupModal
              MethodePopup1={reserve}
              PopUpTitle={"Reserve"}
              PopUpBody={"Are you sure"}
            ></PopupModal>
          ) : null}
          {dataEvent !== undefined &&
          dataEvent.iduser !== id &&
          didHeReserved.length > 0 &&
          (userRole === "professionel" || userRole === "particular") ? (
            <PopupModal
            MethodePopup1={CancelReservation}
              PopUpTitle={"Cancel"}
              PopUpBody={"Are you sure"}
            ></PopupModal>
          ) : null}

          {dataEvent !== undefined &&
          dataEvent.iduser !== id &&
          userRole === undefined ? (
            <MDBFormInline>
              <div style={{ marginLeft: "40%" }}>
                <SignIn />
              </div>

              <Link to="/SignUp">
                {" "}
                <MDBBtn color="light-blue lighten-1">Sign-up</MDBBtn>
              </Link>
            </MDBFormInline>
          ) : null}
          {dataEvent !== undefined &&
          dataEvent.iduser === id &&
          toggleEditState.toggleEdit === false ? (
            <MDBBtn color="green lighten-4" onClick={toggleEditInput}>
              edit
            </MDBBtn>
          ) : null}
          {dataEvent !== undefined &&
          dataEvent.iduser === id &&
          toggleEditState.toggleEdit === false || userRole==="admin" ? (
            <MDBBtn color="red accent-1" onClick={deleteEvents}>
              X
            </MDBBtn>
          ) : null}
          {dataEvent !== undefined &&
          dataEvent.iduser === id &&
          toggleEditState.toggleEdit === true ? (
            <MDBBtn color="green lighten-4" onClick={save}>
              save
            </MDBBtn>
          ) : null}
          {dataEvent !== undefined &&
          dataEvent.iduser === id &&
          toggleEditState.toggleEdit === true ? (
            <MDBBtn color="green lighten-4" onClick={cancel}>
              cancel
            </MDBBtn>
          ) : null}
        </MDBModalBody>
      </MDBModal>
    </div>
  );
};

export default MoreInformation;
