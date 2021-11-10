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



pokemonList.forEach((pokemon, i) => {
  document.write('<p>' + pokemon.name + ' is a ' + pokemon.type + ' type' + ' standing at ' + pokemon.height + ' meters high</p>')
});
