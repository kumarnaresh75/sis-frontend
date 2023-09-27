import {useState} from 'react'
import Product from './Product'
const Products = ({products, headers, onDelete}) =>{

    return (
        <>
            <table>
                <thead>
                <tr>
                {headers.map((header) =>
                    <th>{header}</th>
                )}
                </tr>
                </thead>

                <tbody>

            {products.map((product) =>

                <tr style={{ backgroundColor: product.special ? 'yellow' : 'white'}} >
                  <Product key={product.id} product={product} onDelete={onDelete}/>
                </tr>
            )}
                </tbody>
            </table>
        </>
    )


}

export default Products