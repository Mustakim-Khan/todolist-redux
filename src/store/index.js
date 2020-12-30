import { combineReducers, createStore } from "redux";
import inputReducer from "./reducers/inputReducer";
import testReducer from './reducers/test'
import todoListReducer from "./reducers/todoListReducer";
import statusReducer from "./reducers/statusReducer";


const allReducers = combineReducers({
    inputReducer,
    testReducer,
    todoListReducer,
    statusReducer
})

const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store