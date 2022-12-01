export class FreteService{

  searchCep(cep){
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(Response => {
      Response.json().then(data => {
        $('.list-group > li').css("background-color", '#74cd74')
        $('#bairro').text(data.bairro);
        $('#ddd').text(data.ddd)
        $('#ibge').text(data.ibge);
        $('#localidade').text(data.localidade);
        $('#logradouro').text(data.logradouro);
        $('#uf').text(data.uf);
        $('#uf + li').text(data.siafi);
        $('#enderecoComp').text(`${data.logradouro}, ${data.localidade}`).addClass('text-center').

        data})
    }
    )
    .catch(e => console.log('Deu Erro: ' + e, message))
  }
}