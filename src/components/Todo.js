import React from 'react'
import { connect } from 'react-redux';
import '../App.css';
import { deleteTodo } from '../store/actions';

const Todo = ({ value, id, deleteTodo }) => {

    const deleteTodoHandler = () => {
        deleteTodo(id)
    }

    return(
        <div className="todo">
            <h3>{value}</h3>
            <button>check</button>
            <button onClick={deleteTodoHandler} >delete</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        deleteTodo: (id) => dispatch({
            type: deleteTodo,
            id
        })
    }
}

export default connect(null, mapDispatchToProps)(Todo)