import { ADD, ADD_NUMB, SUB } from "../actions/actionsTypes"

const initialState = {
    counter:3
}

export default function counter1(state=initialState, action) {

switch(action.type){

    case ADD:     
          return {
              counter: state.counter + 1
          }

    case SUB:     
          return {
              counter: state.counter - 1
          }
    case ADD_NUMB:     
          return {
              counter: state.counter + action.payload
          }
    default:
        return state
}

    return state
}