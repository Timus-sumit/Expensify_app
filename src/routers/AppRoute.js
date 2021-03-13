import React from 'react';
import {Router,Route,Switch,Link, NavLink} from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import CreatePage from '../components/CreatePage';
import EditPage from '../components/EditPage';
import HelpPage from '../components/HelpPage';
import NotFound from '../components/NotFound';
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRoute=()=>{
    return(
    <Router history={history}>
        <div>
            
            <Switch>
            <Route path="/" component={LoginPage} exact={true}/>
            <PrivateRoute path="/dashboard" component={Dashboard}/>
            <PrivateRoute path ="/create" component={CreatePage} />
            <PrivateRoute path="/edit/:id" component={EditPage}/>
            <Route path="/help" component={HelpPage}/>
            <Route component={NotFound} />
            </Switch>
        </div>
       
    </Router>
    );
}

export default AppRoute;