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




const jsx = (
    <Provider store={store}>
        <AppRoute/>
    </Provider>
)


ReactDOM.render(jsx,document.getElementById('app'));



