import { gameLogicCreateHintString } from "../../../../gameLogic"

export default function HintContainer({ hint, startHint }){
    console.log("PrevHint ")
    console.log(startHint)
    console.log("HintContainer ")
    console.log(hint)

    

    return  <div>
                <p>{typeof(hint)=="string" ? <p>{ startHint }</p> : hint.join(" ") }</p>
            </div>
}