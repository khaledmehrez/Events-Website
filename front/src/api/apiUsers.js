import axios from "axios";
import cookie from 'react-cookies'
//import action
import {getUsersAction} from "../action/userAction"
//Add new user
export const postUsersSignUpApi = (data) => {
    // console.log(el)
    
    return () => {
        axios.post('http://localhost:5000/users/postUsers', data)
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
               window.location.reload()
           }
        })
    }
    }

    //get all users
    //get all events from api
export function getUsersApi() {
    return (dispatch) =>
      axios
        .get("http://localhost:5000/Users/getUsers")
        .then((res) => dispatch(getUsersAction(res.data)));
  }