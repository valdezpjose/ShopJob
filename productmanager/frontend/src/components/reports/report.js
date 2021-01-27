import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { getInvoice } from '../../actions/invoice';
import { getProducts} from '../../actions/products';

export class report extends Component {
    
    static propTypes = {
        invoice: PropTypes.array.isRequired,
        products: PropTypes.array.isRequired,
        getProducts: PropTypes.func.isRequired,
        getInvoice: PropTypes.func.isRequired
    }

    componentDidMount(){
        this.props.getInvoice();
        this.props.getProducts();
    }

    avgProducts(){
        var prices = [];
        this.props.products.map((product) =>{
            prices.push(Number(product.price))
        })
        let sum = prices.reduce((previous, current) => current += previous);
        let avg = sum / prices.length;

        return avg
        
    }

    totalSells(){
        var total = 0;
        this.props.invoice.map((sell) =>{
            total += Number(sell.total);
        })
        return total;
    }

    totalSellsProduct(id){
        var total = 0;
        this.props.invoice.map((sell) =>{
            if(Number(id)==Number(sell.product)){
                total += Number(sell.total);
            }
        })
        return total;
    }

    render() {
        
        return (
            <div>
                
                
                <div>
                    <br/>
                    <br/>
                    <h1>Valor Promedio de Catalogo</h1>
                    <p>El valor promedio de sus precios es: Q{this.avgProducts()}</p>
                    <br/>
                    <br/>
                    <br/>
                </div>

                <div>
                    <h1>Total en Ventas Globales</h1>
                    <p>Se genero un total de: Q{this.totalSells()}</p>
                    <br/>
                    <br/>
                    <br/>
                </div>

                <div>
                    <h1>Total en Ventas por Producto</h1>
                    <br/>
                    <br/>
                    <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Descripcion</th>
                            <th>Precio (GTQ)</th>
                            <th>Imagen</th>
                            <th>Total Generado</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.products.map(product =>(
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>Q{product.price}</td>
                                <td><img src={product.image}  width="50" height="50 "/></td>
                                <td>Q{this.totalSellsProduct(product.id)}</td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    invoice: state.invoice.invoice,
    products: state.products.products
});

export default connect(mapStateToProps, {getInvoice, getProducts})(report);
