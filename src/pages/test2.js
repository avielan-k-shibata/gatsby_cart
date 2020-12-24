import React from 'react'


import Skus from '../components/Products/Skus'
import CartOverview from '../components/CartOverview'

import { loadStripe } from '@stripe/stripe-js'
import { CartProvider } from 'use-shopping-cart'
import RemoveCart from '../components/removeCart2'
const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)

const CartExample2 = () => (
  <div>
    
    <h1>Checkout with cart example</h1>
    <h2>
      With{' '}
      <a href="https://use-shopping-cart.netlify.app/">use-shopping-cart</a>
    </h2>
    <CartProvider
      mode="client-only"
      stripe={stripePromise}
      successUrl={`${window.location.origin}/page-2/`}
      cancelUrl={`${window.location.origin}/`}
      currency="USD"
      allowedCountries={['US', 'GB', 'CA']}
      billingAddressCollection={true}
    >
      <CartOverview />
      <Skus />
      
    <RemoveCart />
    </CartProvider>
  </div>
)

export default CartExample2