import { combineReducers } from "redux";

const initialstate = []

//events
function eventReducer(state = initialstate, action) {

    if (action.type === "event") {
        return action.payload
    }
    return state
}



//users
//store the user data

function userDataReducer(state = initialstate, action) {

    if (action.type === "userData") {
        return action.payload
    }
    return state
}



function UsersReducer(state = initialstate, action) {

    if (action.type === "getUsers") {
        return action.payload
    }
    return state
}



export default combineReducers({
    eventState: eventReducer,
   userState:userDataReducer,
   getusersState:UsersReducer,

});




