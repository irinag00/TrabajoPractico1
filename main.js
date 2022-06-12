Vue.createApp({
  data() {
      return {
          nombre: '',
          apellido: '',
          monto: 0,
          cantDias: 0,
          nombreCorrecto: true,
          apellidoCorrecto: true,
          montoCorrecto: true,
          cantDiasCorrecto: true,
          porcentaje:0,
          interes:0,
          resultado: 0,
          show: false,
          periodo: 1,
          reinvertir: false,
          plazo: [],
      }
  },
  methods: {
      cargarInputs() {
          this.nombre = document.getElementById("txtNombre").value;
          this.apellido = document.getElementById("txtApellido").value;
          this.monto = parseFloat(document.getElementById("monto").value);
          this.cantDias = parseFloat(document.getElementById("cantDias").value);
          return this.nombre, this.apellido, this.monto, this.cantDias;
      },
      validarInputs() {
          this.nombreCorrecto=(this.nombre != "")?true:false;
          this.apellidoCorrecto=(this.apellido != "")?true:false;
          this.montoCorrecto=(this.monto >= 1000)?true:false;
          this.cantDiasCorrecto=(this.cantDias >= 30)?true:false;
          if(!this.nombreCorrecto || !this.apellidoCorrecto || !this.montoCorrecto || !this.cantDiasCorrecto){ 
              return this.show= false;
          }
          else{
              return this.show= true;
          }
      },
      calcularPorcentaje() {
          if(this.cantDias >= 30 && this.cantDias <= 60){ this.porcentaje = 40}
          if(this.cantDias >= 61 && this.cantDias <= 120){ this.porcentaje = 45}
          if(this.cantDias >= 121 && this.cantDias <= 360){ this.porcentaje = 50}
          if(this.cantDias > 360){ this.porcentaje = 65}
          
          return this.porcentaje;
      },
      calcularInteres(monto){
          this.interes = (monto*(this.cantDias/360)*(this.porcentaje/100));
          return this.interes;
      },
      calcularResultado(monto){
          this.calcularInteres(monto);
          this.resultado = monto + this.interes;
          return this.resultado;
      },
      borrarDatos(){
          this.nombre = "";
          this.apellido = "";
          this.monto = 0;
          this.cantDias = 0; 
          this.show = false;
          this.reinvertir = false;
          this.nombreCorrecto= true,
          this.apellidoCorrecto= true,
          this.montoCorrecto= true,
          this.cantDiasCorrecto= true
      },
      calcularPlazo(monto){
          this.plazo = [];
          this.periodo = 1;
          this.reinvertir= true;
          this.plazo.push({
              periodo: this.periodo++, montoInicial: this.monto, montoFinal: this.resultado
          });
          for (let i=0; i < 3; i++ ){
              monto = this.plazo[i].montoFinal;
              resultado = this.calcularResultado(monto);
              this.plazo.push({
                  periodo: this.periodo++, montoInicial: monto, montoFinal: resultado
              })
          };
      }
  },
}).mount('#app')