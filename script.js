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
  }

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
