import React from 'react'
import { ColorChangeClick} from "./components/colorChangingClick/Ccc";
import { Password} from "./components/showPassword/Password";
import { Panel} from "./components/openClosePanel/Panel";
import { ShoppingCard} from "./components/productsInCard/ShoppingCard";
import { Favorite} from "./components/favorite/Favorite";


function App() {
  return (
    <>
    <ColorChangeClick/><br></br>
    <Password/><br />
    <Panel/><br />
    <ShoppingCard/><br />
    <Favorite/>
    </>
  )
}

export default App
