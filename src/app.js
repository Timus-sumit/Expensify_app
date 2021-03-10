import React from 'react';
import ReactDOM from 'react-dom';
import AppRoute from './routers/AppRoute';
import {Provider} from 'react-redux';
import configureStore from './store/expenses';
import {addExpense} from './actions/expenses';
import {setTextFilter, sortByAmount} from './actions/filters';
import 'normalize-css/normalize.css'
import './styles/styles.scss'

const store = configureStore();

store.dispatch(addExpense({description:'water bill', amount : '200'}));
store.dispatch(addExpense({description: 'gas bill', amount:'300'}));
store.dispatch(addExpense({description: 'rent', amount:'10000'}));

// store.dispatch(setTextFilter('bill'))
// store.dispatch(sortByAmount());
// console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <AppRoute/>
    </Provider>
)


ReactDOM.render(jsx,document.getElementById('app'));



