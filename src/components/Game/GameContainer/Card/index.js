import AnswerContainer from "../AnswerContainer"


export default function Card( { name, id }){


    return  <div>
                <img src={`images/pokedex/${id}.png`} alt="PokeImg"></img>
                <p>{ name }</p>
                <AnswerContainer name={ name } />
            </div>
}