'use strict'
import {useState} from 'react'
import AddProduct from './AddProduct'
import Productlist from './Productlist'

const Product = () =>{


    const [productName, setProductName] = useState("");
   const [items, setItems] = useState([]);

   const newItem = ({ target }) => {
    setProductName(target.value)
}
const submitForm = (event) => {
    // Prevent form submission
     event.preventDefault();
}
const itemAdd = () => { 
    // Save item name  state to array 
    setItems(items => [...items, productName]);
}


return(

    <>
           <AddProduct submitHandler={submitForm} newItem={newItem} itemAdd={itemAdd} />
            <Productlist items={items}/> 
       </>
)


}
export default Product

