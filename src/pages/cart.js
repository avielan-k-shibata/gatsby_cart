import React from 'react'
import CartOverview from '../components/CartOverview'
import Layout from '../components/layout/layout'
import RemoveCart from '../components/removeCart2'


const Cartpage = () => {

  return (
    <Layout>
            <div className="title">
                <h1>CART</h1>
            </div>
            
            <div className="contents">
                <div className="contents_cart">
                    <div className="cart_list">
                      <RemoveCart />

                    </div>
                    <CartOverview />
                </div>
            </div>
    </Layout>
  )
}

export default Cartpage