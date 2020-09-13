import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//import css
import "../../assests/css/Profile.css";
//impoert APi
import { getUsersApi,deleteUsersApi,patchUsersApi } from "../../api/apiUsers";
import {
  MDBInput,
  MDBFormInline,
  MDBBtn,
  MDBIcon,
  MDBRow,
  MDBCol,
} from "mdbreact";
//import componets
import Navbar from "../../components/Navbar";

const Profile = (props) => {
  //get all user
  const getusersState = useSelector((state) => state.getusersState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersApi());
  }, []);
  //get user id
  const idUser = props.location.pathname.replace("/Profile/", "");
  // get specifique user data
  const [StateUser, setStateUser] = useState({});
  const thisUserData = {
    ...getusersState.filter((el) => el._id === idUser)[0],
  };
  const arrayDataUser = Object.entries(thisUserData);

  //get use data for edit
  const handlechange = (e) => {

    const {value,name}=e.target
    setStateUser((prevState) => ({ ...prevState, [name]: value }));
  };

  // edit
  const [ToggleState, setToggleState] = useState({
    toggle: false,
  });


const handleclickedit=()=>{
  setToggleState((prevState) => ({ ...prevState, toggle: true }));
 setStateUser(thisUserData);
}

const SaveEdit=()=>{
  dispatch(patchUsersApi(StateUser,idUser))
  console.log(StateUser)
}

  return (
    <div className="profile">
    
      <section className="profileContainer">
      <div className="leftSection block-example border-right border-light  p-3 ">
          <img
            src="https://mdbootstrap.com/img/Others/documentation/4.jpg"
            className="img-fluid rounded-circle hoverable d-block p-2"
            alt=""
            width="80%"
          />
          <div className="leftSectionBtn">
        <MDBBtn  id="typeRole" gradient="purple" circle>
            {thisUserData.role}
          </MDBBtn>

          <MDBBtn id="typeRole" gradient="purple">
            {thisUserData.type}
          </MDBBtn>
          </div>
          
          </div>
        <div className="rightSection">
          {ToggleState.toggle === false ? (
            <div>
              
            
            {thisUserData.role==="professionel"&& thisUserData.type==="company"?
            <MDBFormInline>
              <p>Social-Raison:</p>
            <p>{thisUserData.socialraison}</p>
            </MDBFormInline>:
            <>
            <MDBFormInline>
            <p>FirstName:</p>
            <p>{thisUserData.firstname}</p>
            </MDBFormInline>
            <MDBFormInline>
            <p>LastName:</p>
            <p>{thisUserData.lastname}</p>
            </MDBFormInline>
            </>}
            <MDBFormInline>
            <p>E-mail:   </p>
            <p>{thisUserData.mail}</p>
            </MDBFormInline>
            
            <MDBFormInline>
            <p>Adresse:</p>
            <p>{thisUserData.adress}</p>
            </MDBFormInline>
            </div>
          ) : (
            <div>
              {thisUserData.role==="professionel"&& thisUserData.type==="company"?
               <MDBInput value={StateUser.socialraison} icon="user" onChange={handlechange} />:
              <MDBFormInline>
                <p value={thisUserData.firstname} icon="user" />
                <MDBInput value={StateUser.firstname} icon="user" onChange={handlechange} />
                <MDBInput value={StateUser.lastname} icon="user" onChange={handlechange} />
              </MDBFormInline>}
              <MDBInput
                value={StateUser.mail}
                icon="user"
                name="mail"
                onChange={handlechange}
              />
              <MDBInput value={StateUser.password} icon="user" onChange={handlechange} />

            </div>
          )}
       
     
      
         
       
         { ToggleState.toggle===false?<MDBBtn id="typeRole" color="green" circle onClick={handleclickedit}>
            <MDBIcon far icon="edit" />
          </MDBBtn>:
          <MDBBtn id="typeRole" color="green" circle onClick={SaveEdit}>
           Confirme
          </MDBBtn>}

          <MDBBtn id="typeRole" color="red">
            <MDBIcon far icon="trash-alt" />
          </MDBBtn>
          </div>
          </section>
    </div>
  );
};

export default Profile;
