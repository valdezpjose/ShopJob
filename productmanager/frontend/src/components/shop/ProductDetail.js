import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { getProduct} from '../../actions/products';

export class ProductDetail extends Component {

    static propTypes = {
        products: PropTypes.array.isRequired,
        getProduct: PropTypes.func.isRequired,
        auth: PropTypes.object.isRequired
    }

    componentDidMount(){
        this.props.getProduct(this.props.match.params.id);
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;
        console.log(this.props.products);
        return (
            <div className="container">
                <div className="row">
                <div className="col">
                <img src={this.props.products.image} alt="Img"/>
                </div>
                </div>
                <div className="row">
                    <div className="col-4">
                    <h1>{this.props.products.name}</h1> 
                    <h3>{this.props.products.description}</h3> 
                    <p>Q{this.props.products.price}</p> 
                    <button  className="btn btn-danger">
                    Agrega al carrito
                    </button>
                    </div>             
                </div>
            </div>

        )
    }
}


const mapStateToProps = state => ({
    products: state.products.products,
    auth: state.auth
});

export default connect(mapStateToProps, {getProduct})(ProductDetail);
