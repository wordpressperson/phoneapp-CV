import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
import { ProductConsumer } from '../context'

export class ProductList extends Component {

    render() {
        return (
            <div>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products" />
                        <div className="row">
                            <ProductConsumer>
                                {(value) => {
                                    return value.products.map((p) => {
                                        return <Product key={p.id} product={p} />
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductList
