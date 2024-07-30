<template>
    <div class="ProductsView" >
      <h1>Key Solutions S.A.C</h1>
      <div class="row">
        <hr>
        <div class="col-md-6  mx-auto text-center">
          <h3 class="title">Fundas de Bloqueo RFID para Tarjetas de Crédito y Débito </h3>

          <div class="blue-background" >
            <span class="description d-block">Hechas de material Impermeable de papel aluminio, el diseño de perfil delgado facilita el transporte en la billetera o el bolsillo sin ocupar espacio adicional.
            <br><br>
            El revestimiento rigido de papel aluminio de alta calidad de estas pequeñas fundas delgadas de bloqueo RFID garantizan la seguridad del robo de datos de la tarjeta.
            <br><br>
            Sobres protectores en varios colores con posibilidad de impresión personalizada.
            </span>
          </div>
          
        </div>
        <div class="col-md-5">
          <img src="../assets/sobre-rfid.jpg" class="img-fluid" alt="Amberso y reverso tarjeta débito">
        </div>
        <div class="text-center">
          <router-link to="/contact" class="btn rounded-pill contact-btn">
            Conoce más 
          </router-link>
        </div>
        <hr>
      </div>
      <h2>Fundas de Bloqueo</h2>
      <br>
      <FundasBloqueoComponent :data="sobres" />
    </div>
  </template>
  
  <script>
  import FundasBloqueoComponent from '@/components/FundasBloqueoComponent.vue'
  
  export default {
    name: 'FundasBloqueoView',
    components: {
        FundasBloqueoComponent
    },
    data() {
      return {
        sobres: [
          {
            title: 'Sobre Aluminio RFID Personalizables',
            image: require('@/assets/un-sobre.webp')
          },
          // {
          //   title: 'Sobre Aluminio RFID',
          //   description: 'Contact Less | Banda Magnetica',
          //   image: require('@/assets/pinmailer.jpeg')
          // },
        ],
      }
    }
  }
  </script>

<style scoped> 
.blue-background {
  background-color: #f0f8ff;

  
}

.description {
  padding: 20px;
  border-radius: 10px;
  font-size: 1.5em;
  margin-bottom: 20px;
  font-weight: normal;
}

.contact-btn{
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 1.6rem;
  background-color: #0c3e6b;
  color: white;
  letter-spacing: 1px;
}

.title{
  font-size: 2em;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>