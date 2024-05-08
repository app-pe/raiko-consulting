var arreglo = ["index.html","about.html"];

function validarUrl(url){    
    var paginaActual=url;
    var nombrePaginaActual = "";
   /*  var paginaActualx=window.location.pathname;    
    console.log("hola header"+paginaActualx); */
    var subcadena2 ="";
    console.log(url);
        for(var i=0;i<arreglo.length;i++){
            subcadena2 = arreglo[i];
            console.log(subcadena2);
            var pos = parseInt(paginaActual.indexOf(subcadena2));
            nombrePaginaActual = paginaActual.substring(pos);            
            console.log(pos);
            //console.log(nombrePaginaActual);
            if(nombrePaginaActual===subcadena2){
                console.log("holaaa-");break;
            }
        }
        console.log("----");
        console.log(nombrePaginaActual);
       
        
    
  
    /* let nombrePaginaActual = paginaActual.substring(paginaActual.indexOf(subcadena));
    console.log(nombrePaginaActual); */
    //console.log("nombrePaginaActual-");
    //console.log(nombrePaginaActual);
}


/* ejemplo validar url
var paginaActual="/tv40dias/index.html";
console.log(paginaActual);
var subcadena="index.html";
console.log(paginaActual.indexOf(subcadena));
console.log(paginaActual.substring(paginaActual.indexOf(subcadena))); 
let nombrePaginaActual = paginaActual.substring(paginaActual.indexOf(subcadena));
console.log(nombrePaginaActual);*/

let header =
`
<div class="container-fluid page-header d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5 mb-5">
<h1 class="display-4 text-white mb-3 mt-0 mt-lg-5">About</h1>
<div class="d-inline-flex text-white">
    <p class="m-0"><a class="text-white" href="">Inicio</a></p>
    <p class="m-0 px-2">/</p>
    <p class="m-0">About</p>
</div>
</div>`;
export {validarUrl};