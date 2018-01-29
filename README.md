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

+ Dependencias de Desarrollo:
  - Mocha ~v.5.0.0
  - Babel-present-env ~v.1.6.1
  - Eslint ~v.4.15.0
  - Eslint-config-google ~v.0.9.1

+ Dependencias de Producción:
  - Bootstrap ~v.4.0.0
  - Browserify ~v.15.2.0
  - Chai ~v.4.1.2

* Clonar repositorio.
* Agregar atributo name a los input con los siguientes parámetros:
- cn (Card Number): El número de la tarjeta de crédito
- exp (Expiry Date): Fecha de expiración
- cvv (Card Verification Value): Código de validación de 3 dígitos
- name: Nombre completo como aparece en la tarjeta
* Formato de fecha debe ser: mm/aa (solicitar en placeholder).
