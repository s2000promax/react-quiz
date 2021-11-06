const redux = require('redux')

// 1. Initial Store
// 2. Create Reducer
// 3. Create Store (Reducer)
// 4. Dispatch(action). Required field 'type'
// 5. store.Subscribe() - Subscribe to store change

const initialState = {
    counter: 0
}

// Reducer
const reducer = (state = initialState, action) => {

    if (action.type === 'ADD') { 
        return {
            counter: state.counter + 1
        }
    
    }
    if (action.type === 'SUB') { 
        return {
            counter: state.counter - 1
        }
    }
    if (action.type === 'ADD_NUMBER') { 
        return {
            counter: state.counter + action.value
        }
    }

    return state
}

// Store
const store = redux.createStore(reducer)
console.log('1', store.getState())

//Subscribe
store.subscribe(
    ()=> {
        console.log('Subscribe', store.getState())
    }
)

// Actions
const addCounter = {
    type: 'ADD'
}

store.dispatch(addCounter)
console.log('2', store.getState())

store.dispatch({type: 'SUB'})
console.log('3', store.getState())

store.dispatch({type: 'ADD_NUMBER', value: 10})
console.log('4', store.getState())
