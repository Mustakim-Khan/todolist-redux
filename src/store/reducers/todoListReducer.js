import { addTodo, deleteTodo, changeIsCompleted } from '../actions'

const initialState = {todos: [], newId: 0}

const todoListReducer = (state = initialState, action) => {
    switch(action.type){
        case addTodo:
            return {
                todos: [...state.todos, {
                    value: action.payload,
                    id: state.newId,
                    isCompleted: false
                }],
                newId: state.newId+1
            }
        case deleteTodo:
            return {
                ...state,
                todos: state.todos.filter((el) => el.id !== action.id),
            }
        case changeIsCompleted:
            const todos = state.todos.map((item) => {
                if(item.id === action.id){
                    item.isCompleted = !item.isCompleted
                }
                return item
            })
            return {todos, newId: state.newId}
        default:
            return state
    }
}

export default todoListReducer