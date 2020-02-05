function mostraEndereco(endereco){
  return 'O usuário estuda na '+endereco.rua+' número '+endereco.numero+'- bairro '+endereco.bairro+' - '+endereco.cidade+' / '+endereco.uf
}
var endereco = {
  rua: "Rua 6",
  numero: 123,
  bairro: "Nova Corrente",
  cidade: "Corrente",
  uf: "PI"
 };
 var texto = mostraEndereco(endereco);
 console.log(texto);
 