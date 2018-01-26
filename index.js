//Eventos  

//detonador evento en CVV 
var inputcvv= document.getElementsByName('cvv'); 
inputcvv[0].addEventListener('keyup', isValidCVV);

//detonador evento de tarjeta 
var inputcn= document.getElementsByName('cn') 
inputcn[0].addEventListener('keyup', validInputTarget);


//funciones  
function isValidCard(numberCard){
  if (numberCard.length === 0) {
      alert('Ingrese un número');
    } else {
      var arr = [];
      for (var i = 0; i < numberCard.length; i++) {
        arr.push(numberCard[i]);
      } for (var elem = 0; elem < arr.length; elem++) {
        var item = arr.pop();
        arr.splice(elem, 0, item);
        var num = [];
      } for (var x = 0; x < arr.length; x++) {
        num.push(parseInt(arr[x]));
        var pairPosition = [];
        var impairPosition = 0;
        var result;
      // Separar los números en posiciones pares
      } for (var p = 0; p < num.length; p ++) {
        if ([ p + 1] % 2 === 0) {
          pairPosition.push((num[p]) * 2);
        } else if ([p + 1] % 2 !== 0)
          impairPosition += (num[p]);
        var pairPositionLess = 0;
        var pairPositionHigth = [];
      } for (var s = 0; s < pairPosition.length; s++) {
        if (pairPosition[s] < 10) {
          pairPositionLess += (pairPosition[s]);
        } else {
          pairPositionHigth.push(pairPosition[s]);
          var pairString = pairPositionHigth.join('');
          var sum = 0;
          for (var y = 0; y < pairString.length; y++) {
            sum += parseInt(pairString[y]);
          }
        }
      }
    }result = sum + impairPosition + pairPositionLess;
    if (result % 10 === 0) {
      return true; 
      alert('Tarjeta Válida');
    } else {
      return false; 
      alert('Tarjeta Inválida');
    }
}

function isValidCVV(){ 
  let cvv= document.getElementById('cvv'); 
  let key= event.keyCode; 
  if(key>=48 && key<=57){
    if(cvv.value.length>3){
    cvv.value= cvv.value.substr(0,3); 

    }
  }else{
    cvv.value= cvv.value.substr(0,0); 
  }  

}; 

function validInputTarget(){
  let cn= document.getElementById('cn'); 
  let key= event.keyCode; 
  if(key>=48 && key<=57){
    if(cn.value.length>18){
    cn.value= cn.value.substr(0,18);
    }
  } else{
    cn.value= cn.value.substr(0,-1); 
  }  
}; 


function isValidName(){
var str = document.getElementById('name').value;
var patt = new RegExp("[0-9]");
var res = patt.test(str);
if (res === false){
  alert('nombre válido')
}else {
  alert('nombre inválido')
}
}

function isValidDate(){
  if ( (month > 13 || month < 1) && (year > 2017 || year < 2007)){
    alert('Ingrese Mes y Año Válido')
  } else {
    return alert('fecha valida');
  }isValidCVV();
}

//Acá se agregan las clases segun si pasaron o no la validacion completa 
function isValidForm(){
  let cvv= document.getElementsByName('cvv')[0]; 
  if(cvv.value.length==3){
    //agregar clase .sucess
  }else {
    //agregar clase .error 
  }
}

module.exports = isValidCard;
