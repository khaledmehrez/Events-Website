//store user data


export  function storeUserAction(payload) {

    return {
        type: "userData",
        payload
    }
}
//get all user action
export  function getUsersAction(payload) {

    return {
        type: "getUsers",
        payload
    }
}