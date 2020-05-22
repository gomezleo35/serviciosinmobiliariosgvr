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
    calcularEscritura();
    console.log(valorPropiedad);
})

//funcion calcular escritura



function calcularEscritura() {
    
    if (viviendaUnica=='false' && iti == 'false' && primeraEscritura=='false') {
        resultadoIti= valorPropiedadDolares * 1.5 / 100;
        document.getElementById('resultadoIti').innerHTML = 'U$S' + resultadoIti.toFixed(2);
        resultadoSellosVendedor =  valorPropiedadDolares * 1.8 / 100;
        document.getElementById('resultadoSellosVendedor').innerHTML = 'U$S ' + resultadoSellosVendedor.toFixed(2);
        resultadoSellosComprador = resultadoSellosVendedor;
        document.getElementById('resultadoSellosComprador').innerHTML = 'U$S ' + resultadoSellosComprador.toFixed(2);
        resultadoGastosEscrituracionVendedor = valorPropiedadDolares * 1.2 / 100;
        document.getElementById('resultadosEscrituracion').innerHTML = 'U$S ' + resultadoGastosEscrituracionVendedor.toFixed(2);




    } else {
        
    }
    //totales comprador
    totalDolaresComprador = resultadoSellosComprador + resultadoHonorarioEscribano +resultadoGastosEscrituracionComprador;
    document.getElementById('totalDolaresComprador').innerHTML = 'U$S ' + totalDolaresComprador.toFixed(2);
    totalPesosComprador = totalDolaresComprador * cotizacionDolar;
    document.getElementById('totalPesosComprador').innerHTML = '$ ' + totalPesosComprador;
    //totales vendedor
    totalDolaresVendedor = resultadoSellosVendedor + resultadoIti + resultadoGastosEscrituracionVendedor;
    document.getElementById('totalDolaresVendedor').innerHTML = 'U$S ' + totalDolaresVendedor.toFixed(2);
    totalPesosVendedor = totalDolaresVendedor * cotizacionDolar;
    document.getElementById('totalPesosVendedor').innerHTML = '$ ' + totalPesosVendedor.toFixed(2);
    


    


}

// poner un porcentaje de %1 en gastos de escrituracion;

//VIVIENDA UNICA DEL COMPRADOR DESTINO VIVIENDA es si 
//sumarle el 30% al la cotiazacion 

//poner todos los resultados en dolar y solo mostrar el resultado en pesos

