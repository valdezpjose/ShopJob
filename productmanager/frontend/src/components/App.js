import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/Header'
import Dashboard from './products/Dashboard'


import './default.css';

class App extends Component {
    render(){
        return (
            <Fragment>
                <Header />
                <div className ="container inside">
                <Dashboard/>
                </div>  
            </Fragment>
            
        );
    };
}

ReactDOM.render(<App/>, document.getElementById('app'));