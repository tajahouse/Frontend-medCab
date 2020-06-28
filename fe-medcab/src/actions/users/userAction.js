import UserActionTypes from "../users/user.types"

import axiosWithAuth from '../../utils/axiosWithAuth'
import Axios from "axios";



export const logInSuccess = ( username, data ) => (dispatch) => { 
      dispatch({
        type: UserActionTypes.LOG_IN_SUCCESS,
        payload: username   
               })

  axiosWithAuth()
      .post('/login', {
        username: "",
        password: ""
                      })
      .then(res => { 
        console.log(res.data)
        localStorage.setItem('token', res.data.token)
        })
      .catch(err =>{
          console.log(err.response)
        })
        
  };
  
  export const logInFailure = err => ({
    type: UserActionTypes.LOG_IN_FAILURE,
    payload: err.response
  });
  
  export const emailLogInStart = emailAndPassword => ({
    type: UserActionTypes.EMAIL_LOG_IN_START,
    payload: emailAndPassword
  });
  
  export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION
  });
  
  export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START
  });
  
  export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS
  });
  
  export const signOutFailure = error => ({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error
  });
  
  export const signUpStart =( userCredentials ) => (dispatch)=> {
      dispatch({
    type: UserActionTypes.SIGN_UP_START,
    payload: userCredentials
      })    
      axiosWithAuth()
      .post('/register', userCredentials)
      .then(res =>{console.log(res.data)
        localStorage.setItem('token', res.data.token)
      })
      .catch(err =>{console.log(err.response)})

  };
  
  

  export const signUpSuccess = ({ username, additionalData}) => {
    return dispatch => {
      dispatch({
        
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: { username, additionalData }
   
      })
  }
};
  
  export const signUpFailure =( err )=> {
    return dispatch =>{
       dispatch ({
          type: UserActionTypes.SIGN_UP_FAILURE,
    payload: err.response
         })
    }   
  }