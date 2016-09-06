console.log("Cargando 'modMenuPrincipal.js'");
/*
var dsMenuPrincipal = new kendo.data.DataSource({
    data: [{caption: "Salir"}],
    schema : {
        data: "caption"
    }
});

dsMenuPrincipal.read();

dsMenuPrincipal.fetch(function(){
  var data = this.data();
  console.log(data.length);
});
*/
var modeloMenuPrincipal = kendo.observable({
    itemsMenu: [{caption: "Salir"}],
    onClick: function(){
        alert("Click!");
    }
});

kendo.bind($("#contenedorMenuPrincipal"), modeloMenuPrincipal);

var fnClick = function fnClick(){
    alert("click");
};

console.log("Terminado 'modMenuPrincipal.js'");
