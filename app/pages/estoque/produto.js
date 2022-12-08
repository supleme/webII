

// class Produto{
//   constructor(){
//     this.id = 1
//     this.arrayProdutos = [];
//     this.editId = null;
//   }

//   salvar(){
//     let produto = this.lerDados();

//     if(this.validaCampos(produto)){
//       if(this.editId == null){
//       this.adicionar(produto);
//       } else {
//         this.atualizar(this.editId, produto);
//       }
//     };
    
//     this.listaTabela();
//     this.cancelar();
//   }

//   listaTabela(){
//     let tdbody = document.getElementById('tdbody');
//     tdbody.innerText = '';

//     for(let i = 0; i < this.arrayProdutos.length; i++){
//       let tr = tdbody.insertRow();

//       let td_id = tr.insertCell();
//       let td_produto = tr.insertCell();
//       let td_valor = tr.insertCell();
//       let td_acoes = tr.insertCell();

//       td_id.innerText = this.arrayProdutos[i].id;
//       td_produto.innerText = this.arrayProdutos[i].nomeProduto;
//       td_valor.innerText = this.arrayProdutos[i].preco;
    
//       td_id.classList.add('center');
      
//       let imgEdit = document.createElement('img');
//       imgEdit.src = '/assets/resources/images/editar.png';
//       imgEdit.setAttribute("onclick", `produto.preparaEditacao(${JSON.stringify(this.arrayProdutos[i])})`)

//       td_acoes.appendChild(imgEdit);

//       let imgDelete = document.createElement('img');
//       imgDelete.src = '/assets/resources/images/deletar-lixeira.png';
//       imgDelete.setAttribute("onclick",`produto.deletar(${this.arrayProdutos[i].id})`)

//       td_acoes.appendChild(imgDelete)

//     }
//   }

//   adicionar(produto){
//     this.arrayProdutos.push(produto)
//     this.id++;
//   }

//   atualizar(id, produto){
//     for(let i = 0; i < this.arrayProdutos.length; i++){
//       if(this.arrayProdutos[i].id == id){
//         this.arrayProdutos[i].nomeProduto = produto.nomeProduto;
//         this.arrayProdutos[i].preco = produto.preco;
//       }
//     }
//     document.getElementById('btnSalvar').innerText = 'Salvar'
//     this.listaTabela();
//   }

//   preparaEditacao(dados){
//     this.editId = dados.id;

//     document.getElementById('produtoAdd').value = dados.nomeProduto;
//     document.getElementById('precoAdd').value = dados.preco;

//     document.getElementById('btnSalvar').innerText = 'Atualizar'
//   }

//   lerDados(){
//     let produto = {}

//     produto.id = this.id;
//     produto.nomeProduto = document.getElementById('produtoAdd').value;
//     produto.preco = document.getElementById('precoAdd').value;
    
//     return produto;
//   }

//   validaCampos(produto){
//     let msg = '';

//     if(produto.nomeProduto == ''){
//       msg += '- Informe o nome do Produto \n'
//     }

//     if(produto.preco == ''){
//       msg += '- Informe o preço do Produto \n'
//     }

//     if(msg != ''){
//       alert(msg);
//       return false;
//     }
//     return true;
//   }


//   cancelar(){
//     document.getElementById('produtoAdd').value = '';
//     document.getElementById('precoAdd').value = '';

//     document.getElementById('btnSalvar').innerText = 'Salvar'
//     this.editId = null;
//   }

//   deletar(id){
//     if(confirm('Deseja realmente deletar o produto do ID ' + id)){
//       let tdbody = document.getElementById('tdbody');

//       for(let i = 0; i < this.arrayProdutos.length; i++){
//         if(this.arrayProdutos[i].id == id){
//           this.arrayProdutos.splice(i, 1);
//           tdbody.deleteRow(i);
//         }
//       }  
//     }
//   }
  
  
// }



// let produto = new Produto();





// pneu = JSON.stringify({quantidadePneu: pneuTeste});
// localStorage.setItem('pneu', pneu);

// lona = JSON.stringify({quantidadeLona: 0});
// localStorage.setItem('lona', lona);

// selectElement = document.querySelector('#idProduto');
//     output = selectElement.value;

//     if(output == 'lona'){
//       lonaInc = JSON.parse(localStorage.getItem('lona'))
//       lonaInc.quantidadeLona++;
//       localStorage.lona = JSON.stringify(lonaInc)
//     }if(output == 'pneu'){
//       pneuInc = JSON.parse(localStorage.getItem('pneu'));
//     pneuInc.quantidadePneu++;
//     localStorage.pneu = JSON.stringify(pneuInc)
//     }
  
  let lonaQtc = 0;

  let pneusQtc = 0;

  let arr = [];

  function addItem(){
    
    if(localStorage.pneu || localStorage.lona){
      pneusQtc = JSON.parse(localStorage.getItem('pneu'))
      lonaQtc = JSON.parse(localStorage.getItem('lona'))
      
      
    }

    selectElement = document.querySelector('#idProduto');
    output = selectElement.value;
    if(output == 'pneu'){
      pneusQtc++;
      localStorage.pneu = JSON.stringify(pneusQtc)
    } else if(output == 'lona'){
      lonaQtc++;
      localStorage.lona = JSON.stringify(lonaQtc);
    }

    if (localStorage.itemEstoque){             
       arr = JSON.parse(localStorage.getItem('itemEstoque')); 
    }
     
    let novoItem = document.getElementById("v").value;
    arr.push(novoItem);
    document.getElementById("v").value = "";
    localStorage.itemEstoque = JSON.stringify(arr);
     
    showItems()
  }

  function showItems(){
     let resultDIV = document.getElementById('d');
     resultDIV.innerHTML = "";
     if (localStorage.itemEstoque){             
        arr = JSON.parse(localStorage.getItem('itemEstoque')); 
     }
     
     for(var i in arr){
        let p = document.createElement("p");
        p.innerHTML = arr[i];
        resultDIV.append(p);
     }
  }

  function clearItems(){
    arr = [];
    localStorage.itemEstoque = JSON.stringify(arr);   
    lonaQtc = 0;
    localStorage.lona = JSON.stringify(lonaQtc)
    pneusQtc = 0;
    localStorage.pneu = JSON.stringify(pneusQtc);
    showItems()
  }