import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { getProducts, deleteProduct} from '../../actions/products';


export class Products extends Component {
    static propTypes = {
        products: PropTypes.array.isRequired,
        getProducts: PropTypes.func.isRequired,
        deleteProduct: PropTypes.func.isRequired
    }
    componentDidMount(){
        this.props.getProducts();
    }
    render() {
        return (
            <Fragment>
                <h1>Lista de Productos</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Descripcion</th>
                            <th>Precio (GTQ)</th>
                            <th>Imagen</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.products.map(product =>(
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td><img src={product.image}  width="50" height="50 "/></td>
                                <td>
                                <button
                                    onClick={this.props.deleteProduct.bind(this, product.id)}
                                    className="btn btn-danger btn-sm">
                                 {" "}
                                 Borrar
                                 </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products.products
});

export default connect(mapStateToProps, {getProducts,deleteProduct})(Products);
