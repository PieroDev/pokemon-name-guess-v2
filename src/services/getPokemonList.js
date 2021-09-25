
export default function getPokemonList( etapa, pokeList){
    const apiBaseUrl = 'https://pokeapi.co/api/v2/pokemon/'
    const numberOfPokes = 10;




    const  getKantoPokes = () => {
        console.log("Hola desde Kanto")
        for(var i=0; i<numberOfPokes; i++){
            let pokeId = Math.floor(Math.random()*150)+1
            fetch(apiBaseUrl+pokeId)
            .then(res => res.json())
            .then(response => {
                pokeList.push(response)
            })
        }
    }

    const  getJohtoPokes = () => {
        console.log("Hola desde Johto")
    }

    switch(etapa){
        case 1: getKantoPokes()
                break;
        case 2: getJohtoPokes()
                break;
        default : console.log('No hay mas')
                break;
    }


    return pokeList
}