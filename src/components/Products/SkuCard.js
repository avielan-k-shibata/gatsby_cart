import React from 'react'

import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'

const cardStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'flex-start',
  padding: '1rem',
  marginBottom: '1rem',
  boxShadow: '5px 5px 25px 0 rgba(46,61,73,.2)',
  backgroundColor: '#fff',
  borderRadius: '6px',
  maxWidth: '300px',
}
const buttonStyles = {
  fontSize: '13px',
  textAlign: 'center',
  color: '#fff',
  outline: 'none',
  padding: '12px',
  boxShadow: '2px 5px 10px rgba(0,0,0,.1)',
  backgroundColor: 'rgb(255, 178, 56)',
  borderRadius: '6px',
  letterSpacing: '1.5px',
}

const SkuCard = ({ sku }) => {
  const { addItem, incrementItem, clearCart,removeItem } = useShoppingCart()

  return (
    <div style={cardStyles}>
      <h4>{sku.name}</h4>
      <p>
        Price:{' '}
        {formatCurrencyString({
          value: parseInt(sku.price),
          currency: sku.currency,
        })}
      </p>
      <button style={buttonStyles} onClick={() => addItem(sku, 1)}>
        ADD TO CART
      </button>
      <button style={buttonStyles} onClick={() => addItem(sku, 10)}>
        ADD TO CART
      </button>
      <button
            onClick={() => incrementItem(sku)}
            aria-label={`Add one ${sku.name} to your cart`}
          >
            Add one {sku.name} to your cart
          </button>
          <button onClick={clearCart}>Remove all items</button>
          <button
            onClick={() => removeItem(sku)}

          >
            Remove from cart
          </button>
    </div>
  )
}

export default SkuCard