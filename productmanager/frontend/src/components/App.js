import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/Header'
import Dashboard from './products/Dashboard'

import {Provider} from 'react-redux';
import store from '../store';

import './default.css';

class App extends Component {
    render(){
        
        return (
            <Provider store={store}>
                <Fragment>
                  <Header />
                   <div className ="container inside">
                   <Dashboard/>
                   </div>  
              </Fragment>
            </Provider>
            
        );
    };
}

ReactDOM.render(<App/>, document.getElementById('app'));