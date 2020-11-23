let estancia;
let distancia;
let precioPasaje;
let valorTK;
let km;
let descuento;

km=8950

function Calcular(){

    // alert('Ejercicio')
    estancia = Number(document.getElementById('Estancia').value)
    // alert('estancia')
    // alert(estancia)
    distancia = Number(document.getElementById('Distancia').value)
    valorTK = distancia*km;

    let des = descuentoViaje(valorTK,distancia,estancia)
    precioPasaje = valorTK - des;

    document.getElementById('Total').value = precioPasaje
    alert('El valor del pasaje es: ' + precioPasaje)
}

function descuentoViaje(valorTK,distancia,estancia){

    if(distancia>1000 && estancia>7){
        descuento = valorTK * 0.30;
    }
    else{
        descuento = 0;
    }
    return descuento
}

function Saludar(){

    alert('hola clase')
}