
let pokemonRepository = (function () {
  let pokemonList = [
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

  return {
    add: function(pokemon) {
      pokemonList.push(pokemon);
    },
    getAll: function() {
      return pokemonList;
    }
  };
})();


pokemonRepository.add({ name: ' Caterpie', type: [' bug'], height: .3});

pokemonRepository.getAll().forEach(function(pokemonList) {
  document.write(`<p> ${pokemonList.name} is a ${pokemonList.type} pokemon standing ${pokemonList.height} meters tall! </p>`);
});
