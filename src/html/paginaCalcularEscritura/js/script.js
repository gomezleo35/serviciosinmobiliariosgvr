let valorPropiedadDolares = 0;
let valorPropiedadPesos = 0;
let viviendaUnica;
let iti;
let primeraEscritura;
let cotizacionDolar = 0;
let resultadoIti = 0;
let resultadoSellosVendedor = 0;
let resultadoSellosComprador = 0;
let resultadoGastosEscrituracionVendedor = 0;
let resultadoHonorarioEscribano = 0;
let resultadoGastosEscrituracionComprador = 0;
let totalPesosComprador = 0;
let totalPesosVendedor = 0;
let totalDolaresVendedor = 0;
let totalDolaresComprador = 0;
let boton = document.getElementById('calcular');

//evento del boton, captacion del los datos del form
boton.addEventListener('click', function(){
    console.log('click en boton');
    valorPropiedadDolares = parseFloat(document.getElementById('valorPropiedad').value);  
    viviendaUnica =  document.getElementById('viviendaUnica').value;
    iti =  document.getElementById('iti').value;
    primeraEscritura =  document.getElementById('primeraEscritura').value;
    cotizacionDolar = parseFloat(document.getElementById('cotizacionDolar').value);
    if((valorPropiedadDolares > 0 && cotizacionDolar > 0)||(valorPropiedadDolares > 0 && isNaN(cotizacionDolar))){
        calcularEscritura();
    } else if(valorPropiedadDolares <= 0 && cotizacionDolar > 0 ){
        alert("ingrese un valor de la propiedad mayor a cero.");
    } else if(valorPropiedadDolares > 0 && cotizacionDolar <= 0){
        alert("ingrese una cotización de dolar mayor a cero.");
    } else if (valorPropiedadDolares <= 0 && cotizacionDolar <= 0){
        alert("ingrese valores mayores a cero.")
    } else if (isNaN(valorPropiedadDolares) && cotizacionDolar > 0){
        alert('no ha ingresado el valor de la propiedad.');
    } else if (isNaN(valorPropiedadDolares) && isNaN(cotizacionDolar)){
        alert('no ha ingresa ningún valor.');
    } else if (isNaN(valorPropiedadDolares) && cotizacionDolar <= 0){
        alert('ingrese el valor de la propiedad.');
        alert('ingrese una cotización de dolar mayor a cero.');
    } else if (valorPropiedadDolares < 0 && isNaN(cotizacionDolar)){
        alert('ingrese un valor de la propiedad mayor a cero. ');
        alert('Puede o no ingresar la cotización del dolar si lo desea.');
    }
    
    console.log(valorPropiedadDolares);
})

//funcion calcular escritura

function calcularEscritura() {
    
    if (viviendaUnica=='false' && iti == 'false' && primeraEscritura=='false') {
        resultadoIti= valorPropiedadDolares * 1.5 / 100;
        document.getElementById('resultadoIti').innerHTML = 'U$S ' + resultadoIti.toFixed(2);
        resultadoSellosVendedor =  valorPropiedadDolares * 1.8 / 100;
        document.getElementById('resultadoSellosVendedor').innerHTML = 'U$S ' + resultadoSellosVendedor.toFixed(2);
        resultadoSellosComprador = resultadoSellosVendedor;
        document.getElementById('resultadoSellosComprador').innerHTML = 'U$S ' + resultadoSellosComprador.toFixed(2);
        resultadoGastosEscrituracionVendedor = valorPropiedadDolares * 1.2 / 100;
        document.getElementById('resultadosEscrituracion').innerHTML = 'U$S ' + resultadoGastosEscrituracionVendedor.toFixed(2);
        resultadoHonorarioEscribano = valorPropiedadDolares * 1.5 / 100;
        document.getElementById('resultadoHonorarioEscribano').innerHTML = 'U$S ' + resultadoHonorarioEscribano.toFixed(2);
        resultadoGastosEscrituracionComprador = valorPropiedadDolares * 0.5 / 100 ;
        document.getElementById('resultadoGastosEscrituracionComprador').innerHTML = 'U$S ' + resultadoGastosEscrituracionComprador.toFixed(2);
    } else if(viviendaUnica=='true' && iti == 'false' && primeraEscritura=='false') {
        resultadoIti= valorPropiedadDolares * 1.5 / 100;
        document.getElementById('resultadoIti').innerHTML = 'U$S ' + resultadoIti.toFixed(2);
        resultadoSellosVendedor =  valorPropiedadDolares * 1.44 / 100;
        document.getElementById('resultadoSellosVendedor').innerHTML = 'U$S ' + resultadoSellosVendedor.toFixed(2);
        resultadoSellosComprador = resultadoSellosVendedor;
        document.getElementById('resultadoSellosComprador').innerHTML = 'U$S ' + resultadoSellosComprador.toFixed(2);
        resultadoGastosEscrituracionVendedor = valorPropiedadDolares * 1.2 / 100;
        document.getElementById('resultadosEscrituracion').innerHTML = 'U$S ' + resultadoGastosEscrituracionVendedor.toFixed(2);
        resultadoHonorarioEscribano = valorPropiedadDolares * 1.5 / 100;
        document.getElementById('resultadoHonorarioEscribano').innerHTML = 'U$S ' + resultadoHonorarioEscribano.toFixed(2);
        resultadoGastosEscrituracionComprador = valorPropiedadDolares * 0.5 / 100 ;
        document.getElementById('resultadoGastosEscrituracionComprador').innerHTML = 'U$S ' + resultadoGastosEscrituracionComprador.toFixed(2);
    }else if (viviendaUnica=='false' && iti == 'true' && primeraEscritura=='false') {
        resultadoIti= 0;
        document.getElementById('resultadoIti').innerHTML = 'U$S ' + resultadoIti.toFixed(2);
        resultadoSellosVendedor =  valorPropiedadDolares * 1.8 / 100;
        document.getElementById('resultadoSellosVendedor').innerHTML = 'U$S ' + resultadoSellosVendedor.toFixed(2);
        resultadoSellosComprador = resultadoSellosVendedor;
        document.getElementById('resultadoSellosComprador').innerHTML = 'U$S ' + resultadoSellosComprador.toFixed(2);
        resultadoGastosEscrituracionVendedor = valorPropiedadDolares * 1.2 / 100;
        document.getElementById('resultadosEscrituracion').innerHTML = 'U$S ' + resultadoGastosEscrituracionVendedor.toFixed(2);
        resultadoHonorarioEscribano = valorPropiedadDolares * 1.5 / 100;
        document.getElementById('resultadoHonorarioEscribano').innerHTML = 'U$S ' + resultadoHonorarioEscribano.toFixed(2);
        resultadoGastosEscrituracionComprador = valorPropiedadDolares * 0.5 / 100 ;
        document.getElementById('resultadoGastosEscrituracionComprador').innerHTML = 'U$S ' + resultadoGastosEscrituracionComprador.toFixed(2);
    } else if (viviendaUnica=='false' && iti == 'false' && primeraEscritura=='true') {
        resultadoIti= valorPropiedadDolares * 1.5 / 100;
        document.getElementById('resultadoIti').innerHTML = 'U$S ' + resultadoIti.toFixed(2);
        resultadoSellosVendedor =  valorPropiedadDolares * 1.8 / 100;
        document.getElementById('resultadoSellosVendedor').innerHTML = 'U$S ' + resultadoSellosVendedor.toFixed(2);
        resultadoSellosComprador = resultadoSellosVendedor;
        document.getElementById('resultadoSellosComprador').innerHTML = 'U$S ' + resultadoSellosComprador.toFixed(2);
        resultadoGastosEscrituracionVendedor = valorPropiedadDolares * 1.2 / 100;
        document.getElementById('resultadosEscrituracion').innerHTML = 'U$S ' + resultadoGastosEscrituracionVendedor.toFixed(2);
        resultadoHonorarioEscribano = (valorPropiedadDolares * 1.5 / 100) + (valorPropiedadDolares * 1 / 100);
        document.getElementById('resultadoHonorarioEscribano').innerHTML = 'U$S ' + resultadoHonorarioEscribano.toFixed(2);
        resultadoGastosEscrituracionComprador = valorPropiedadDolares * 4.5 / 100 ;
        document.getElementById('resultadoGastosEscrituracionComprador').innerHTML = 'U$S ' + resultadoGastosEscrituracionComprador.toFixed(2);
    } else if (viviendaUnica=='true' && iti == 'true' && primeraEscritura=='false'){
        resultadoIti= 0;
        document.getElementById('resultadoIti').innerHTML = 'U$S ' + resultadoIti.toFixed(2);
        resultadoSellosVendedor =  valorPropiedadDolares * 1.44 / 100;
        document.getElementById('resultadoSellosVendedor').innerHTML = 'U$S ' + resultadoSellosVendedor.toFixed(2);
        resultadoSellosComprador = resultadoSellosVendedor;
        document.getElementById('resultadoSellosComprador').innerHTML = 'U$S ' + resultadoSellosComprador.toFixed(2);
        resultadoGastosEscrituracionVendedor = valorPropiedadDolares * 1.2 / 100;
        document.getElementById('resultadosEscrituracion').innerHTML = 'U$S ' + resultadoGastosEscrituracionVendedor.toFixed(2);
        resultadoHonorarioEscribano = valorPropiedadDolares * 1.5 / 100;
        document.getElementById('resultadoHonorarioEscribano').innerHTML = 'U$S ' + resultadoHonorarioEscribano.toFixed(2);
        resultadoGastosEscrituracionComprador = valorPropiedadDolares * 0.5 / 100 ;
        document.getElementById('resultadoGastosEscrituracionComprador').innerHTML = 'U$S ' + resultadoGastosEscrituracionComprador.toFixed(2);
    } else if (viviendaUnica=='true' && iti == 'false' && primeraEscritura=='true'){
        resultadoIti= valorPropiedadDolares * 1.5 / 100;
        document.getElementById('resultadoIti').innerHTML = 'U$S ' + resultadoIti.toFixed(2);
        resultadoSellosVendedor =  valorPropiedadDolares * 1.44 / 100;
        document.getElementById('resultadoSellosVendedor').innerHTML = 'U$S ' + resultadoSellosVendedor.toFixed(2);
        resultadoSellosComprador = resultadoSellosVendedor;
        document.getElementById('resultadoSellosComprador').innerHTML = 'U$S ' + resultadoSellosComprador.toFixed(2);
        resultadoGastosEscrituracionVendedor = valorPropiedadDolares * 1.2 / 100;
        document.getElementById('resultadosEscrituracion').innerHTML = 'U$S ' + resultadoGastosEscrituracionVendedor.toFixed(2);
        resultadoHonorarioEscribano = valorPropiedadDolares * 1.5 / 100 + (valorPropiedadDolares * 1 / 100);
        document.getElementById('resultadoHonorarioEscribano').innerHTML = 'U$S ' + resultadoHonorarioEscribano.toFixed(2);
        resultadoGastosEscrituracionComprador = valorPropiedadDolares * 4.5 / 100 ;
        document.getElementById('resultadoGastosEscrituracionComprador').innerHTML = 'U$S ' + resultadoGastosEscrituracionComprador.toFixed(2);
    } else if (viviendaUnica=='false' && iti == 'true' && primeraEscritura=='true'){
        resultadoIti= 0;
        document.getElementById('resultadoIti').innerHTML = 'U$S ' + resultadoIti.toFixed(2);
        resultadoSellosVendedor =  valorPropiedadDolares * 1.8 / 100;
        document.getElementById('resultadoSellosVendedor').innerHTML = 'U$S ' + resultadoSellosVendedor.toFixed(2);
        resultadoSellosComprador = resultadoSellosVendedor;
        document.getElementById('resultadoSellosComprador').innerHTML = 'U$S ' + resultadoSellosComprador.toFixed(2);
        resultadoGastosEscrituracionVendedor = valorPropiedadDolares * 1.2 / 100;
        document.getElementById('resultadosEscrituracion').innerHTML = 'U$S ' + resultadoGastosEscrituracionVendedor.toFixed(2);
        resultadoHonorarioEscribano = (valorPropiedadDolares * 1.5 / 100) + (valorPropiedadDolares * 1 / 100);
        document.getElementById('resultadoHonorarioEscribano').innerHTML = 'U$S ' + resultadoHonorarioEscribano.toFixed(2);
        resultadoGastosEscrituracionComprador = valorPropiedadDolares * 4.5 / 100 ;
        document.getElementById('resultadoGastosEscrituracionComprador').innerHTML = 'U$S ' + resultadoGastosEscrituracionComprador.toFixed(2);
    } else if (viviendaUnica=='true' && iti == 'true' && primeraEscritura=='true'){
        resultadoIti= 0;
        document.getElementById('resultadoIti').innerHTML = 'U$S ' + resultadoIti.toFixed(2);
        resultadoSellosVendedor =  valorPropiedadDolares * 1.44 / 100;
        document.getElementById('resultadoSellosVendedor').innerHTML = 'U$S ' + resultadoSellosVendedor.toFixed(2);
        resultadoSellosComprador = resultadoSellosVendedor;
        document.getElementById('resultadoSellosComprador').innerHTML = 'U$S ' + resultadoSellosComprador.toFixed(2);
        resultadoGastosEscrituracionVendedor = valorPropiedadDolares * 1.2 / 100;
        document.getElementById('resultadosEscrituracion').innerHTML = 'U$S ' + resultadoGastosEscrituracionVendedor.toFixed(2);
        resultadoHonorarioEscribano = (valorPropiedadDolares * 1.5 / 100) + (valorPropiedadDolares * 1 / 100);
        document.getElementById('resultadoHonorarioEscribano').innerHTML = 'U$S ' + resultadoHonorarioEscribano.toFixed(2);
        resultadoGastosEscrituracionComprador = valorPropiedadDolares * 4.5 / 100 ;
        document.getElementById('resultadoGastosEscrituracionComprador').innerHTML = 'U$S ' + resultadoGastosEscrituracionComprador.toFixed(2);
    }
    //totales comprador
    totalDolaresComprador = resultadoSellosComprador + resultadoHonorarioEscribano +resultadoGastosEscrituracionComprador;
    document.getElementById('totalDolaresComprador').innerHTML = 'U$S ' + totalDolaresComprador.toFixed(2);
    totalPesosComprador = totalDolaresComprador * cotizacionDolar;
    if(!isNaN(totalPesosComprador)){
        document.getElementById('totalPesosComprador').innerHTML = '$ ' + totalPesosComprador.toFixed(2);
    }
    //totales vendedor
    totalDolaresVendedor = resultadoSellosVendedor + resultadoIti + resultadoGastosEscrituracionVendedor;
    document.getElementById('totalDolaresVendedor').innerHTML = 'U$S ' + totalDolaresVendedor.toFixed(2);
    totalPesosVendedor = totalDolaresVendedor * cotizacionDolar;
    if(!isNaN(totalPesosVendedor)){
        document.getElementById('totalPesosVendedor').innerHTML = '$ ' + totalPesosVendedor.toFixed(2);
    }
}

