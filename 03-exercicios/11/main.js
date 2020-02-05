var botao = document.querySelector('button');
var input = document.querySelector('input');

function mostraMensagem(){
  alert(input.value);
}

botao.onclick = mostraMensagem;
botao.style.borderColor = 'blue'