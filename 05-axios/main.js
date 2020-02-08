axios.get('https://api.github.com/users/gguerran')
  .then(function(response){
    var imagem = document.createElement('img');
    imagem.setAttribute('src', response.data.avatar_url);
    var pagina = document.querySelector('div');
    pagina.appendChild(imagem);
  })
  .catch(function(error){
    console.log(error)
  })

console.log('teste')