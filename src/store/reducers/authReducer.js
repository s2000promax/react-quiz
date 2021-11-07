import { AUTH_LOGOUT, AUTH_SUCCESS, CREATE_QUIZ_QUESTION,
         RESET_QUIZ_CREATION
       } from "../actions/actionTypes"

const initialState={
    token: 0
  }

  export default function authReducer(state = initialState, action) {
    switch(action.type) {

        case AUTH_SUCCESS:
            return {
                ...state,
                token: action.token
            }

        case AUTH_LOGOUT:
            return {
                ...state,
                token: null
            }

    default: 
    return state
}

}