import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { addProduct } from '../../actions/products';


export class Form extends Component {
    state = {
        name: '',
        description: '',
        price: 0,
        image: null
    }

    static propTypes = {
        addProduct: PropTypes.func.isRequired
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    
    handleInputChange = (e) => {
      this.setState({
        image: e.target.files[0]
      })
    };

    onSubmit = (e) => {
        e.preventDefault();
        let form_data = new FormData();
        form_data.append('image', this.state.image, this.state.image.name);
        form_data.append('name', this.state.name);
        form_data.append('description', this.state.description);
        form_data.append('price', this.state.price);
        this.props.addProduct(form_data)
        this.setState({
          name: '',
          description: '',
          price: 0,
          image: null
        })
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
            <input
              type="file"
              name="image"
              onChange={this.handleInputChange}
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
