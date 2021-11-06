import { ADD, ADD2, ADD_NUMB, SUB } from "./actionsTypes";

export function add() {
    return {
        type: ADD
    }
}

export function sub() {
    return {
        type: SUB
    }
}

export function add_numb(number) {
    return {
        type: ADD_NUMB,
        payload: number
    }
}

export function add2(number) {
    return {
        type: ADD2,
        payload: number

    }
}

export function async_add(number) {
    return (dispatch) => {
          setTimeout( ()=> {
            dispatch(add2(number))
          } ,3000)
        }
    
}

