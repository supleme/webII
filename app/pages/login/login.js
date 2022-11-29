const form = document.getElementById('login_form');
const user = document.querySelector('#user');
const password = document.querySelector('#password');

form.addEventListener('submit', (e) =>{
  e.preventDefault();
  let userValue = user.value;
  let passwordValue = password.value;

  if(validaDado(userValue, passwordValue) == false){
    alertify.error('Dados Inválidos')
    
  }else{
    if(verificaBanco(userValue, passwordValue) == true){
      alertify.success('Logado com sucesso');
      direcionamento()
    } else{
      alertify.error('Usuario não encontrado')
    }
  }
})

function verificaBanco(name, password){
  let usuario = JSON.parse(localStorage.getItem('usuario'))
  if(usuario.nome === name && usuario.senha === password){
    return true
  }
  return false;
}

function validaDado(user, password){
  if(user == null || password == null){

  }
  if(user.length < 3 || password.length < 3){
    return false;
  }
  return true;
}

function direcionamento(){
  setInterval(function(){
    (window.location.href = "../home/home.html"), 10000;
  })
}

function valorPadrao(){
  let usuario = JSON.parse(localStorage.getItem('usuario'))
  if(usuario.nome === '' || usuario.senha === ''){
    const user = JSON.stringify({nome: 'name', senha: 'password'});
    localStorage.setItem('usuario', user);
  }
}