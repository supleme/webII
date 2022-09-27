(function (){
  var urlDiv = document.getElementById("divURL")
  let url = window.location.href;
  let teste = url.split('http://127.0.0.1:5500/home/');
  urlDiv.innerHTML = `URL ATUAL: ${teste[1]}`;
})()
let usuario = JSON.parse(localStorage.getItem('usuario'));

alert(`Bem vindo ao Home da página ${usuario.nome}`)

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
