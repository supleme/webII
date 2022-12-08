(function (){
  var urlDiv = document.getElementById("divURL")
  let url = window.location.href;
  let teste = url.split('/');
  urlDiv.innerHTML = `URL ATUAL: ${teste[teste.length - 1]}`;

  divPneu = document.getElementById('mostraPneu');
  quantidadePneu = localStorage.getItem('pneu')
  divPneu.innerHTML = quantidadePneu;

  divLona = document.getElementById('mostraLona');
  quantidadeLona = localStorage.getItem('lona')
  divLona.innerHTML = quantidadeLona;

}
)()
let usuario = JSON.parse(localStorage.getItem('usuario'));

function boasVindas(nome){
  function transformarCapitalize(txt){
    return txt.toUpperCase();
  }
  alert(`Bem vindo ao Home da página ${transformarCapitalize(nome)}`);
}
boasVindas(usuario.nome);
// alert(`Bem vindo ao Home da página ${usuario.nome}`)

let titulo1 = document.getElementById("tituloDiv");
titulo1.addEventListener("mouseover", function(){
  this.style.background = "#d9d9d9"
});
titulo1.addEventListener("mouseout", function(){
  this.style.background = "white"
})

let titulo2 = document.getElementById("tituloDiv2");
titulo2.addEventListener("mouseover", function(){
  this.style.background = "#d9d9d9"
})
titulo2.addEventListener("mouseout", function(){
  this.style.background = "white"
})


