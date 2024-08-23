import { useState } from "react";
import Start from "./components/start"
import Game from "./components/game";

function App() {
 
  const[isGameStarted, setisGameStarted]= useState(false);
  const toggleGamePlay = () => {
    setisGameStarted((prev) => !prev);
  };
  return (
    <>
    {
      
      isGameStarted? <Game/>:<Start
      
      toggle={toggleGamePlay}
      />
    }
     
    </>
  )
}

export default App
