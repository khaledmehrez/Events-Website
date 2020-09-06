import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";




//import css

//impoert APi
import {getUsersApi} from "../../api/apiUsers"
import { MDBInput, MDBFormInline, MDBBtn, MDBIcon } from "mdbreact";
//import componets
import Navbar  from "../../components/Navbar"


const Profile =(props)=> {
  //get all user
    const getusersState = useSelector((state) => state.getusersState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersApi());
    
    
    
  }, []);
//get user id
const idUser = props.location.pathname.replace("/Profile/", "");
// get specifique user data
const [StateUser,setStateUser]=useState({

})
const thisUserData={...getusersState.filter(el=>el._id===idUser)[0]}
const arrayDataUser=Object.entries(thisUserData)


//get use data for edit
const handlechange=(e)=>{
  console.log(e.target.value)
}

    return (
      <div className="profile">
        <Navbar/>
        <img
              src="https://mdbootstrap.com/img/Others/documentation/4.jpg"
              className="img-fluid rounded-circle hoverable"
              alt=""
            />

            
            <MDBBtn  size="lg"  gradient="purple" circle>

       {thisUserData.role}
      </MDBBtn>
     
      <MDBBtn tag="a" size="lg" floating gradient="purple">
      {thisUserData.type}
      </MDBBtn>
      {arrayDataUser.slice(1).map((el,i)=>
    <div>
     <p>{el[0]}</p>
     <p>{el[1]}</p>

    </div>
      
      )}

            <MDBFormInline>
     <p value={thisUserData.firstname} icon="user" />
     <MDBInput value={thisUserData.lastname} icon="user" />
     <MDBInput value={thisUserData.socialraison} icon="user" />
     </MDBFormInline>
     <MDBInput value={thisUserData.mail} icon="user" onChange={handlechange} />
     <MDBInput value={thisUserData.password} icon="user" />
    
    
     </div>

    );
  }


export default Profile;