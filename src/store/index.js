import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

let stateDeful = []

let reducers = (state = stateDeful, action) => {
    switch (action.type){
        case "add_data":
            return [...state, ...action.data]
        default:
            return state
    }
}

const store = createStore(reducers, applyMiddleware(thunk))
export default store