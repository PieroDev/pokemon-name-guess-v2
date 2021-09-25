import { useState } from "react"
import GameContainer from "./GameContainer"

export default function Game(){
    const [start, setStart] = useState(false)


  const handleStartClick = () => {
    setStart(true)
  }
  const handleStopClick = () => {
    setStart(false)
  }


  return (
    <div className="App">
      <img src='pokeguessr-logo.png' className="App-logo" alt="logo" />
      <br/>
      {!start && <button onClick={handleStartClick}>Start</button>}
      {start && <GameContainer />}
      {start && <button onClick={handleStopClick}>Stop</button>}
    </div>
  );
}