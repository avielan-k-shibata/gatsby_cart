import React from 'react';

import Header from "./header"
import Leftmenu from "./leftmenu"
import Footer from "./footer"

import { loadStripe } from '@stripe/stripe-js'
import { CartProvider } from 'use-shopping-cart'
const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)

const Layout = ({children, pagestyle, pathname}) =>{
    const containerName = `shop_container ${pagestyle}`
    return (
      <>
        <CartProvider
            mode="client-only"
            stripe={stripePromise}
            // successUrl={`${window.location.origin}/page-2/`}
            // cancelUrl={`${window.location.origin}/`}
            successUrl="/"
            cancelUrl="/cart"
            currency="JPY"
            allowedCountries={['JP']}
            billingAddressCollection={true}
            >
            <div className={pagestyle ? containerName: "shop_container"} >
            <Header/>
            <Leftmenu/>
            <main>
                {children}
                {pathname}
            </main>
            
            <Footer/>
            </div>
        </CartProvider>
      </>
    )
  }
  
  export default Layout;