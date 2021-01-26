import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { getAllProducts} from '../../actions/products';
import { addToCart} from '../../actions/cart';



import './list.css';

export class ListProducts extends Component {
    static propTypes = {
        products: PropTypes.array.isRequired,
		getAllProducts: PropTypes.func.isRequired,
		addToCart: PropTypes.func.isRequired,
		auth: PropTypes.object.isRequired,
		cart: PropTypes.object.isRequired
    }
    componentDidMount(){
        this.props.getAllProducts();
    }
    render() {

		const { isAuthenticated, user } = this.props.auth;
        return (
            <div className="wrapper">
	<div className="desc">
		<h1>Productos</h1>
		<p>Todo lo que buscas al alcanze de un clic.</p>
	</div>

	<div className="content">

		<div className="product-grid product-grid--flexbox">
			<div className="product-grid__wrapper">
            { this.props.products.map(product =>{
                if(isAuthenticated){
                    if(user.id !== product.owner){
                    return (
				<div className="product-grid__product-wrapper" key={product.id}>
					<div className="product-grid__product">
						<div className="product-grid__img-wrapper">			
							<img src={product.image} alt="Img" className="product-grid__img" />
						</div>
						<span className="product-grid__title">{product.name}</span>
						<span className="product-grid__price">Q{product.price}</span>
						<div className="product-grid__extend-wrapper">
							<div className="product-grid__extend">
								<p className="product-grid__description">{product.description}</p>
								<button
                                    onClick={(e) => {			
										if(!this.props.cart.items){
											this.props.addToCart(this.props.cart, product);
										}else{
											this.props.addToCart(this.props.cart.items, product);	
										}
										}}
                                    className="btn btn-danger btn-sm">
                                 {" "}
                                 Agregar al Carrito
                                 </button></div>
						</div>
					</div>
				</div>)
                    }
                }else{
                    return (<div className="product-grid__product-wrapper" key={product.id}>
					
					<div className="product-grid__product">
						<div className="product-grid__img-wrapper">			
							<img src={product.image} alt="Img" className="product-grid__img" />
						</div>
						<span className="product-grid__title">{product.name}</span>
						<span className="product-grid__price">Q{product.price}</span>
						<div className="product-grid__extend-wrapper">
							<div className="product-grid__extend">
								<p className="product-grid__description">{product.description}</p>
								<button
                                    onClick={(e) => {			
										if(!this.props.cart.items){
											this.props.addToCart(this.props.cart, product);
										}else{
											this.props.addToCart(this.props.cart.items, product);	
										}
										}}
                                    className="btn btn-danger btn-sm">
                                 {" "}
                                 Agregar al Carrito
                                 </button>
						    </div>
						</div>
					</div>
				</div>)
                }
            })}
			</div>		
		</div>
	</div>
</div>
        )
    }
}

const mapStateToProps = state => ({
    products: state.products.products,
	auth: state.auth,
	cart: state.cart
});

export default connect(mapStateToProps, {getAllProducts, addToCart})(ListProducts);
