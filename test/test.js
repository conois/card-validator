
const assert= require('chai').assert; 
const isValidCard= require('../index.js'); 

//primer test para funcion de validacion de numero de tarjeta de credito 
describe('isValidCard()', ()=>{
	it('valida tarjeta', ()=>{
		assert.equal(isValidCard('4083952015263'), true)
		assert.equal(isValidCard('4220554436511572'), true)
	}); 

	it('no valida tarjeta', ()=>{
		assert.equal(isValidCard('11111111111111'), false)
		assert.equal(isValidCard('45678234502842'), false)
	})
}); 


// test que verifica cvv correcto 

describe('isValidCVV', ()=>{
	it('isValidCVV debe recibir 3 numeros de digitos', ()=>{
			assert.equal(ingreso1.length , 3); 
	})
}); 



