import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  MDBRow, MDBCol, MDBContainer, MDBBtn} from
'mdbreact';

import TablePage from "../../../components/Tables";


//api
import {getUsersApi, deleteUsersApi} from "../../../api/apiUsers"
import { Link } from "react-router-dom";



const OrganizerUser =()=> {
  // GET USERS
  const getusersState = useSelector((state) => state.getusersState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersApi());
  }, []);
  // get Organier user
  const OrganizeUser=getusersState.filter(el=>el.role==="professionel")
//delete user
const deleteUsers=(id)=>{
dispatch(deleteUsersApi(id))
window.location.reload()
}

//row user

  const ArrayUsers=[]
  OrganizeUser.map((el) =>
    ArrayUsers.push({
        socialraison: el.socialraison
        ,
        mail: el.mail,
        role:el.role,
        type:el.type,
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
        label: 'SocialRaison',
        field: 'socialraison',
        sort: 'asc'
      },
     
      {
        label: 'mail',
        field: 'mail',
        sort: 'asc'
      },
      {
        label: 'Role',
        field: 'role',
        sort: 'asc'
      },
      {
        label: 'Type',
        field: 'type',
        sort: 'asc'
      },
      {
        label: 'View users',
        field: 'btn',
        sort: 'asc'
      },
      {
        label: 'Delete User',
        field: 'btnDelete',
        sort: 'asc'
      }
    ]
    return (
     <MDBContainer>
       <strong>Show Organizer user</strong>
      <TablePage dataForTable={ArrayUsers} columns={columns} />
      <hr/>
      
      </MDBContainer>
    );
  }


export default OrganizerUser
