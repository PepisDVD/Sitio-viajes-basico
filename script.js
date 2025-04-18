import { barcelona, roma, paris, londres} from './ciudades.js' //Está al mismo nivel de ruta

//Obtener los elemnos del DOM (documento de HTML)
let enlaces = document.querySelectorAll('a') //Como no tienen ID, podemos consultar por el tipo 
let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')


//Agregar un evento CLICK a cada enlace
enlaces.forEach(function(enlace) {
    //Agregamos un escuchador -> Cada que se haga click sobre alguno de los enlaces tipo 'a' en enlaces.
    enlace.addEventListener('click', function(){
        //Remover activo de cualquier
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active');            
        });

        //Agregar 'active' al que corresponda
        this.classList.add('active')
        //Traer información del objeto correspondiente a la elección
        let contenido = obtenerContenido(this.textContent)
        //Mostrar el contenido en el DOM       
       tituloElemento.innerHTML = contenido.titulo;
       subtituloElemento.innerHTML = contenido.subtitulo;
       parrafoElemento.innerHTML = contenido.parrafo;

    }) 

});

//Función para traer la información correcta desde ciudades.js
function obtenerContenido(enlace){
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };
    return contenido[enlace];
}
