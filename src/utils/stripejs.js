/**
 * This is a singleton to ensure we only instantiate Stripe once.
 */
import { loadStripe } from "@stripe/stripe-js"

let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)
    // stripePromise = loadStripe("pk_test_51HrJD7KQNc95UjNNLKmLsX9rJQbDIUIMkOscnaGChZTmhAx083M1NuRbfSBflEC6jLDw4dFvjoCrm95nL1WXaNbV00RSjumVv8")
  }
  return stripePromise
}

export default getStripe