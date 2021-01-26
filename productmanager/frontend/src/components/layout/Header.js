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
        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
            <Link to="/list" className="nav-link">
                Comprar</Link>
         </li>
        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
           <a className="nav-link" href="#">Reportes</a>
        </li>
        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
        <Link to="/" className="nav-link">
        Mis Productos</Link>
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
  });
  
  export default connect(mapStateToProps, { logout })(Header);