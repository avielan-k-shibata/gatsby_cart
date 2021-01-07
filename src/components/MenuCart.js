import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { Link } from "gatsby"

const Menucart = () => {
  // const [loading, setLoading] = useState(false)
  /* Gets the totalPrice and a method for redirecting to stripe */
  const {
    formattedTotalPrice,
    cartCount,
  } = useShoppingCart()

  if(cartCount > 0){
  return (
    <div className="cart_checkout">
      <Link to="/cart">t</Link>
      <p>アイテム数: <span>{cartCount}</span></p>
      <p>合計金額: <span>{formattedTotalPrice}</span></p>
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

export default Menucart