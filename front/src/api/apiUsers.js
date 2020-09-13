import axios from "axios";
import cookie from 'react-cookies'
//import action
import {getUsersAction} from "../action/userAction"
//Add new user
export const postUsersSignUpApi = (data) => {
    // console.log(el)
   
    return () => {
        axios.post('http://localhost:5000/users/postUsers', data).then((res)=>{
          sessionStorage.setItem("token",res.data.token)
          window.location.assign("http://localhost:3000/Home")
        })
    }
}
//login
export const LoginApi = (data) => {
    // console.log(el)
    
    return () => {
        console.log(data)
        axios.post('http://localhost:5000/users/login', data,{withCredentials:true}).then((res)=>{
          if(res.data.token===undefined){
           alert(res.data)}
           else{
               sessionStorage.setItem("token",res.data.token)
               window.location.reload()
             
           }
        })
    }
    }

    //get all users
    
export function getUsersApi() {
    return (dispatch) =>
      axios
        .get("http://localhost:5000/Users/getUsers")
        .then((res) => dispatch(getUsersAction(res.data)));
  }

  //delete Events
export function deleteUsersApi(i) {

    return () => {
      axios.delete(`http://localhost:5000/Users/deleteUsers/${i}`)
      window.location.reload()
    }
  
  }
  
  
  export function patchUsersApi(data,id) {
   
   return () => {
  
      axios.patch(`http://localhost:5000/Users/patchUsers/${id}`,data ).then((res) =>
        console.log(res.data),
  
   
      );
  
    }
  
  }