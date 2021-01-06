import React, { useState } from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { Link } from "gatsby"

const Cart = () => {
  const [loading, setLoading] = useState(false)
  /* Gets the totalPrice and a method for redirecting to stripe */
  const {
    formattedTotalPrice,
    redirectToCheckout,
    cartCount,
    // clearCart,
  } = useShoppingCart()

  if(cartCount > 0){
  return (
    <div className="cart_checkout">
      {/* This is where we'll render our cart */}
      <p>アイテム数: <span>{cartCount}</span></p>
      <p>合計金額: <span>{formattedTotalPrice}</span></p>
      {/* Redirects the user to Stripe */}
      <button
        disabled={loading}
        onClick={() => {
          setLoading(true)
          redirectToCheckout()
        }}
      >
        {loading ? 'Loading...' : 'お支払いへ'}
      </button>
      {/* <button onClick={clearCart}>
        カートを空にする
      </button> */}
      <p><Link to="/">お買い物を続ける</Link></p>
    </div>
  )
  }
  else{
    return(
      <>
      <p>・・・</p>
      </>
    )
  }
}

export default Cart