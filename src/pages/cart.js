import React from 'react'
import CartOverview from '../components/CartOverview'
import { loadStripe } from '@stripe/stripe-js'
import { CartProvider } from 'use-shopping-cart'

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)

const Cartpage = () => {

  return (
    <>
    <CartProvider
      mode="client-only"
      stripe={stripePromise}
      successUrl={`${window.location.origin}/page-2/`}
      cancelUrl={`${window.location.origin}/`}
      currency="JPY"
      allowedCountries={['JP']}
      billingAddressCollection={true}
    >
      <CartOverview />
    </CartProvider>
    </>
  )
}

export default Cartpage