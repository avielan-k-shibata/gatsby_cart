import { useShoppingCart } from 'use-shopping-cart'
import { Product } from './Product'
import { CartItems } from './CartItems'

const productData = [
  {
    name: 'Bananas',
    price_id: 'price_GBJ2Ep8246qeeT',
    price: 400,
    image: 'https://www.fillmurray.com/300/300',
    currency: 'USD'
  },
  {
    name: 'Tangerines',
    price_id: 'price_GBJ2WWfMaGNC2Z',
    price: 100,
    image: 'https://www.fillmurray.com/300/300',
    currency: 'USD'
  }
]

export function App() {
  /* Gets the totalPrice and a method for redirecting to stripe */
  const { totalPrice, redirectToCheckout, cartCount } = useShoppingCart()

  return (
    <div>
      {/* Renders the products */}
      {productData.map((product) => (
        <Product product={product} />
      ))}

      {/* This is where we'll render our cart */}
      <p>Number of Items: {cartCount}</p>
      <p>Total: {totalPrice()}</p>
      <CartItems />

      {/* Redirects the user to Stripe */}
      <button onClick={() => redirectToCheckout()}>Checkout</button>
    </div>
  )
}