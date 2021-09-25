import { useState } from "react";
import Card from '../Card'

export default function CardContainer(  {pokemonList}  ) {
    const [renderPokes, setRenderPokes] = useState(false)

    setTimeout(() => {
        setRenderPokes(true)
    }, 1000);

   


    return  <div>
                {renderPokes ? pokemonList.pokemonList.map((pokes)=>{
                return <Card key={pokes.id} id={pokes.id} name={pokes.name}/>
                })
                 : <h3>No cargado</h3>}
            </div>
}