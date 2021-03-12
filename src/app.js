import React from 'react';
import ReactDOM from 'react-dom';
import AppRoute from './routers/AppRoute';
import {Provider} from 'react-redux';
import configureStore from './store/expenses';
import {startSetExpense} from './actions/expenses';
import {setTextFilter, sortByAmount} from './actions/filters';
import 'normalize-css/normalize.css'
import './styles/styles.scss'
import './firebase/firebase'

const store = configureStore();




const jsx = (
    <Provider store={store}>
        <AppRoute/>
    </Provider>
)

ReactDOM.render(<p>Loading...</p>,document.getElementById('app'));

store.dispatch(startSetExpense()).then(()=>{
    ReactDOM.render(jsx,document.getElementById('app'));
})




