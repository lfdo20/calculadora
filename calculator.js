$('document').ready(function(){

var operator=0; var fvalue=0; var nvalue=0; var tempvalue =0;
var result=0; var decimal =1;

$('.key').hover(function(){
  $(this).css({ 'backgroundColor' : '#212141'});
});
$('.key').on('mouseleave',function(){
  $(this).css({ 'backgroundColor' : '#17172E'});
});

function calc(){
  switch (operator) {
      case '+':
        result = parseFloat((fvalue + nvalue).toFixed(1));
        if (result > 99999){  $('.numero').html('erro');}
        else{ $('.numero').html(result);}
        console.log(result);
        break;
      case '-':
        result = parseFloat((fvalue - nvalue).toFixed(1));
        if (result > 99999){  $('.numero').html('erro');}
        else{ $('.numero').html(result);}
        console.log(result);
        break;
      case '/':
        result = parseFloat((fvalue / nvalue).toFixed(1));
        if (result > 99999){  $('.numero').html('erro');}
        else{ $('.numero').html(result);}
        console.log(result);
        break;
      case '*':
        result = parseFloat((fvalue * nvalue).toFixed(1));
        if (result > 99999){  $('.numero').html('erro');}
        else{ $('.numero').html(result);}
        console.log(result);
        break;
  }
}

  $('.key').click(function(){

    if($(this).data("value") !== "=" && $(this).data("value") !== "."){
      tempvalue = $(this).data("value");
    }
        // teste para detectar o que foi pressionado
      if ( $.isNumeric(tempvalue) === false && tempvalue !== "reset" &&  $(this).data("value") !==".") {
          operator = tempvalue;
          console.log(operator);
          $('.numero').html(operator);
          return;
      }//não é reset nem número
      else if (tempvalue === "reset"){
        result = 0; tempvalue =0; nvalue =0; fvalue =0; operator=0; decimal =1;
        console.log(result, tempvalue, nvalue, fvalue, operator);
        $('.numero').html("reset");
      }// é reset
      else if ($(this).data("value") === "."){
        decimal = 0.1;
        tempvalue = 0;
        console.log(decimal, tempvalue);
        return;

      }
      else {
        // teste para verificar se já existe um cálculo ou valor inicial
        if (result === 0 && fvalue === 0 || decimal === 0.1){
          fvalue = parseFloat(((tempvalue*decimal)+fvalue).toFixed(2));
          decimal =1;
          console.log(fvalue);
          $('.numero').html(fvalue);
          return;
        }// não existe calculo anterior e é primeiro valor ou decimal
        else if (result === 0 && fvalue !== 0 && operator === 0 && decimal !==0.1){
          fvalue = (fvalue*10) + parseFloat((tempvalue*decimal).toFixed(2));
          $('.numero').html(fvalue);
          console.log(fvalue, 'eita');
        }// já existe um primeiro número
        else if(result === 0 && fvalue !== 0 && nvalue === 0 && operator !== 0 || decimal ===0.1 ){
          nvalue = parseFloat((tempvalue*decimal+nvalue).toFixed(2));
          decimal=1;
          $('.numero').html(nvalue);
          console.log(nvalue);
        }// não existe calculo anterior e é o segundo valor ou decimal
        else if (result === 0 && fvalue !== 0 && nvalue !== 0 && operator !== 0 && decimal !==0.1){
          nvalue = (nvalue*10) + parseFloat((tempvalue*decimal).toFixed(2));
          $('.numero').html(nvalue);
          console.log(fvalue, 'eita');
        }// já existe um primeiro número
        else if (result !== 0 && nvalue === 0){
          fvalue = result;
          nvalue = parseFloat((tempvalue*decimal).toFixed(2));
          $('.numero').html(nvalue);
          console.log(fvalue,nvalue);
        }// existe calculo anterior
        else if (result !== 0 && nvalue !== 0 && decimal === 1){
          fvalue = result;
          nvalue = (nvalue*10) +parseFloat((tempvalue*decimal).toFixed(2));
          $('.numero').html(nvalue);
          console.log(fvalue,nvalue);
        }
      }
});

$('.result').click(function(){
  calc();
  tempvalue =0; nvalue =0; fvalue =0; operator=0; decimal =1;
  console.log("r:"+result, "tenp:"+tempvalue, "nv:"+nvalue, "fv:"+fvalue, "op"+operator);
});
});
