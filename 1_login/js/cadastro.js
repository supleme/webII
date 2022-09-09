const form = document.getElementById('login_form');
const user = document.querySelector('#user');
const password = document.querySelector('#password');

form.addEventListener('submit', (e) =>{
  e.preventDefault();
  let userValue = user.value;
  let passwordValue = password.value;

  if(validaDado(userValue, passwordValue)){
    colocarLocal(userValue, passwordValue);
    alertify.success('Logado com sucesso');
    direcionamento();
  } else{
    alertify.error('Dados Inválidos')
  }
// JSON.parce() para analisar uma String JSON, no cadastro usar o JSON.stringify()
})

function colocarLocal(name, password){
  const user = JSON.stringify({nome: name, senha: password});
  localStorage.setItem('usuario', user);
}

function varrerUsers(name, password){
  localStorage.getItem(name, password)
}

function validaDado(user, password){
  if(user.length <= 3 && password.length <=3){
    return false;
  }
  return true;
}

function direcionamento(){
  setInterval(function(){
    (window.location.href = "/1_login/login.html"), 10000;
  })
}

