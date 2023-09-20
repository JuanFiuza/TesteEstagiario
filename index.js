
function validar() {
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var telefone = document.getElementById("telefone");
    const forms = document.getElementById("forms")
    const sucess = document.getElementById("sucessRegister")
    const data = {
      name: nome.value,
      email: email.value,
      phone: telefone.value
    }
    
    if (nome.value == "" || nome.value == null || nome.value.length < 3) {
      alert("Nome não informado");
      nome.focus();
      return false;
      // verifica se o nome está vazio ou nulo e se tem mais de 3 letras
    }
    if (
      email.value.indexOf("@") == -1 ||
      email.value.indexOf(".") == -1 ||
      email.value == "" ||
      email.value == null
      // verifica se o email está vazio ou nulo e se tem @ e . para confirmar como e-mail
    ) {
      alert("Por favor, indique um e-mail válido.");
      email.focus();
      return false;
    }
    if (
      telefone.value == "" ||
      telefone.value == null ||
      telefone.value.length < 15
      // verifica se o telefone está vazio ou nulo e se tem o máximo de 15 caracteres que é o máximo do input
    ) {
      alert("Por favor insira um número de telefone válido");
      telefone.focus();
      return false;
    } else {
      console.log(data);
      forms.classList.add("displayNone")
      sucess.classList.remove("displayNone")
      return true;
    }
  }
  
  function mascara(telefone) {
    if (telefone.value.length == 0) telefone.value = "(" + telefone.value;
    //quando começamos a digitar, o script irá inserir um parênteses no começo do campo.
    if (telefone.value.length == 3) telefone.value = telefone.value + ") ";
    //quando o campo já tiver 3 caracteres (um parênteses e 2 números) o script irá inserir mais um parênteses, fechando assim o código de área.
  
    if (telefone.value.length == 10) telefone.value = telefone.value + "-";
    //quando o campo já tiver 10 caracteres, o script irá inserir um tracinho, para melhor visualização do telefone.
  }
  
  function finish() {
    const btn_enviar = document.getElementById("btn_enviar");
  }
  