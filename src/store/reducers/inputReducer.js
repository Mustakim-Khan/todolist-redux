import { inputAction } from '../actions'

const initialState = {value: ''}

const inputReducer = (state = initialState, action) => {
    switch(action.type){
        case inputAction:
            return {
                value: action.payload
            }
        default:
            return state
    }
}

export default inputReducer