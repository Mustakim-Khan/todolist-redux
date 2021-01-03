import React from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'

const TodoList = ({todos, status}) => {
    const filter = () => {
        if(status === 'completed'){
            return todos.filter((item) => {
                return item.isCompleted
            })
        }
        if(status === 'uncompleted'){
            return todos.filter((item) => {
                return !item.isCompleted
            })
        }
        return todos
    }

    return(
        <div className="todoList">
            {filter().map(todo => (
                <Todo value={todo.value} key={todo.id} id={todo.id} isCompleted={todo.isCompleted} />
            ))}

            {/* <p>{text}</p>
            <p>{test}</p> */}
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        status: state.statusReducer.value,
        // text: state.inputReducer.value,
        // test: state.testReducer.value,
        todos: state.todoListReducer.todos
    }
}


export default connect(mapStateToProps)(TodoList)