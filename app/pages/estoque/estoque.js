(function (){
  var urlDiv = document.getElementById("divURL")
  let url = window.location.href;
  let teste = url.split('http://127.0.0.1:5500/estoque/');
  urlDiv.innerHTML = `URL ATUAL: ${teste[1]}`;
})()


document.addEventListener("keydown", function(event){
  if(event.key === "Enter"){
    console.log("Apertou Enter")
  }
})

document.addEventListener("keyup", function(e){
  if(e.key == "Enter"){
    console.log("Soltou o Enter")
  }

})