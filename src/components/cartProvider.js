import ReactDOM from 'react-dom'

import { loadStripe } from '@stripe/stripe-js'
import { CartProvider } from 'use-shopping-cart'

import App from './App'

// Remember to add your public Stripe key
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_API_PUBLIC)

ReactDOM.render(
  <CartProvider
    stripe={stripePromise}
    successUrl="http://localhost:8000/"
    cancelUrl="http://localhost:8000/"
    currency="JPY"
    allowedCountries={['JP', 'GB', 'CA']}
    billingAddressCollection={true}
  >
    <App />
  </CartProvider>,
  document.getElementById('root')
)