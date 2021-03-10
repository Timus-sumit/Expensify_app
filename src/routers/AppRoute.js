import React from 'react';
import {BrowserRouter,Route,Switch,Link, NavLink} from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import CreatePage from '../components/CreatePage';
import EditPage from '../components/EditPage';
import HelpPage from '../components/HelpPage';
import NotFound from '../components/NotFound';
import Header from '../components/Header';




const AppRoute=()=>{
    return(
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
            <Route path="/" component={Dashboard} exact={true}/>
            <Route path ="/create" component={CreatePage} />
            <Route path="/edit/:id" component={EditPage}/>
            <Route path="/help" component={HelpPage}/>
            <Route component={NotFound} />
            </Switch>
        </div>
       
    </BrowserRouter>
    );
}

export default AppRoute;