import { addTodo, deleteTodo } from '../actions'

const initialState = {todos: [], newId: 0}

const todoListReducer = (state = initialState, action) => {
    switch(action.type){
        case addTodo:
            return {
                todos: [...state.todos, {
                    value: action.payload,
                    id: state.newId
                }],
                newId: state.newId+1
            }
        case deleteTodo:
            return {
                ...state,
                todos: state.todos.filter((el) => el.id !== action.id),
            }
        default:
            return state
    }
}

export default todoListReducer