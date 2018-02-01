const chai = require('chai');
const CARD = require('../src/card');

describe('Validación de Tarjetas', ()=>{
  it('Tarjeta Válida', ()=>{
    chai.assert.equal(true, CARD.isValidCard('4083952015263'))
  });

  it('Tarjeta Inválida', ()=>{
    chai.assert.equal(false, CARD.isValidCard('11111111111111'))
  })

  it('CVV Válido', ()=>{
    chai.assert.equal(true, CARD.isValidCVV('123'))
  })

  it('Nombre Válido', ()=>{
    chai.assert.equal(false, CARD.isValidName('a'))
  })

});



