export { gameLogicAnswerClick, gameLogicHintClick, gameLogicCreateHintString }


function gameLogicCreateHintString(name){
    let words = name.split("")
        const newHint = words.map((word) =>{
            return word = "_"
        })
        return newHint.join("  ")
}

function gameLogicAnswerClick(answer, name){
    console.log("Tu respuesta: "+answer+ " correcto: "+name)
    if(answer === name){
        console.log('Acertaste!')
    }
    else{
        console.log('Erraste :(')
    }
}

function gameLogicHintClick(name, hint, prevHint){
    const arrayName = name.split("")
    const stringHint =  hint.replace(/\s/g, "");
    const arrayHint = stringHint.split("")
    
    console.log(1)
    console.log(arrayName)
    console.log(2)
    console.log(arrayHint)
    console.log(3)
    console.log(prevHint)
    const indexOfHint = Math.floor(Math.random()*arrayHint.length)

    arrayHint[indexOfHint] = arrayName[indexOfHint]
    prevHint[indexOfHint] = arrayName[indexOfHint]
    console.log(4)
    console.log(arrayHint)
    console.log(5)
    console.log(prevHint)
    return prevHint
}

