import React, { Component } from 'react'
import './HeaderStyle.css';
import Logo from './../../assets/logo.png';
export class Header extends Component {
    render() {
        return (
    <div className="navigation-wrap bg-light start-header start-style">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-expand-md navbar-light">
                    
                        <a className="navbar-brand" href="#" >
                             <img src={Logo} alt=""/>
                        </a>    
                        
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto py-4 py-md-0">
                                <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                    <a className="nav-link" href="#">Compra Ya !</a>
                                </li>
                                <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Iniciar Sesion</a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Ingresar</a>
                                        <a className="dropdown-item" href="#">Registrarse</a>
                                    </div>
                                </li>
                                <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                    <a className="nav-link" href="#">Contactanos</a>
                                </li>
                            </ul>
                        </div> 
                    </nav>      
                </div>
            </div>
        </div>
    </div>
        );
    };
}

export default Header
