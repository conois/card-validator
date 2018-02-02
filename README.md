# Validador de Tarjetas de Crédito

* **Sprint:** 5


***


## Reto

Crear una librería de JavaScript que permita la validación de una tarjeta de crédito.

## Consideraciones

* El proyecto está compuesto por una serie de archivos entre los cuales se
encuentra el archivo base `index.html`, así como también el `index.js`.

## A tener en cuenta:

- Requerimientos Técnicos:

El proyecto fue realizado con las siguientes dependencias NPM:

+ Dependencias de Desarrollo (uso como desarrollador para las tareas):
  - Mocha ~v.5.0.0
  - Babel-present-env ~v.1.6.1
  - Eslint ~v.4.15.0
  - Eslint-config-google ~v.0.9.1
  - Chai ~v.4.1.2
  - Node ~v.9.4.0
  - Npm ~v.5.6.0
  - Browserify ~v.15.2.0
  - JsDom


+ Dependencias de Producción (funcionalidad):
  - Bootstrap ~v.4.0.0



## Instalacion
1. Clonar repositorio.
2. Agregar atributo name a los input con los siguientes valores:
- Input Número de Tarjeta = agregar atributo *name='cn'*
- Input Fecha de Vencimiento = agregar atributo *name='exp'*
- Input cvv = agregar atributo *name='cvv'*
- Input Nombre Completo = agregar atributo *name='name'*
- Agregar atributo id con los mismos nombres del atributo name. 

`<form class="container" id="myForm">
    <div class="form-group">
      <label for="cn">Número de tarjeta</label>
      <input id="cn" name="cn" />
    </div>
    <div class="form-group">
      <label for="exp">Fecha de vencimiento</label>
      <input id="exp" name="exp" placeholder="mm/aa" />
    </div>
    <div class="form-group">
      <label for="cvv">CVV</label>
      <input id="cvv" name="cvv" />
    </div>
    <div class="form-group">
      <label for="name">Nombre completo</label>
      <input id="name" name="name" />
    </div>
    <input type="submit" value="Pagar" />
  </form>`

Para que el plugin funcione primero debes inicializar tu proyecto en la terminal con el comando

`npm init`

Descargar cardify desde tu terminal con el comando

`npm install tdd-validator`

Para que tu proyecto se vea en el navegador debes instalar Browserify de manera global en tu computadora con el siguiente comando en tu terminal

`npm install -g browserify`

Luego crea en la raíz de tu proyecto las carpetas src y dist con el archivo app.js dentro de cada una, luego ejecuta browserify de la siguiente manera para que tu js original que se encuentra en la carpeta src se guarde modificado en la carpeta dist

`browserify src/app.js -o dist/app.js`

Enlaza el archivo 'Browserificado' en tu .html

`<script src="dist/app.js"></script>`

En tu archivo .js principal pega el siguiente código

`var tddValidator = require('tdd-validator');`
