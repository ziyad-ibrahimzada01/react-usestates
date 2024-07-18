import React, { useState } from 'react'

export const Panel = () => {
    const [isPanelOpen,setIsPanelOpen]=useState(false)
    const togglePanel=()=>{
        setIsPanelOpen(!isPanelOpen)
    }
  return (
    <>
    <button onClick={togglePanel}>{isPanelOpen?"Close panel":"Open panel"}</button>
    {
        isPanelOpen&&(
            <div style={{marginTop:"10px",border:"1px solid black",padding:"10px"}}>
                    The text panel is open
            </div>
        )
    }
    
    </>
  )
}
