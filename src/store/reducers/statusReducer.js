import { statusChange } from "../actions"

const initialState = { value: 'all', filteredTodos: []}

const statusReducer = (state = initialState, action) => {
    switch(action.type){
        case statusChange:
            // if(action.status === 'completed')
            return {
                ...state,
                value: action.status
            }
        default:
            return state
    }
}

export default statusReducer