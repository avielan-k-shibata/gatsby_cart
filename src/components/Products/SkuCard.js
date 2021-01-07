import React from 'react'

import { useShoppingCart
  // , formatCurrencyString 
} from 'use-shopping-cart'

const SkuCard = ({ sku }) => {
  const { addItem } = useShoppingCart()

  return (
    <div>
      {/* <h4>{sku.name}</h4>
      <p>
        Price:{' '}
        {formatCurrencyString({
          value: parseInt(sku.price),
          currency: sku.currency,
        })}
      </p> */}
      <input type="number" id="productCount" name="productCount" min="1" defaultValue="1" />
      <button onClick={() => {
        const quantity = Number(document.getElementById('productCount').value)
        addItem(sku, quantity)}
      }
      >
        カートに入れる
      </button>

    </div>
  )
}

export default SkuCard