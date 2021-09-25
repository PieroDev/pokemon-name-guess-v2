import { useState } from "react"
import { gameLogicAnswerClick, gameLogicHintClick, gameLogicCreateHintString} from "../../../../gameLogic"
import HintContainer from "../HintContainer"


export default function AnswerContainer({name}){
    const [prevHint, setPrevHint] = useState("")
    const [answerText, setAnswerText] = useState("")
    const [generatedHint, setSendedHint] = useState("")
    const [renderHint, setRenderHint] = useState(false)

    const handleAnswerClick = () =>{
        gameLogicAnswerClick(answerText, name)
    }

    const handleHintClick = () =>{
        const generatedHint = gameLogicHintClick(name, hint, prevHint)
        setSendedHint(generatedHint)
        setPrevHint(generatedHint)
        setRenderHint(true)
        setTimeout(() => {
            setRenderHint(false)
        }, 100);
    }
 
    const createHintString = () =>{
        return gameLogicCreateHintString(name)
    }

    const hint = createHintString()

    if(prevHint===""){
        const stringHint = hint.replace(/\s/g, "");
        const arrayHint = stringHint.split("")
        setPrevHint(arrayHint)
    }
    
    console.log(prevHint)

    return  <div className="answer-container">
                <HintContainer hint={ generatedHint} startHint={ hint } />
                <h5>Estamos en Answer container</h5>
                <input 
                value={ answerText }
                onChange={({ target: { value }}) => setAnswerText(value)}
                ></input>
                <br/>
                <button onClick={handleAnswerClick}>Click</button>
                <button onClick={handleHintClick}>Hint</button>
            </div>
}