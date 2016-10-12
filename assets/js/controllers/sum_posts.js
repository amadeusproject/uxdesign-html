$(document).ready(function(){
    $("#count1").blur(function(){
var soma =parseInt($("#count1").val());
var soma2= parseInt($("#count2").val());

if (Number.isNaN(soma2)){
    // zerando caso seja NaN{
soma2 = 0;
 var soma3= soma;
$("#countTotal").val(soma3);

}else{

 var soma3= soma+soma2;
$("#countTotal").val(soma3);

}

    });

    $("#count2").blur(function(){

     var sum = parseInt($("#count1").val());
     var sum2 = parseInt($("#count2").val());
     if(Number.isNaN(sum)){
      sum = 0;
     
      var sum3 = sum2;
      ($("#countTotal").val(sum3));


     }else{
var sum3 = sum+sum2;

($("#countTotal").val(sum3));

}
    });



});





   

