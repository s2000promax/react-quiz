import { ADD2 } from "../actions/actionsTypes"

const initialState = {
    counter:200
}

export default function counter2(state=initialState, action) {

switch(action.type){

   
    case ADD2:     
          return {
              counter: state.counter + action.payload
          }
      


    default:
        return state
}

    return state
}