import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'

const CheckoutBtn = () => {
  const handleCheckout = async () => {
    try {
      const res = await  redirectToCheckout();
      if (res?.error){
        console.log("🚀 ~ handleCheckout ~ res:", res)
      }
    } catch (error) {
      console.log("🚀 ~ handleCheckout ~ error:", error)
    }
  }
  const {redirectToCheckout} = useShoppingCart();
  return (
    <button 
      className='btn btn-primary w-full'
      onClick={handleCheckout}
    >
        Proceed to checkout
    </button>
  )
}

export default CheckoutBtn
