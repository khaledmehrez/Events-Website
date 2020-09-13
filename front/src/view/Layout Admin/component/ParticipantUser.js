import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  MDBRow, MDBCol, MDBContainer, MDBBtn} from
'mdbreact';

import TablePage from "../../../components/Tables";


//api
import {getUsersApi, deleteUsersApi} from "../../../api/apiUsers"
import { Link } from "react-router-dom";
import OrganizerUser from "./OrganizerUser";



const ParticipantUser =()=> {
  // GET USERS
  const getusersState = useSelector((state) => state.getusersState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersApi());
  }, []);
  // get Participant users
  const ParticipUser=getusersState.filter(el=>el.role==="particular")
//delete users
const deleteUsers=(id)=>{
  console.log(id)
  dispatch(deleteUsersApi(id))
  window.location.reload()
}

//row user

  const ArrayUsers=[]
  ParticipUser.map((el) =>
    ArrayUsers.push({
        firstname: el.firstname,
        mail: el.mail,
        btn: (
          <Link
            to={{
              pathname: `/Profile/${el._id}`,
            }}
          >
            <MDBBtn>view User</MDBBtn>
          </Link>
        ),
        btnDelete:   <MDBBtn onClick={()=>{deleteUsers(el._id)}}>X</MDBBtn>
      })
    )

    //colomns
    const columns= [
      {
        label: 'Name',
        field: 'firstname',
        sort: 'asc'
      },
      {
        label: 'mail',
        field: 'mail',
        sort: 'asc'
      },
      {
        label: 'View users',
        field: 'btn',
        sort: 'asc'
      },
      {
        label: 'Delete Users',
        field: 'btnDelete',
        sort: 'asc'
      },
    ]
    return (
     <MDBContainer>
       <strong>Show Organizer user</strong>
      <TablePage dataForTable={ArrayUsers} columns={columns} />
      <hr/>
     
      </MDBContainer>
    );
  }


export default ParticipantUser
