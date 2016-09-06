/* 
 * Cada formulario se debe asignar de esta manera.
 * Como ejemplo se asigna el formulario principal
 * Debajo de la declaracion del modulo formularios, se ejecuta la primer 
 * insercion.
 */
var formularios = (function(){
    
    var _ventanas = [];
    
    var _fnInsertar = function(_objeto){
        var _resultado = {};
        if(_objeto.nombre > ''){
            _resultado = _objeto;
            _ventanas.push(_objeto);
        };
        return _resultado;
    };
    
    var _fnBorrar = function(_nombre){
        return _ventanas.splice(_fnBuscar(_nombre), 1);
    };
    
    var _fnBuscar = function(_nombre){
        var _i;
        var _resultado = {};
        var _cantidad = _ventanas.length;
        for(_i=0; _i< _cantidad; _i++){
            if(_ventanas[_i].nombre === _nombre){
                _resultado = _ventanas[_i];
                break;
            }
        }
        return _resultado;
    };
    
    return{
        Insertar: _fnInsertar,
        Borrar: _fnBorrar,
        Buscar: _fnBuscar,
        Ventanas: _ventanas
        
    };
})();

formularios.Insertar({
    nombre: 'MenuPrincipal', 
    referencia: 'vistas/frmMenuPrincipal.html',
    modal: false});

/* Codigo de Insercion de formularios, solo los Formularios insertados en esta 
 * lista se podran llamar desde la aplicacion.
 * formularios.Insertar({
    nombre: 'MenuPrincipal', 
    referencia: 'vistas/frmMenuPrincipal.html',
    modal: false});
 */

var aplicacion = (function(){
    
    /* Propiedad que contiene la pantalla principal */
    var _pantalla = null;
    
    var fnCargarFormulario = function(_formulario){
        var _ventana = formularios.Buscar(_formulario);
        $.ajax({
            url: _ventana.referencia,
            cache: false,
            success: function(resultado){
                _pantalla.empty();
                _pantalla.append(jQuery(resultado));
            }
        });
    };
    
    var fnIniciar = function(contenedor){
        
        _pantalla = contenedor;
        fnCargarFormulario("MenuPrincipal")
        console.log("Iniciando Aplicacion...");

    };
    
    return {
        iniciar: fnIniciar,
        pantalla: _pantalla
    };
    
})();

