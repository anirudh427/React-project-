import React, {useState,useEffect} from 'react';

import './Products.css'

function Products() {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((res)=>res.json())
        .then((data)=>setProducts(data))
    },[])
    const addToCart = (item) =>{
        let cart = JSON.parse(localStorage.getItem('cart')) || []

        const index = cart.findIndex((i)=>i.id === item.id)
        if(index !==-1){
            cart[index].quantity +=1
        }else{
            cart.push({...item,quantity:1})
        }
        localStorage.setItem('cart',JSON.stringify(cart))
        alert('Product added to cart')
    }
    return ( 
        <div className='products-container'>
            <h2 className='products-title'>Product List</h2>
            <div className='products-grid'>
                {products.map((item)=>(
                    <div key={item.id} className='product-card'>
                        <img src={item.image} alt={item.title} />
                        <h4>{item.title}</h4>
                        <p>₹{item.price.toFixed(2)}</p>
                        <button onClick={() => addToCart(item)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
     );
}

export default Products;
