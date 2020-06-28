import UserActionTypes from '../actions/users/user.types'

const INITIAL_STATE = {
    currentUser: null,
    error: null
  };
  
  const userReducer = (state = INITIAL_STATE, action) => {
    console.log("user reducer is being passed")
    switch (action.type) {
    
      case UserActionTypes.LOG_IN_SUCCESS:
        return {
          ...state,
          currentUser: action.payload,
          error: null
        };
      case UserActionTypes.LOG_IN_FAILURE:
        return {
          ...state,
          currentUser: null,
          error: action.payload
        }
      case UserActionTypes.SIGN_OUT_SUCCESS:
        return {
          ...state,
          currentUser: null,
          error: null
        };
      
      case UserActionTypes.SIGN_UP_START:
          console.log("SignUp Start", action.payload)
            return{
              ...state,
              currentUser: action.payload,
              error: null
             
            }

      case UserActionTypes.SIGN_UP_SUCCESS:
        console.log("SignUp Success", action.payload)
          return{
            ...state,
            currentUser: action.payload
           
          }  

      case UserActionTypes.LOG:
      case UserActionTypes.SIGN_OUT_FAILURE:
      case UserActionTypes.SIGN_UP_FAILURE:
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
  };

  export default userReducer;