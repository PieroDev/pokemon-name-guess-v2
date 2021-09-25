import getPokemonList from "../../../services/getPokemonList"
import CardContainer from './CardContainer'

export default function GameContainer(){
    const etapa = 1
    const pokeList = []
    let pokemonList = []

    const setPokemonList = () => {
        pokemonList = getPokemonList(etapa, pokeList)
        return pokemonList
    }

    async function secondFunction (){
        const result = await setPokemonList();
        return result
    }

    const probando = secondFunction()

    return  <div>
                {probando && <CardContainer pokemonList={ {pokemonList} } />}
            </div>
    
}