/*
 * En estemodulo se incliye toda la funcionalidad, Modelo, de el formulario 
 * correspondiente. En el ejemplo se incluyen 2 alert, uno al principio y
 * otro al final, que se pueden usar para confirmar la carga del modulo y pueden 
 * ser eliminados en la version final.
 */
console.log("Cargando 'modNombre.js'");

/* Se declaran los datasoure, o pueden ser cargados desde otro js (desde el formulario) */
var dsNombre = new kendo.data.DataSource({
});

/* Observables */
var modeloNombre = kendo.observable({
});

/* Binding al/los contenedor/es que sea necesario. */
kendo.bind($("#contenedorNombre"), modeloNombre);

console.log("Terminado 'modNombre.js'");