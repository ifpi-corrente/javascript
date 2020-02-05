var usuarios = [
  {
  nome: "Diego",
  habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  {
  nome: "Gabriel",
  habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
 ];
 function habilidades(usuarios){
  usuarios.forEach(usuario => {
    console.log(usuario.nome);
    console.log(usuario.habilidades.join(','));
  });
 }
 habilidades(usuarios);