$('document').ready(function(){

var operator=0; var fvalue=0; var nvalue=0; var tempvalue =0;
var result=0;

function calc(){
  console.log(fvalue,operator,nvalue);

  switch (operator) {
      case '+':
        result = fvalue + nvalue;
        $('.numero').html(result);
        console.log(result);
        break;
      case '-':
        result = fvalue - nvalue;
        $('.numero').html(result);
        console.log(result);
        break;
      case '/':
        result = fvalue / nvalue;
        $('.numero').html(result);
        console.log(result);
        break;
      case '*':
        result = fvalue * nvalue;
        $('.numero').html(result);
        console.log(result);
        break;
}


}



  $('.key').click(function(){

    if($(this).data("value") !== "="){
      tempvalue = $(this).data("value");
    }
        // teste para detectar o que foi pressionado
      if ( $.isNumeric(tempvalue) === false && tempvalue !== "reset") {
          operator = tempvalue;
          console.log(operator);
          $('.numero').html(operator);
          return;
      }//não é reset nem número
      else if (tempvalue === "reset"){
        result = 0;
        tempvalue =0;
        nvalue =0;
        fvalue =0;
        operator=0;
        console.log(result, tempvalue, nvalue, fvalue, operator);
        $('.numero').html("reset");
      }// é reset
      else {
        // teste para verificar se já existe um cálculo ou valor inicial
        if (result === 0 && fvalue === 0){
          fvalue = tempvalue;
          console.log(fvalue);
          $('.numero').html(fvalue);
          return;
        }// não existe calculo anterior e é primeiro valor
        else if(result === 0 && fvalue !== 0 && operator !== 0 ){
          nvalue = tempvalue;
          $('.numero').html(nvalue);
          console.log(nvalue);
        }// não existe calculo anterior e é o segundo valor
        else if (result === 0 && fvalue !== 0 && operator === 0){
          fvalue = (fvalue*10) + tempvalue;
          $('.numero').html(fvalue);
          console.log(fvalue, 'eita');
        }
        else{
          fvalue = result;
          nvalue = tempvalue;
          $('.numero').html(nvalue);
          console.log(fvalue,nvalue);

        }// existe calculo anterior
      }






});

$('.result').click(function(){
  calc();



});

});
