const form = document.getElementById('login_form');
const user = document.getElementById('user');
const password = document.getElementById('password');

form.addEventListener('submit', (e) =>{
  e.preventDefault();
  let userValue = user.value;
  let passwordValue = password.value;

  validaDado()

  colocarLocal(userValue, passwordValue);
  alertify.success('Logado com sucesso');
})

function colocarLocal(name, password){
  const user = JSON.stringify({nome: name, senha: password});
  localStorage.setItem('usuario', user);
}

function varrerUsers(name, password){
  localStorage.getItem(name, password)
}


function validaDado(){
  location = cadastrar.html
}