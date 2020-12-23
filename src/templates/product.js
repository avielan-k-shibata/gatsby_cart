import React from "react"
import { graphql } from "gatsby"
import SkuCard from '../components/Products/SkuCard'
import CartOverview from '../components/CartOverview'
import { loadStripe } from '@stripe/stripe-js'
import { CartProvider } from 'use-shopping-cart'
const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)
export default function Product({ data }) {
    const price = data.stripePrice
    const newSku = {
        sku: price.id,
        name: price.product.name,
        price: price.unit_amount,
        currency: price.currency,
      }
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
            <SkuCard sku={newSku} />
        </CartProvider>
      </>
    )
  }



export const query = graphql`
query ($id: String!)  {
    stripePrice(product: {metadata: {id: {eq: $id}}}) {
        product {
            id
            name
            metadata {
              id
            }
          }
          active
          billing_scheme
          currency
          livemode
          object
          unit_amount
          id
    }
}

`