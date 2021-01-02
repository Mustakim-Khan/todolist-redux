import React from 'react'
import { connect } from 'react-redux';
import '../App.css';
import { changeIsCompleted, deleteTodo } from '../store/actions';

const Todo = ({ value, id, deleteTodo, isCompleted, changeIsCompleted }) => {

    const deleteTodoHandler = () => {
        deleteTodo(id)
    }

    const completedHandler = () => {
        changeIsCompleted(id)
        console.log(isCompleted)
    }

    return(
        <div className="todo">
            <h3>{value}</h3>
            <button onClick={completedHandler} >{` ${isCompleted ? 'uncheck' : 'check'} `}</button>
            <button onClick={deleteTodoHandler} >delete</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        deleteTodo: (id) => dispatch({
            type: deleteTodo,
            id
        }),
        changeIsCompleted: (id) => dispatch({
            type: changeIsCompleted,
            id
        })
    }
}

export default connect(null, mapDispatchToProps)(Todo)