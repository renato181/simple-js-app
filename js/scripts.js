let pokemonList = [
  {name: ' Bulbasaur ', Type: ['grass', 'poison'], height: .7},
  {name: ' Ivysaur ', Type: ['grass', 'poison'], height: .99},
  {name: ' Venusaur ', Type: ['grass', 'poison'], height: 2},
  {name: ' Charmander ', Type: 'fire', height: .6},
  {name: ' Charmeleon ', Type: 'fire', height: 1.09},
  {name: ' Charizard ', Type: 'fire', height: 1.7},
  {name: ' Squirtle ', Type: 'water', height: .5},
  {name: ' Wartortle ', Type: 'water', height: .99},
  {name: ' Blastoize ', Type: 'water', height: 1.6},
];

for (let i=0; i < pokemonList.length; i++){
  if (pokemonList[i].height <0.85){
    document.write(`<p> ${pokemonList[i].name} (height ${pokemonList[i].height} meters) is a small pokemon.</p><br>`);
  }else if (pokemonList[i].height >1.85){
    document.write(`<p> ${pokemonList[i].name} (height ${pokemonList[i].height} meters) Wow! That's big!</p><br>`);
  }else {
    document.write(`<p> ${pokemonList[i].name} (height ${pokemonList[i].height} meters) is an average pokemon.</p><br>`);
  }
}
