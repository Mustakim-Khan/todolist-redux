const initialState = {value: 'default 1'}

const testReducer = (state = initialState, action) => {
    switch(action.type){
        case 'test':
            return {
                value: action.payload
            }
        default:
            return state
    }
}

export default testReducer