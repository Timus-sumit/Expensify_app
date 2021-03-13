import React from 'react';
import ReactDOM from 'react-dom';
import AppRoute,{history} from './routers/AppRoute';
import {Provider} from 'react-redux';
import configureStore from './store/expenses';
import {startSetExpense} from './actions/expenses';
import {setTextFilter, sortByAmount} from './actions/filters';
import 'normalize-css/normalize.css'
import './styles/styles.scss'
import './firebase/firebase'
import { firebase } from './firebase/firebase';
import {login,logout}from './actions/auth';

const store = configureStore();

let hasRendered = false;
const renderApp = ()=>{
    if(!hasRendered){
        ReactDOM.render(jsx,document.getElementById('app'));
        hasRendered = true;
    }
}


const jsx = (
    <Provider store={store}>
        <AppRoute/>
    </Provider>
)

ReactDOM.render(<p>Loading...</p>,document.getElementById('app'));


console.log('test')
firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpense()).then(()=>{
            renderApp(); 
            if(history.location.pathname==='/'){
                history.push('/dashboard')
            }   
        })
    }else{
        store.dispatch(logout());
        renderApp()
        history.push('/')
    }
})


