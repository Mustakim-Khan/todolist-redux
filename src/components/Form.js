import React from 'react';
import { connect } from 'react-redux';
import { addTodo, inputAction, statusChange } from '../store/actions';

const Form = ({ sendData, addTodo, inputText, changeStatus }) => {

    const formSubmit = (e) => {
        e.preventDefault()
        addTodo(inputText)
        sendData('')
    }

    const inputOnChange = (e) => {
        sendData(e.target.value)
    }

    const statusHandler = (e) => {
        changeStatus(e.target.value)
    }

    return(
        <div>
            <form onSubmit={formSubmit}>
                <div>
                    <input type="text" onChange={inputOnChange} value={inputText}/>
                    <button type="submit">+</button>
                </div>
                <select name="selectStatus"onChange={statusHandler}>
                    <option value="all">all</option>
                    <option value="completed">completed</option>
                    <option value="uncompleted">uncompleted</option>
                </select>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        inputText: state.inputReducer.value
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        sendData: (text) => dispatch({
            type: inputAction,
            payload: text
        }),
        addTodo: (todo) => dispatch({
            type: addTodo,
            payload: todo
        }),
        changeStatus: (status) => dispatch({
            type: statusChange,
            status: status
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)