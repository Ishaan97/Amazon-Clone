import UserActionTypes from "./user.types"

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})

export const googleSignInStart = () => ({
    type : UserActionTypes.GOOGLE_SIGN_IN_START
})

export const signInSuccess = user => ({
    type : UserActionTypes.SIGN_IN_SUCCESS,
    payload : user
})

export const signInFailure = error => ({
    type : UserActionTypes.SIGN_IN_FAILURE,
    payload : error
})

export const emailSignInStart = emailAndPassword => ({
    type : UserActionTypes.EMAIL_SIGN_IN_START,
    payload : emailAndPassword
})

export const checkUserSession  = () => ({
    type : UserActionTypes.CHECK_USER_SESSION
})

export const signOutStart = () => ({
    type : UserActionTypes.SIGN_OUT_START
})

export const signOutSuccess = () => ({
    type : UserActionTypes.SIGN_OUT_SUCCESS
})

export const signOutFailure = error => ({
    type : UserActionTypes.SIGN_IN_FAILURE,
    payload : error
})

export const toggleUserDropdownHidden = () => ({
    type: UserActionTypes.TOGGLE_USER_DROPDOWN_HIDDEN
})

export const hideUserDropdown = () => ({
    type: UserActionTypes.USER_DROPDOWN_CLICKED_OUTSIDE
})

export const showUserInformation = () => ({
    type: UserActionTypes.SHOW_USER_INFORMATION
})

export const showOrderHistory = () => ({
    type: UserActionTypes.SHOW_ORDER_HISTORY
})

export const signUpStart = (userCredentials) => ({
    type : UserActionTypes.SIGN_UP_START,
    payload : userCredentials
});

export const signUpSuccess = ({user, additionalData}) => ({
    type : UserActionTypes.SIGN_UP_SUCCESS,
    payload : {user, additionalData}
});

export const signUpFailure = (error) => ({
    type : UserActionTypes.SIGN_UP_FAILURE,
    payload : error
})

export const updateAddressStart = ({currentUser, address}) => ({
    type : UserActionTypes.UPDATE_ADDRESS_START,
    payload : {currentUser, address}
})

export const updateAddressSuccess= (currentUser)=>({
    type : UserActionTypes.UPDATE_ADDRESS_SUCCESS,
    payload : currentUser
})

export const updateAddressFailure = (error) => ({
    type : UserActionTypes.UPDATE_ADDRESS_FAILURE,
    payload : error
})

export const getOrderHistory = (currentUser)=>({
    type : UserActionTypes.GET_ORDER_HISTORY,
    payload : currentUser
})