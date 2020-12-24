import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'

export default function RemoveCart() {
  const { incrementItem, decrementItem,removeItem, cartDetails  } = useShoppingCart()
  const entries = []
  for (const sku in cartDetails) {
    const entry = cartDetails[sku]

    entries.push(
      <article
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '50%'
        }}
      >
        <figure style={{ textAlign: 'center' }}>
          <img
            style={{ height: 200, width: 250 }}
            src={entry.image}
            alt={entry.name}
          />
          <figcaption>{entry.name}</figcaption>
        </figure>
        <p>{entry.formattedValue}</p>
        <section
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-evenly'
          }}
        >
          {/* Removes the item from the cart */}
          <button
            onClick={() => incrementItem(sku)}
            aria-label={`Remove ${entry.name} from your cart`}
            style={{ height: 50, width: 100, marginBottom: 30 }}
          >
            +
          </button>
          <button
            onClick={() => decrementItem(sku)}
            aria-label={`Remove ${entry.name} from your cart`}
            style={{ height: 50, width: 100, marginBottom: 30 }}
          >
            -
          </button>
          <button
            onClick={() => removeItem(sku)}
            aria-label={`Remove ${entry.name} from your cart`}
            style={{ height: 50, width: 100, marginBottom: 30 }}
          >
            delite
          </button>
        </section>
      </article>
    )
  }
  if (entries.length) return entries
  return <p>You currently don't have any items in your cart.</p>
}