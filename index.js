//Crear función para validar tarjeta
function isValidCard (numbers){
  do{
    //solicitar numero de tarjeta por teclado a usuario y guardarlo en variable
    var creditCard = prompt("favor ingrese número de tarjeta");
    //variable para validar que lo ingresado sean sólo números
    var validateNumbers= /^\d*$/;
    //variable que almacene el string del prompt convertido en array
    var strToArr= [];
    //variable que almacena el array inverso para aplicar el algoritmo
    var arrInverse= strToArr.reverse();
    //variable para almacenar los pares
    var pairToSum=[];
    //variable para almacenar impares
    var impairToSum=[];
    //variable para sumar pares e impares
    var finalSum=0;
    //condicionar, si el prompt NO está vacío y ES número, entonces se ejecuta
    if (creditCard!="" && validateNumbers.test(creditCard)==true) {
      //recorrer la variable que aloja lo ingresado en el prompt de uno en uno.
      for(var i=0; i<creditCard.length; i++){
        //ingresar uno a uno los carácteres del string del prompt en un array, pasándolos a tipo integer
        strToArr.push(parseInt(creditCard[i]));

        //crear la variable de contador para los pares comenzando de 1, por que se multiplicará
      } var contForPair= 1;
        //bucle que recorre el array volteado, de uno en uno
        for (var x=0; x<arrInverse.length;x++){
          //si el contador es par se agrega el número en el array de pares y lo multiplica *2
        if(contForPair%2==0){
          pairToSum.push(arrInverse[x]*2);
        }else{
          //si no se cumple condición anterior (es impar), agrega el número en array de impares
          impairToSum.push(arrInverse[x])
        }
        contForPair++;
      }

      //para sumar los resultados con dos cifras, juntar todo en un string y luego separarlos un espacio.

      pairTogether= pairToSum.join("").split("");
      //variable que contiene pares e impares
      var pairAndImpair= pairTogether.concat(impairToSum);

      //for recorrerá arreglo final de números alojados en posiciones impares + los de posiciones pares*2 y cortados en caso de tener más de un dígito.

      for(y=0; y<pairAndImpair.length;y++){
        //ingresar a variable y sumar cada dígito
        finalSum+= pairAndImpair[y];
        //si el residio de la suma/10 es 0 entonces indicar que la tarjeta es válida
      } if (finalSum%10===0){
        return alert("la tarjeta ingresada es válida");
      } else {
        //sino, indicar que no lo es
        return alert("la tarjeta ingresada NO es válida")
      }     

    } //si no se cumplen parámetros ingresados en primer if, indicar que lo haga, devolviendolo al primer prompt
     else { alert("favor ingrese parámetros válidos")}

  } //si el prompt está vacío y lo ingresado no es número vuelve a solicitar datos
  while( creditCard=="" || validateNumbers.test(creditCard)==false);

}

isValidCard();