import React, { useDebugValue, useState } from 'react'

export const ShoppingCard = () => {
  const [cardCount,setCardCount]=useState(0)
  const addItem=()=>{
    setCardCount(cardCount+1)
  }
  const removeItem=()=>{
    setCardCount(cardCount>0?cardCount-1:0)
  }
  return (
    <>
    <h2>{cardCount} product(s) in the card</h2>
    <button onClick={addItem}>Add product</button>
    <button onClick={removeItem}> Remove product</button>
    </>
  )
}
