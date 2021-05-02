import { applyMiddleware,combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

import auth from './reducers/auth'

const reducers = combineReducers({
    auth
})

const store = createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))

export default store;