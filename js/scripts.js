
let pokemonRepository = (function () {
  let repository = [
    {name: ' Bulbasaur', type: [' grass', ' poison'], height: .7},
    {name: ' Ivysaur', type: [' grass', ' poison'], height: .99},
    {name: ' Venusaur', type: [' grass', ' poison'], height: 2},
    {name: ' Charmander', type: ' fire', height: .6},
    {name: ' Charmeleon', type: ' fire', height: 1.09},
    {name: ' Charizard', type: ' fire', height: 1.7},
    {name: ' Squirtle', type: ' water', height: .5},
    {name: ' Wartortle', type: ' water', height: .99},
    {name: ' Blastoize', type: ' water', height: 1.6},
  ];

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon
    ) {
      repository.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }
  function getAll() {
    return repository
  };

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };

  function showDetails(pokemon){
   console.log(pokemon.name);
 }

 function addListItem(pokemon){
   let pokemonList = document.querySelector('.pokemon-list');
   let listItem = document.createElement('li');
   let button = document.createElement('button');
   button.innerText = pokemon.name;
   button.classList.add('button-class');
   listItem.appendChild(button);
   pokemonList.appendChild(listItem);
   button.addEventListener('click', function() {
   showDetails(pokemon)
 });
}
document.querySelector('.show-more').addEventListener('click', function () {
  document.querySelector('.additional-information')
    .classList.toggle('is-visible');
});

})();


pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
