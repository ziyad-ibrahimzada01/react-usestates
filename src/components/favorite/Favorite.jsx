import React, { useState } from 'react'


export const Favorite = () => {
    const [isFavorite,setIsFavorite]=useState(false)
    const toggleFavorite=()=>{
        setIsFavorite(!isFavorite)
    }
  return (
    <>
    <button style={{background:"none",border:"none",cursor:"pointer"}} onClick={toggleFavorite}>
        {isFavorite?<FaHeart color="red" size="24px"/>:<FaHeart color="grey" size="24px"/>}
    </button>
    </>
  )
}
