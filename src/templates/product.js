import React from "react"
import { graphql } from "gatsby"
import SkuCard from '../components/Products/SkuCard'
import CartOverview from '../components/CartOverview'
import RemoveCart from '../components/removeCart2'
import Layout from '../components/layout/layout'


export default function Product({ data }) {
    const price = data.stripePrice
    const newSku = {
        sku: price.id,
        name: price.product.name,
        price: price.unit_amount,
        currency: price.currency,
        id: price.id,

      }
    return (
      <>
        <Layout pagestyle="detail">
            <SkuCard sku={newSku} />
            <RemoveCart />
            <CartOverview />
        </Layout>
        
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