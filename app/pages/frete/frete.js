import { FreteService } from "./frete-service.js";

const form = document.getElementById('form-cep');

const cep = document.getElementById('cep');

let freteService = new FreteService();

  form.addEventListener('submit',(e) => {
    e.preventDefault();
    let cepValue = cep.value;

    freteService.searchCep(cepValue);
    $('#enderecoComp').addClass('bg-info').fadeIn(1000);;
    console.log();
  })
