import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';


import './HeaderStyle.css';
import Logo from './../../assets/logo.png';
export class Header extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
      };
    
    render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
        <ul className="navbar-nav ml-auto py-4 py-md-0">
        <span className="navbar-text mr-3">
          <strong>{user ? `Bienvenido ${user.username}` : ''}</strong>
        </span>

        {!this.props.cart.items ? <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
        <Link to="/list" className="nav-link">
                 <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                 <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                 </svg>
            </Link>
         </li> : <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
         <Link to="/checkout" className="nav-link">
                 <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                 <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                 </svg>
            </Link>
         </li>}

        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                <Link to="/report" className="nav-link">
                     Reportes</Link>
        </li>
        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
        <Link to="/" className="nav-link">
        Mis Productos</Link>
        </li>
        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
        <Link to="/list" className="nav-link">
        Comprar</Link>
        </li>
        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
           <button onClick={this.props.logout} className="btn btn-danger">
           Cerrar Sesion
           </button>
        </li>
     </ul>          
      );

    const guestLinks = (
        <ul className="navbar-nav ml-auto py-4 py-md-0">
        <li>
             
            
        </li>
        {!this.props.cart.items ? <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
        <Link to="/list" className="nav-link">
                 <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                 <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                 </svg>
            </Link>
         </li> : <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
         <Link to="/checkout" className="nav-link">
                 <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                 <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                 </svg>
            </Link>
         </li>}
        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
           <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Iniciar Sesion</a>
           <div className="dropdown-menu">
              <Link to="/register" className="dropdown-item">
              Registrarse</Link>
              <Link to="/login" className="dropdown-item">
              Ingresar</Link>
           </div>
        </li>
     </ul>
      );
    
    return (
    <div className="navigation-wrap bg-light start-header start-style">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-expand-md navbar-light">
                    
                        <Link to="/" className="navbar-brand">
                            <img src={Logo} alt=""/>
                        </Link>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                             {isAuthenticated ? authLinks : guestLinks}
                        </div> 
                    </nav>      
                </div>
            </div>
        </div>
    </div>
        );
    };
}

const mapStateToProps = (state) => ({
    auth: state.auth,
	cart: state.cart
  });
  
  export default connect(mapStateToProps, { logout })(Header);