// jsdom
const chai = require('chai');
const jsdom = require("jsdom");
const {
   JSDOM
} = jsdom;
let dom = new JSDOM('<!DOCTYPE html><html lang="en">' +
'<head><meta charset="utf-8"><meta name="viewport"' +
'content="width=device-width, initial-scale=1, shrink-' +
'to-fit=no"><meta name="description" content="">' +
'<meta name="author" content=""><title></title>' +
'<!-- Link de Bootstrap --><link rel="stylesheet"' +
'href="node_modules/bootstrap/dist/css/bootstrap.css">' +
'</head><body><h2 class="text-center">Validador de Tarjetas</h2>' +
'<form class="container"><div class="form-group">' +
'<label for="cn">Número de tarjeta</label><input id="cn" name="cn" />' +
'</div><div class="form-group"><label for="exp">Fecha de vencimiento</label>' +
'<input id="exp" name="exp" placeholder="mm/aa" /></div>' +
'<div class="form-group"><label for="cvv">CVV</label>' +
'<input id="cvv" name="cvv" /></div><div class="form-group">' +
'<label for="name">Nombre completo</label><input id="name" name="name"/>' +
'</div><input type="submit" value="Pagar" /></form>' +
'<!-- Link js --><script src="lib/main.js"></script></body></html>');

const {
   window
} = dom;
global.document = dom;
global.window = window;
global.navigator = {
   userAgent: 'node.js',
};

const isValidCard = require('../src/card-validator');
const assert= require('chai').assert; 

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