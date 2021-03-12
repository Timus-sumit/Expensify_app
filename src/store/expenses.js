import {createStore,combineReducers, applyMiddleware} from 'redux';
import expenseReducer from '../reducers/expenseReducer';
import filterReducer from '../reducers/filterReducer';
import thunk from 'redux-thunk';

export default ()=>{
    const store = createStore(
        combineReducers({
            expense: expenseReducer,
            filter:filterReducer
        }),
        applyMiddleware(thunk)
    )

    return store;
}