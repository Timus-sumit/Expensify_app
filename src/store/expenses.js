import {createStore,combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import expenseReducer from '../reducers/expenseReducer';
import filterReducer from '../reducers/filterReducer';
import authReducer from '../reducers/authReducer';


export default ()=>{
    const store = createStore(
        combineReducers({
            expense: expenseReducer,
            filter:filterReducer,
            auth:authReducer
        }),
        applyMiddleware(thunk)
    )

    return store;
}