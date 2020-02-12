var listaElement = document.querySelector('ul');
var botaoElement = document.querySelector('button');
var inputElement = document.querySelector('input');

function mostrarRepositorios(repositorios){
  listaElement.innerHTML = '';
  for (repo of repositorios){
    var texto = document.createTextNode(repo.name);
    var item = document.createElement('li');
    item.appendChild(texto);
    listaElement.appendChild(item);
  }
}

function pegarRepositorios(){
  var usuario = inputElement.value;
  axios.get('https://api.github.com/users/' + usuario + '/repos')
  .then(function(response){
    mostrarRepositorios(response.data);
  })
  .catch(function(error){
    console.log(error);
  })
}

botaoElement.onclick = pegarRepositorios;