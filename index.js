// Eventos
// Funciones
function isValidCard(numberCard) {
  let numberCard = document.getElementsByName('cn')[0].value;
  if (numberCard.length === 0) {
    alert('Ingrese un número');
  } else {
    let arr = [];
    for (let i = 0; i < numberCard.length; i++) {
      arr.push(numberCard[i]);
    } for (let elem = 0; elem < arr.length; elem++) {
      let item = arr.pop();
      arr.splice(elem, 0, item);
      let num = [];
    } for (let x = 0; x < arr.length; x++) {
      num.push(parseInt(arr[x]));
      let pairPosition = [];
      let impairPosition = 0;
      let result;
    // Separar los números en posiciones pares
    } for (let p = 0; p < num.length; p ++) {
      if ([ p + 1] % 2 === 0) {
        pairPosition.push((num[p]) * 2);
      } else if ([p + 1] % 2 !== 0)
        impairPosition += (num[p]);
      let pairPositionLess = 0;
      let pairPositionHigth = [];
    } for (let s = 0; s < pairPosition.length; s++) {
      if (pairPosition[s] < 10) {
        pairPositionLess += (pairPosition[s]);
      } else {
        pairPositionHigth.push(pairPosition[s]);
        let pairString = pairPositionHigth.join('');
        let sum = 0;
        for (let y = 0; y < pairString.length; y++) {
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

function isValidCVV() {
  let cvv = document.getElementById('cvv');
  let key = event.keyCode;
  if (key >= 48 && key <= 57) {
    if (cvv.value.length > 3) {
      cvv.value = cvv.value.substr(0, 3);
    }
  } else {
    cvv.value = cvv.value.substr(0, 0);
  }
};

// detonador evento en CVV
const inputcvv = document.getElementsByName('cvv');
inputcvv[0].addEventListener('keyup', isValidCVV);

function validInputTarget() {
  let cn = document.getElementById('cn');
  let key = event.keyCode;
  if (key >= 48 && key <= 57) {
    if (cn.value.length > 18) {
      cn.value = cn.value.substr(0, 18);
    }
  } else {
    cn.value = cn.value.substr(0, -1);
  }  
}; 

// detonador evento de tarjeta
const inputcn = document.getElementsByName('cn');
inputcn[0].addEventListener('keyup', validInputTarget);


isValidName => {
  let str = document.getElementById('name').value;
  let patt = new RegExp('[0-9]');
  let res = patt.test(str);
  if (res === false) {
    alert('nombre válido');
  } else {
    alert('nombre inválido');
  }
};

isValidDate => {
  if ((month > 13 || month < 1) && (year > 2027 || year < 2017)) {
    alert('Ingrese Mes y Año Válido');
  } else {
    return alert('fecha valida');
  }isValidCVV();
};


// Acá se agregan las clases segun si pasaron o no la validacion completa 
function isValidForm (event) {
  event.preventDefault();
  console.log('hola');
  isValidCard();
};
/*
// Test!!
module.exports = isValidCard;
*/