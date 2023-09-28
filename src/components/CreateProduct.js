import {useState} from 'react'

const CreateProduct = ({onAdd,categories}) => {

    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [special, setSpecial] = useState(false)
    const [expiry, setExpiry] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault() // don't submit to page

        if(!description){
            alert('Please enter description')
            return
        }
        if(!category){
            alert('Please enter category')
            return
        }
        if(!price){
            alert('Please enter price')
            return
        }

        onAdd({description,expiry,category,price,special})

        setDescription('')
        setPrice('')
        setSpecial(false)
        setCategory('')

    }

    return(


        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Description</label>
                <input type='text' placeholder='Enter Description'
                       value={description}
                       onChange={(e)=>setDescription(e.target.value)}
                />
            </div>
            <div className='form-control form-control-check'>
                <label>Expiry</label>
                <input type='checkbox'
                       checked={expiry}
                       value={expiry}
                       onChange={(e)=>setExpiry(e.target.checked)}

                />
            </div>
            <div className='form-control'>
                <label>Category</label>
                <select name="category" onChange={(e)=>setCategory(e.target.value)}>
                    {categories.map((category) =>
                            <option value={category.name}>{category.name}</option>
                        )
                    }
                </select>
            </div>
            <div className='form-control'>
                <label>Price</label>
                <input type='text' placeholder='Enter Price'
                       value={price}
                       onChange={(e)=>setPrice(e.target.value)}

                />
            </div>
            <div className='form-control form-control-check'>
                <label>Special</label>
                <input type='checkbox'
                       checked={special}
                       value={special}
                       onChange={(e)=>setSpecial(e.target.checked)}

                />
            </div>
            <div className='form-control '>
                <input type='submit' value='Create Product' className='btn btn-block'/>
            </div>
        </form>

    )
}

export default CreateProduct