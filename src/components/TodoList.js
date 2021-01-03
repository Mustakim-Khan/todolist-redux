import React from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'

const TodoList = ({todos}) => {
    return(
        <div className="todoList">
            {todos.map(todo => (
                <Todo value={todo.value} key={todo.id} id={todo.id} isCompleted={todo.isCompleted} />
            ))}

            {/* <p>{text}</p>
            <p>{test}</p> */}
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        // text: state.inputReducer.value,
        // test: state.testReducer.value,
        todos: state.todoListReducer.todos
    }
}


export default connect(mapStateToProps)(TodoList)