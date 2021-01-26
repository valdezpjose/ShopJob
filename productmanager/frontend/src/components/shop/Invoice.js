import React, { Component } from 'react'
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addInvoice } from '../../actions/invoice';

export class Invoice extends Component {
    state = {
        name: '',
        nit: '',
        direction: ''
    }
    
    static propTypes = {
        addInvoice: PropTypes.func.isRequired
    }

    totalAmmount() {
        var total = 0
        this.props.cart.items.map((product) =>{
            total += product.price*product.count
        });
        return total;
    }

    onSubmit = (e) => {
        e.preventDefault();
        var totalInvoice = 0;
        this.props.cart.items.map((product) =>{
            totalInvoice = product.price*product.count
            const invoice = {
                name: this.state.name,
                nit: this.state.nit,
                direction: this.state.direction,
                price: product.price,
                total: totalInvoice,
                product: product.id,
                seller: product.owner
            };
            
            this.props.addInvoice(invoice)

            
        });

        this.setState({
            name: '',
            nit: '',
            direction: ''
          })
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { name, nit, direction} = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
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
                    <label>Nit</label>
                        <input
                        className="form-control"
                        type="text"
                        name="nit"
                        onChange={this.onChange}
                        value={nit}
                        />
                    </div>

                <div className="form-group">
                    <label>direction</label>
                        <input
                        className="form-control"
                        type="text"
                        name="direction"
                        onChange={this.onChange}
                        value={direction}
                        />
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className='col'>
                                 <h2>Total Q{this.totalAmmount()}</h2>
                            </div>
                            <div className='col'>
                            </div>
                            <div className='col'>
                            </div>
                            <div className='col'>
                                <button type="submit"  className="btn btn-primary">
                                     Confirmar Compra
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.cart
});

export default connect(mapStateToProps, { addInvoice })(Invoice);
