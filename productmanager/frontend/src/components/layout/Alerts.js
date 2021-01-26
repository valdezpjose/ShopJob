import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'


export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    }

    componentDidUpdate(prevProps){
        const { error, alert, message } = this.props;
        if(error !== prevProps.error){
            if (error.msg.name) alert.error("Nombre Incorrecto");
            if (error.msg.nit) alert.error("Nit Incorrecto");
            if (error.msg.direction) alert.error("Direccion Incorrecta");
            if (error.msg.price) alert.error("Precio Invalido");
            if (error.msg.image) alert.error("Imagen Invalida");
            if (error.msg.non_field_errors) alert.error(error.msg.non_field_errors.join());
            if (error.msg.username) alert.error("Nombre de usuario ya existente");
        }

        if(message !== prevProps.error){
            if (message.deleteProduct) alert.success(message.deleteProduct);
            if (message.addProduct) alert.success(message.addProduct);
            if (message.passwordNotMatch) alert.error(message.passwordNotMatch);
            message.addProduct = null
        }
    }

    render() {
        return <Fragment /> ;
    }
}

const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts)); 
