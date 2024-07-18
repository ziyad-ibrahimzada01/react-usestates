import React, { useState } from 'react'

export const Password = () => {
    const [password,setPassword]=useState("")
    const [showPassword,setShowPassword]=useState(false)

    const passwordChange=(e)=>{
      setPassword(e.target.value)
    }
    const passwordVisibility=()=>{
      setShowPassword(!showPassword)
    }
  return (
    <>
    <input type={showPassword?"text":"password"} value={password} onChange={passwordChange} placeholder='Enter your password'/>
    <button onClick={passwordVisibility}>{showPassword?"Show":"Hide"}</button>
    </>
  )
}
