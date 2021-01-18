import ReactDOM from 'react-dom'

import { loadStripe } from '@stripe/stripe-js'
import { CartProvider } from 'use-shopping-cart'

import App from './App'

// Remember to add your public Stripe key
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_API_PUBLIC)

ReactDOM.render(
  <CartProvider
    stripe={stripePromise}
    successUrl="/"
    cancelUrl="/cart"
    currency="JPY"
    allowedCountries={['JP']}
    billingAddressCollection={true}
  >
    <App />
  </CartProvider>,
  document.getElementById('root')
)