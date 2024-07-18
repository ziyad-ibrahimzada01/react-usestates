import React from 'react'
import { useState } from 'react'

export const ColorChangeClick = () => {

    const [color,setColor]=useState("black")
    const handleClick=()=>{
        setColor(prevColor=>prevColor==="black"?"red":prevColor==="red"?"blue":"red")
    }
  return (
    <>
    <p style={{color}}>The text is changing its color</p>
    <button onClick={handleClick}>Change the color</button>
    </>
  )
}