let pokemonRepository=function(){let t=[],e='https://pokeapi.co/api/v2/pokemon/?limit=150';function n(e){t.push(e)}function o(t){let e=t.detailsUrl;return fetch(e).then(function(t){return t.json()}).then(function(e){t.imageUrl=e.sprites.front_default,t.height=e.height,t.types=e.types}).catch(function(t){console.error(t)})}return{add:n,getAll:function(){return t},addListItem:function(t){let e=document.querySelector('.pokemon-list'),n=document.createElement('li'),i=document.createElement('button');i.innerText=t.name,i.classList.add('pokemon-button','btn','btn-primary'),n.classList.add('group-list-item'),i.setAttribute('data-toggle','modal'),i.setAttribute('data-target','#targetModal'),n.appendChild(i),e.appendChild(n),i.addEventListener('click',function(){!function(t){o(t).then(function(){let e=$('.modal-title');e.text(t.name);let n=$('.pokemon-height'),o=$('.pokemon-img');n.text(`Height: ${t.height}`),o.attr('src',t.imageUrl);let i=[],l=$('.pokemon-types');t.types.forEach(t=>{let e=t.type.name;i.push(e)});let r=i.join(' & ');l.text(`Type(s): ${r}`)})}(t)})},loadList:function(){return fetch(e).then(function(t){return t.json()}).then(function(t){t.results.forEach(function(t){let e={name:t.name,detailsUrl:t.url};n(e),console.log(e)})}).catch(function(t){console.error(t)})},loadDetails:o}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(t){pokemonRepository.addListItem(t)})});
