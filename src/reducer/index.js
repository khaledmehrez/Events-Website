import { combineReducers } from "redux";

const initialstate = []


function eventReducer(state = initialstate, action) {

    if (action.type === "event") {
        return action.payload
    }
    return state
}

export default combineReducers({
    eventState: eventReducer,
   

});