import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MDBBtn, MDBContainer, MDBRow } from "mdbreact";
import Navbar from "../../../components/Navbar";
import { Link } from "react-router-dom";

//import css
import "../../../assests/css/GridSmallCardContainer.css";
import "../../../assests/css/MyEvents.css"
//impoert APi
import { getEventsAPi } from "../../../api/apiEvents";

import Table from "../../../components/Tables";

var jwtDecode = require("jwt-decode");
const MyEvents = () => {
  const eventState = useSelector((state) => state.eventState);
  const userState = useSelector((state) => state.userState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEventsAPi());
  }, [dispatch]);

  const id = userState._id;
  const role = userState.role;
  //userPostedEvents

  const PostedEvents = eventState.filter((el) => el.iduser === id);
  const ArrayPosted = [];
  PostedEvents.map((el) =>
    ArrayPosted.push({
      title: el.title,
      date: el.date,
      btn: (
        <Link
          to={{
            pathname: `/MoreInformation/${el._id}`,
          }}
        >
          <MDBBtn>view event</MDBBtn>
        </Link>
      ),
    })
  );

  //user reserved event
  const ReservedEvent = eventState.filter((el) =>
    el.ReservedPerson.includes(id)
  );
  const ArrayReserved = [];

  ReservedEvent.map((el) =>
    ArrayReserved.push({
      title: el.title,
      date: el.date,
      btn: (
        <Link
          to={{
            pathname: `/MoreInformation/${el._id}`,
          }}
        >
          <MDBBtn>view event</MDBBtn>
        </Link>
      ),
    })
  );
  //colomns
  const columns = [
    {
      label: "Title",
      field: "title",
      sort: "asc",
    },
    {
      label: "Date",
      field: "date",
      sort: "asc",
    },
    {
      label: "View Event",
      field: "btn",
      sort: "asc",
    },
  ];

  return (
    <div className="bodyMyEvents" >
      <div>
        {role === "professionel" ? (
          <MDBContainer>
            <div className="containerMyEventsFirstSectionTitle" >
              <h1> your Posted Event </h1>
              {role === "professionel" ? (
                <Link to="/CreateEvents">
                  <MDBBtn gradient="peach">Create New Event</MDBBtn>
                </Link>
              ) : null}
            </div>
            <div className="TableContainer">
              <Table dataForTable={ArrayPosted} columns={columns} />

              {/* {eventState.filter(el=>el.iduser===id).map(el=><SmallCard idUser={id}  DataSmallCard={el} link="/MoreInformation" />)} */}
            </div>
          </MDBContainer>
        ) : null}
        <hr />
        <MDBContainer>
          <h1> your Reservation </h1>
          <div className="SmallCardContainer">
            <Table dataForTable={ArrayReserved} columns={columns} />
          </div>
        </MDBContainer>
      </div>
    </div>
  );
};

export default MyEvents;
