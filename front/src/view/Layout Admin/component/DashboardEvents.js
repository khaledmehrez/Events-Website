import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  MDBRow, MDBCol, MDBContainer, MDBBtn} from
'mdbreact';

import TablePage from "../../../components/Tables";


//api
import {getEventsAPi} from "../../../api/apiEvents"
import { Link } from "react-router-dom";
import OrganizerUser from "./OrganizerUser";



const DashboardEvents =()=> {
  // GET Events
  const eventState = useSelector((state) => state.eventState);
 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEventsAPi());
  }, [dispatch]);
  
//row Event

  const ArrayEvents=[]
  eventState.map((el) =>
   ArrayEvents.push({
        title: el.title,
        date: el.date,
        btn: (
          <Link
            to={{
                pathname: `/MoreInformation/${el._id}`
            }}
          >
            <MDBBtn>view User</MDBBtn>
          </Link>
        ),
        btndlete:<MDBBtn>X</MDBBtn>
      })
    )

    //colomns
    const columns= [
      {
        label: 'Title',
        field: 'title',
        sort: 'asc'
      },
      {
        label: 'Date',
        field: 'date',
        sort: 'asc'
      },
      {
        label: 'View User',
        field: 'btn',
        sort: 'asc'
      }
    ]
    return (
     <MDBContainer>
       <strong>Show All Events</strong>
      <TablePage dataForTable={ArrayEvents} columns={columns} />
      <hr/>
     
      </MDBContainer>
    );
  }


export default DashboardEvents
