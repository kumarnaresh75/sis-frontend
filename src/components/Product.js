import Button from "./Button";


const Product = ({product,onDelete}) => {

    const onClick=(e)=>{
        console.log('clicked...in Product',e)
    }

    return (
<>

            <td><h3>{product.id}</h3></td>
            <td><h3>{product.description}</h3></td>
            <td><h3>{product.expiry ? 'Y' : 'N'}</h3></td>
            <td><h3>{product.category}</h3></td>
            <td><h3>{product.price}</h3></td>
            <td><h3>{product.special ? 'Y' : 'N'}</h3></td>
            <td><Button onClick={() => onDelete(product.id)} text='Delete Product'/></td>
</>
    )
}

export default Product