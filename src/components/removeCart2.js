import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'

export default function RemoveCart() {
  const { incrementItem, decrementItem,removeItem, cartDetails  } = useShoppingCart()
  const entries = []
  for (const sku in cartDetails) {
    const entry = cartDetails[sku]
    console.log(entry.price.toLocaleString())
    entries.push(
      <div key={sku} className="itemlist">
        <p style={{ textAlign: 'center' }}>
          <img
            src={entry.image}
            alt={entry.name}
          />
        </p>
        <p>
          <span>{entry.name}</span>
          <span>&yen; {entry.price.toLocaleString()}</span>
        </p>
        <p>
          <button
            onClick={() => decrementItem(sku)}
            aria-label={`Remove ${entry.name} from your cart`}
          >
            -
          </button>
          <span>{entry.quantity}</span>
          <button
            onClick={() => incrementItem(sku)}
            aria-label={`Add ${entry.name} from your cart`}
          >
            +
          </button>
        </p>
        <p>小計: {entry.formattedValue}</p>
        <p>
          <button
            onClick={() => removeItem(sku)}
            aria-label={`delite ${entry.name} from your cart`}
          >
            削除
          </button>
          </p>
      </div>
    )
  }
  if (entries.length) return entries
  return <p>現在カートの中は空です。</p>
}