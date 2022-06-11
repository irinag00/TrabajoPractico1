const app = Vue.createApp({
    data(){ //datos que va contener nuestra aplicacion
      return{
        nombre: '',
        apellido: '',
        monto: '',
        cantDias: '',
        nombreCorrecto: true,
        apellidoCorrecto: true,
        montoCorrecto: true,
        cantDiasCorrecto: true,
      }
    },
    methods: {
      comprobarInputs(){
        if (this.nombre != "") {
          if(this.apellido != ""){
            if(this.monto>= 1000){
              if (this.cantDias >= 30) {
                this.nombreCorrecto = true;
                this.apellidoCorrecto = true;
                this.montoCorrecto = true;
                this.cantDiasCorrecto = true;
                calcularInversion();
              }else {
                return this.cantDiasCorrecto = false;
              }
            }else{
              return this.montoCorrecto = false;
            }
          }else{
            return this.apellidoCorrecto = false;
          }
        }else{
          return this.nombreCorrecto = false;
        }
      },
    },
    computed: {
      calcularInversion(){
        let resultado;
        let porcentaje = 0;
        if(this.cantdias >= 30 && this.cantDias <= 60){ porcentaje = 40}
        if(this.cantDias>= 61 && this.cantDias <= 120){ porcentaje = 45}
        if(this.cantDias >= 121 && this.cantDias <= 360){porcentaje = 50}
        if(this.cantDias >360){porcentaje = 65}
        let interes = 0;
        interes = (this.monto*(this.cantDias/360)*(porcentaje/100));
        resultado = this.monto + interes;

        return resultado;
      }   
    },
})