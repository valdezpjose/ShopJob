import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import {Provider as AlertProvider} from  'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Header from './layout/Header';
import Dashboard from './products/Dashboard';
import Alerts from './layout/Alerts';
import Login from './accounts/Login';
import Register from './accounts/Register';
import PrivateRoute from './common/PrivateRoute';
import HomePage from './home/HomePage';
import ListProducts from './shop/ListProducts';
import Checkout from './shop/Checkout';
import Invoice from './shop/Invoice';


import {Provider} from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';

import './default.css';

//Alert Options
const alertOptions ={
    timeout: 3000,
    position: 'bottom center'
}

class App extends Component {
    
    componentDidMount(){
        store.dispatch(loadUser());
    }
    
    render(){
        
        return (
            <Provider store={store}>
            <AlertProvider template={AlertTemplate}
                {...alertOptions}>
                <Router>
                <Fragment>
                  <Header />
                  <Alerts />
                   <div className ="container inside">
                   <Switch>
                     <PrivateRoute exact path="/" component = {Dashboard} />
                     <Route exact path="/register" component = {Register} />
                     <Route exact path="/login" component = {Login} />
                     <Route exact path="/home" component = {HomePage} />
                     <Route exact path="/list" component = {ListProducts} />
                     <Route exact path="/checkout" component = {Checkout} />
                     <Route exact path="/invoice" component = {Invoice} />
                   </Switch>
                   </div>  
              </Fragment>
              </Router>
              </AlertProvider>
            </Provider>
            
        );
    };
}

ReactDOM.render(<App/>, document.getElementById('app'));