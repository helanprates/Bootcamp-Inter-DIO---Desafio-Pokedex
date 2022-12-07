

function convertPokenonToLi (pokemon) {
    return `<li class="headerDetails ${pokemon.type}">
    <div class="backListPomenons">&larr;</div>
    
    <div class="nameDetails" >
        <span class="namePokemonDetails" >${pokemon.name}</span>
        <span class="numberPokemonDetails">#${pokemon.number}</span>
    </div>
    <div> 
        <ul class="typesDetails">
              ${pokemon.types.map((type) => `<li class="typeDetails ${type}">${type}</li>`).join('')}
        </ul>
    </div>
        
    <div class="imageDetails">                       
        <img src="${pokemon.photo}" 
            alt="${pokemon.name}">
    </div> 
                
</li>
<li class="aboutDetails">
    <ul >
        <span>About</span>
        <li>Id:  ${pokemon.number}</li>
        <li>Base Experience:  ${pokemon.base_experience}</li>
        <li>Height:  ${pokemon.height}</li>
        <li>weight:  ${pokemon.weight}</li>
    </ul>
</li>` 
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokenonToLi).join('')
    pokemonList.innerHTML = newHtml
})