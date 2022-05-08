<<<<<<< HEAD
let datos= [];
let periodo =0;
let nombre;
let apellido;
let monto;
let dias;
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
const btnCalcular = document.getElementById("btnCalcular").addEventListener(("click"), calcular => {
    calcular.preventDefault();
    comprobarInputs();
    resultados.innerHTML = "<h5>" + "El total a obtener de "+ "<b>" + nombre +" "+ apellido + "</b>" + " es de " + "<b>" + "$"+ resultado.toFixed(2) +  "</b>" + "</h5>";
})

function comprobarInputs(){
  nombre = document.getElementById("txtNombre").value;
  apellido = document.getElementById("txtApellido").value;
  monto = parseFloat(document.getElementById("monto").value);
  dias = parseFloat(document.getElementById("meses").value);
    if (nombre != "") {
      if(apellido != ""){
        if(monto>= 1000){
          if (dias >= 30) {
            document.getElementById("nombreIncorrecto").style.display = "none";
            document.getElementById("apellidoIncorrecto").style.display = "none";
            document.getElementById("montoIncorrecto").style.display = "none";
            document.getElementById("diasIncorrecto").style.display = "none";
            calcularInversion();
          }else {
            document.getElementById("diasIncorrecto").style.display = "block"
          }
        }else{
          document.getElementById("montoIncorrecto").style.display = "block";
        }
      }else{
        document.getElementById("apellidoIncorrecto").style.display = "block";
      }
    }else{
      document.getElementById("nombreIncorrecto").style.display = "block";
    }
=======
var datos = [];
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
btnCalcular = document.getElementById("btnCalcular").addEventListener(("click"), calcular => {  
    comprobarInputs();  
})
btnVolverCalcular = document.getElementById("btnVolverCalcular").addEventListener(("click"), calcularIntereses => {  
    var listado = document.getElementById("resultados");
    var html = "";
    let porcentaje = 0;
    if(meses >= 30 && meses <= 60){ porcentaje = 40}
    if(meses >= 61 && meses <= 120){ porcentaje = 45}
    if(meses >= 121 && meses <= 360){porcentaje = 50}
    if(meses >360){porcentaje = 65}
    let interes = 0, monto = 0;
    monto = resultado
    interes = (monto*(meses/360)*(porcentaje/100));
    resultado = monto + interes;
    for (let i = 0; i < 4; i++){
        html += "Monto inicial :"+ monto + " Resultado: " + resultado + "<br/>";
        monto = resultado;
        resultado = monto + interes;
        listado.innerHTML = html 
    }
    
})
function comprobarInputs(){
    nombre = document.getElementById("txtNombre").value;
    apellido = document.getElementById("txtApellido").value;
    monto = parseFloat(document.getElementById("monto").value);
    meses = parseFloat(document.getElementById("meses").value); 
    if (nombre && apellido != "" ){
        if(monto >= 1000){
            if(meses >= 30){calcularInversion()}
            else{alert("Por favor ingrese un numero de meses mayor o igual a 30")}}
        else{alert("Por favor ingrese un monto mayor a $1000")}}
    else {alert("Por favor ingrese nombre y apellido")}
}
function calcularInversion(){
    var resultados = document.getElementById("resultados");
    var porcentaje = 0;
    if(meses >= 30 && meses <= 60){ porcentaje = 40}
    if(meses >= 61 && meses <= 120){ porcentaje = 45}
    if(meses >= 121 && meses <= 360){porcentaje = 50}
    if(meses >360){porcentaje = 65}
    let interes = 0;
    interes = (monto*(meses/360)*(porcentaje/100));
    resultado = monto +interes;
    resultados.innerHTML = "El total de $ a obtener de "+ nombre+", "+apellido +" es de: " +resultado;
    return(resultado, porcentaje, meses)
>>>>>>> edfc48b73d73255049725c66a2aa47228a0009af
}
// function interesesFuturos(){
//     calcularInversion();
//     debugger;
//     let montointeres = monto + interes;
//     alert(monto, monto+interes);
//     alert(montointeres, montointeres+interes) 
// }

function calcularInversion(){
  periodo++;
  var porcentaje = 0;
  if(dias >= 30 && dias <= 60){ porcentaje = 40}
  if(dias >= 61 && dias <= 120){ porcentaje = 45}
  if(dias >= 121 && dias <= 360){porcentaje = 50}
  if(dias >360){porcentaje = 65}
  let interes = 0;
  interes = (monto*(dias/360)*(porcentaje/100));
  resultado = monto + interes;

  let dato = {
    "periodo": periodo,
    "monto": monto,
    "resultado": resultado
  }
  datos.push(dato);
}

const btnVolverCalcular = document.getElementById("btnVolverCalcular").addEventListener(("click"), calcularIntereses => { 
    calcularIntereses.preventDefault();
      for (let i=0; i<3; i++){
        reinversion();
      }
      datos = [];
    debugger;
}) 

function reinversion () {
  //periodo ++;
  monto= resultado;
  calcularInversion();
  mostrarDatos ();
}
  
function mostrarDatos (){
  let listado= document.getElementById("historial-tabla");
  let html= ""; //si o si igualar a "" para no nos tire undefined
  for(let dato of datos){
    html += "<tr>" + "<td>" + dato.periodo + "</td>" +  "<td>" + dato.monto.toFixed(2) + "</td>"+ "<td>" + dato.resultado.toFixed(2) + "</td>" + "</tr>";
  }
  listado.innerHTML = html;
}

btnBorrar = document.getElementById("btnBorrar").addEventListener (("click"), eliminarHistorial => {
  let listado= document.getElementById("historial-tabla");
  var resultados = document.getElementById("resultados");
  resultados.innerHTML = "";
  listado.innerHTML= "";
  apellido.innerHTML= "";
  //location.reload();
})
