function MascaraCPF(cpf){
   if(mascaraInteiro(cpf)==false){     event.returnValue = false;  }
    return formataCampo(cpf, '000.000.000-00', event);
}
function ValidaData(data){
  exp = /\d{2}\/\d{2}\/\d{4}/ if(!exp.test(data.value)){
     data.value = "";        alert('Data Invalida!');        data.select();
    }
}