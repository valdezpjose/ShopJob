import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { removeFromCart} from '../../actions/cart';

export class Checkout extends Component {
    
    static propTypes = {
        removeFromCart: PropTypes.func.isRequired
    }
    
    total() {
        var total = 0
        this.props.cart.items.map((product) =>{
            total += product.price*product.count
        });
        console.log(total);
        return total;
    }

    render() {
        
        console.log(this.props.cart.items);
        return (
            
            <Fragment>
                <h1>Lista de Productos</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Cantidad</th>
                            <th>Nombre</th>
                            <th>Descripcion</th>
                            <th>Precio (GTQ)</th>
                            <th>Imagen</th>
                            <th>Total</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.cart.items.map(product =>(
                            <tr key={product.id}>
                                <td>{product.count}</td>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>Q{product.price}</td>
                                <td><img src={product.image}  width="50" height="50 "/></td>
                                <td>Q{product.price * product.count}</td>
                                <td>
                                <button
                                    onClick={(e) =>
                                        this.props.removeFromCart(this.props.cart.items, product)
                                    }
                                    className="btn btn-danger btn-sm">
                                 {" "}
                                 Borrar
                                 </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                
                <h2>Su total es: Q{this.total()}</h2>
                <Link to="/invoice" className="btn btn-danger btn-md">
                        Pagar
                </Link>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.cart
});

export default connect(mapStateToProps, {removeFromCart})(Checkout);
