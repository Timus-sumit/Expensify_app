import {createStore,combineReducers} from 'redux';
import expenseReducer from '../reducers/expenseReducer';
import filterReducer from '../reducers/filterReducer';

export default ()=>{
    const store = createStore(
        combineReducers({
            expense: expenseReducer,
            filter:filterReducer
        })
    )

    return store;
}