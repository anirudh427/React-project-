import React,{useEffect,useState} from 'react';
import {useNavigate} from 'react-router-dom'

import './Cart.css'

function Cart() {
    const [cart,setCart] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        const data =JSON.parse(localStorage.getItem('cart')) || []
        setCart(data)
    },[])
    const removeitem = (index)=>{
        let cartdata = JSON.parse(localStorage.getItem('cart'))
        cartdata.splice(index,1)
        localStorage.setItem('cart',JSON.stringify(cartdata))
        setCart(cartdata)
    }
    const increasequantity = (index)=>{
        let cartdata = JSON.parse(localStorage.getItem('cart'))
        cartdata[index].quantity +=1
        localStorage.setItem('cart',JSON.stringify(cartdata))
        setCart(cartdata)
    }
    const decreasequantity = (index)=>{
        let cartdata = JSON.parse(localStorage.getItem('cart'))
        if(cartdata[index].quantity >1){
            cartdata[index].quantity -=1
            localStorage.setItem('cart',JSON.stringify(cartdata))
            setCart(cartdata)
        }else{
            removeitem(index)
        }
    }

    const total = cart.reduce(
        (sum,item) => sum+item.price*item.quantity,0
    )
    return ( 
        <div className='cart-container'>
            <h2 className='cart-title'>Cart</h2>
            {cart.length===0?(
                <p className='empty-cart'>Your cart is empty</p>
            ):(
                <div className='cart-grid'>
                    {cart.map((item,index)=>(
                        <div key={index} className='cart-card'>
                            <img src={item.image} alt={item.title} />
                            <h4>{item.title}</h4>
                            <p>{item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                            <div className='cart-buttons'>
                                <button onClick={()=>increasequantity(index)}>Increase</button>
                                <button onClick={()=>decreasequantity(index)}>Decrease</button>
                                <button onClick={()=>removeitem(index)}>Remove</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <h3>Total Amount: ₹{total.toFixed(2)}</h3>
            {cart.length>0 &&(
                <button onClick={()=>navigate("/checkout")}>Proceed to Checkout</button>
            )}
        </div>
     );
}

export default Cart;
