import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { addProduct } from '../../actions/products';


export class Form extends Component {
    state = {
        name: '',
        description: '',
        price: 0,
        image: ''
    }

    static propTypes = {
        addProduct: PropTypes.func.isRequired
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    
    onSubmit = (e) => {
        e.preventDefault();
        const {name, description, price, image} = this.state;
        const product = {name, description, price, image};
        this.props.addProduct(product)
        console.log("submit");
      };

    render() {
        const { name, description, price, image } = this.state;
        return (
           <div className="card card-body mt-4 mb-4">
                <h2>Agregar Producto</h2>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Nombre</label>
                        <input
                        className="form-control"
                        type="text"
                        name="name"
                        onChange={this.onChange}
                        value={name}
                        />
                </div>
          <div className="form-group">
            <label>Descripcion</label>
            <input
              className="form-control"
              type="text"
              name="description"
              onChange={this.onChange}
              value={description}
            />
          </div>
          <div className="form-group">
            <label>Precio</label>
            <textarea
              className="form-control"
              type="number"
              name="price"
              onChange={this.onChange}
              value={price}
            />
          </div>
          <div className="form-group">
            <label>Imagen</label>
            <textarea
              className="form-control"
              type="text"
              name="image"
              onChange={this.onChange}
              value={image}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Agregar
            </button>
          </div>
        </form>
      </div>
        );
    };
}

export default connect(null, { addProduct })(Form);
