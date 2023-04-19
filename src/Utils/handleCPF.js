export default function handleCpf(event){
    var campo = event.target;
    var valor = campo.value.replace(/\D/g, ''); 
    valor = valor.replace(/(\d{3})(\d)/, '$1.$2'); 
    valor = valor.replace(/(\d{3})(\d)/, '$1.$2'); 
    valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); 
    campo.value = valor; 

    if(!validarCPF(valor)){
        campo.classList.add('error');
        campo.classList.remove('valid');

    }
    else{
        campo.classList.remove('error');
        campo.classList.add('valid');
    }
}

function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g,''); 
    if (cpf === '') return false; 
    var soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    var resto = 11 - (soma % 11);
    if (resto === 10 || resto === 11) {
      resto = 0;
    }
    if (resto !== parseInt(cpf.charAt(9))) {
      return false;
    }
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    if (resto === 10 || resto === 11) {
      resto = 0;
    }
    if (resto !== parseInt(cpf.charAt(10))) {
      return false;
    }
  
    return true;
  }