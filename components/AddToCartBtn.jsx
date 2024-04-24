'use client'
import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { useToast } from './ui/use-toast';

const AddToCartBtn = ({ 
  btnStyles, 
  text, 
  icon,
  id, 
  name,
  currency,
  description,
  images,
  price,
  price_id
}) => {

  const {addItem} = useShoppingCart();
  const { toast } = useToast();

  const bike = {
    id: id,
    currency: currency,
    name: name,
    description: description,
    images: images,
    price: price,
    price_id: price_id
  };

  return (
    <button 
      className={`${btnStyles}`} 
      onClick={() => {
        addItem(bike);
        toast({
          title: `${name} has been added to the cart`
        })
      }}
    >
        <div>{text}</div>
        <div>{icon}</div>
    </button>
  )
}

export default AddToCartBtn
