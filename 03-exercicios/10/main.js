function deMaior(anoAtual, anoNasc){
  var idade = anoAtual - anoNasc;
  if (idade >=18){
    return true;
  }else{
    return false;
  }
}
var anoNasc = prompt('digite a seu ano de nascimento');

console.log(deMaior(2020, anoNasc));