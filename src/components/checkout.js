import React, { useState } from "react"
import { loadStripe } from "@stripe/stripe-js"

let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe("pk_test_51HrJD7KQNc95UjNNLKmLsX9rJQbDIUIMkOscnaGChZTmhAx083M1NuRbfSBflEC6jLDw4dFvjoCrm95nL1WXaNbV00RSjumVv8")
  }
  return stripePromise
}


const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const redirectToCheckout = async event => {
      event.preventDefault()
      setLoading(true)
      const stripe = await getStripe()
      const { error } = await stripe.redirectToCheckout({
        mode: "payment",
        lineItems: [{ price: "price_1HrJeJKQNc95UjNNAK4gGJFI", quantity: 1 }],
        successUrl: `http://localhost:8000/`,
        cancelUrl: `http://localhost:8000/`,
      })
      if (error) {
        console.warn("Error:", error)
        setLoading(false)
      }
    }
    return (
      <button
        disabled={loading}

        onClick={redirectToCheckout}
      >
        BUY MY BOOK
      </button>
    )
  }
  export default Checkout