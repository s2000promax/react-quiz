import React from 'react'
import {connect} from 'react-redux'
import { add2, async_add } from './redux/actions/actions'

class Counter extends React.Component {

    render() {
        return (
            <div style={{color:'blue', padding:20, border: '1px solid #ccc'}}>
                <h1>Counter {this.props.counter}</h1>
                <hr />
                <div>
                    <button onClick={()=>this.props.onchange(1)}>Add</button>
                    <button onClick={()=>this.props.onchange(-1)}>Sub</button>
                </div>

                <div>
          <button onClick={()=>this.props.onAsyncAdd(100)}>Async Plus</button>
        </div>
            </div>
        )
    }
}

function mapStateToProps(state) {

return {
    counter: state.counter2.counter
}
}

function mapDispatchToProps(dispatch) {
    return {
        onchange: (number) => dispatch(add2(number)),
        onAsyncAdd: (number) => dispatch(async_add(number))
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)