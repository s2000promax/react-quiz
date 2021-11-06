import React from 'react'
import { connect } from 'react-redux'
//import classes from './App.module.css'
import Counter from './Counter'
import { add, add_numb, sub } from './redux/actions/actions'

class App_redux extends React.Component {

  render() {
    return (
      <div >
        <h1>Counter
          <strong>{this.props.counter}</strong>
        </h1>
        <hr />
        <div>
          <button onClick={this.props.onAdd}>Plus</button>
          <button onClick={this.props.onSub}>Minus</button>
          <button onClick={()=>this.props.onNub(155)}>Plus 15</button>
        </div>
        

        <Counter />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter1.counter
  }
}

function mapDispatchToProps(dispatch){
  return{
    onAdd: () => dispatch(add()),
    onSub: () => dispatch(sub()),
    onNub: (number) => dispatch(add_numb(number))


  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App_redux)