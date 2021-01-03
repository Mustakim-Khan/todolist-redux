import { statusChange } from "../actions"

const initialState = { value: 'all'}

const statusReducer = (state = initialState, action) => {
    switch(action.type){
        case statusChange:
            return {
                ...state,
                value: action.status
            }
        default:
            return state
    }
}

export default statusReducer