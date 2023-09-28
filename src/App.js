import Header from './components/Header'
import Products from './components/Products'
import CreateProduct from './components/CreateProduct'
import {useState} from "react";


const App = () => {



    const [showAddProduct, setShowAddProduct] = useState(false)

    const headers = ['id','description','expiry','category','price','special']

    const categories = [
        {id:1, name:'Diary'},
        {id:2, name:'Cosmetics'},
        {id:3, name:'Gardening'}
    ]

    const [products, setProducts] = useState(
        [
            {id:101, description:'Milk', expiry:true, category:'Dairy', price:1.50, special:false},
            {id:102, description:'Cheese', expiry:true, category:'Dairy', price:2.50, special:false},
            {id:103, description:'Soap', expiry:false, category:'Cosmetics', price:1.50, special:false},
            {id:104, description:'Shampoo', expiry:false, category:'Cosmetics', price:1.50, special:false},
            {id:105, description:'Gloves', expiry:false, category:'Garden Tools', price:1.50, special:true},
            {id:106, description:'Spade', expiry:false, category:'Garden Tools', price:1.50, special:true}
        ]
    )

    const addProduct = (product) => {

        const id = Math.floor(Math.random() * 10000)+1
        console.log(product);

        const newProduct = {id,...product}

        setProducts([...products,newProduct])


    }
    const deleteProduct = (id) =>{
        console.log('Delete Requested',id)

        setProducts(
            products.filter((product)=> product.id !== id)
        )

    }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddProduct(!showAddProduct)} showCreate={showAddProduct} />
        {showAddProduct && <CreateProduct onAdd={addProduct} categories={categories}/>}
      <Products products={products}  headers={headers} onDelete={deleteProduct}/>
    </div>
  );
}

export default App;
