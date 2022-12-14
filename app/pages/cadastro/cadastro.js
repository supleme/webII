const form = document.getElementById('login_form');
const user = document.querySelector('#user');
const password = document.querySelector('#password');

form.addEventListener('submit', (e) =>{
  e.preventDefault();
  let confirma = confirm("Tem certeza que seus dados estao certos?")
  if(confirma === true){
    let userValue = user.value;
    let passwordValue = password.value;

    if(validaDado(userValue, passwordValue)){
      colocarLocal(userValue, passwordValue);
      alertify.success('Cadastrado com sucesso');
      direcionamento();
    } else{
      alertify.error('Dados Inválidos')
    }
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
    (window.location.href = "../login/login.html"), 10000;
  })
}

