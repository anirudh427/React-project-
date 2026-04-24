import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css'

function Checkout() {
const navigate = useNavigate()

const [paymentMethod, setPaymentMethod] = useState('')
const [cardNumber, setCardNumber] = useState('')
const [cardName, setCardName] = useState('')
const [expiry, setExpiry] = useState('')
const [cvv, setCvv] = useState('')

const handlePayment = () => {
    if(!paymentMethod) {
        alert('Please select payment method')
        return
    }

    if(paymentMethod === 'card') {
        if(!cardNumber || !cardName || !expiry || !cvv){
            alert('Please fill all card details')
            return
        } 
    }

    alert('Payment Successfull')
    localStorage.removeItem('cart')
    navigate('/products')
}
    return ( 
        <div className='checkout-container'>
            <h2>Checkout</h2>

            <h3>Select Payment Method</h3>

            <label>
                <input type="radio" value="upi" checked={paymentMethod === 'upi'} onChange={(e) => setPaymentMethod(e.target.value)} />
                UPI Payment
            </label>
            <br /><br />
            <label>
                <input type="radio" value="card" checked={paymentMethod === 'card'} onChange={(e) => setPaymentMethod(e.target.value)} />
                Card Payment
            </label>
            <br /><br />
            <label>
                <input type="radio" value="cod" checked={paymentMethod === 'cod'} onChange={(e) => setPaymentMethod(e.target.value)} />
                Cash on Delivery
            </label>
            <br /><br />
            {paymentMethod === 'card' &&(
                <div>
                    <input type="text" placeholder='Card Number' value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
                    <br /><br />
                    <input type="text" placeholder='Card Holder Name' value={cardName} onChange={(e) => setCardName(e.target.value)} />
                    <br /><br />
                    <input type="text" placeholder='MM/YY' value={expiry} onChange={(e) => setExpiry(e.target.value)} />
                    <br /><br />
                    <input type="text" placeholder='CVV' value={cvv} onChange={(e) => setCvv(e.target.value)} />
                    <br /><br />
                </div>
            )}
            {paymentMethod === 'upi' &&(
                <div>
                    <input type="text" placeholder='Enter UPI ID' />
                    <br /><br />
                </div>        
            )}
            <button onClick={handlePayment}>Complete Payment</button>
        </div>
     );
}

export default Checkout;