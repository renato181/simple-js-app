let pokemonRepository = (function() {
  //List of pokemon Array
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'

  //adds pokemon to the pokedex
  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList
  }

  function addListItem(pokemon) {
    let list = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('pokemon-button', 'btn', 'btn-primary')
    listItem.classList.add('group-list-item')
    button.setAttribute('data-toggle', 'modal')
    button.setAttribute('data-target', '#targetModal')
    listItem.appendChild(button)
    list.appendChild(listItem)

    // call showDetails function upon button click
    button.addEventListener('click', function() {
      showDetails(pokemon);
    });
  }

  function loadList() {
    return fetch(apiUrl).then(function(response) {
      return response.json();
    }).then(function(json) {
      json.results.forEach(function(item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon)
      });
    }).catch(function(e) {
      console.error(e)
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function(response) {
      return response.json();
    }).then(function(details) {
      item.imageUrl = details.sprites.front_default
        item.height = details.height
        item.types = details.types
    }).catch(function(e) {
      console.error(e);
    });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function() {
      let modalTitle = $('.modal-title');
      modalTitle.text(pokemon.name);

      let height = $('.pokemon-height');
      let img = $('.pokemon-img');
      height.text(`Height: ${pokemon.height}`);
      img.attr('src', pokemon.imageUrl);

      let typesArr = []
      let pokemonTypes = $('.pokemon-types')
      pokemon.types.forEach(item => {
        let types = item.type.name
        typesArr.push(types)
      });
      let string = typesArr.join(' & ')
      pokemonTypes.text(`Type(s): ${string}`)
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails
  }
})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon)
  });
});
