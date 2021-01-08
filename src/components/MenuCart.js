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
    <div className="menu_cart">
      <Link to="/cart">
      <span></span>
      <span>
        <span>{cartCount}点:　計{formattedTotalPrice}</span>
      </span>
      </Link>
    </div>
  )
  }
  else{
    return(
      <>
    <div className="menu_cart">
      <Link to="/cart">
      <span></span>
      <span>
        現在カートの中は空です。
      </span>
      </Link>
    </div>
      </>
    )
  }
}

export default Menucart