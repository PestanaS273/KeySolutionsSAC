<template>
    <div class="ProductsView" >
      <h1>Key Solutions S.A.C</h1>

      <div class="row">
        <hr>
        <div class="col-md-7  mx-auto text-center">
          
          <div class="blue-background" >
            <span class="description d-block">Estamos capacitados para gestionar sus requerimientos y asesorarlos con las mejores alternativas de Formatos Impresos, Formas Continuas y Sobres.
            <br><br>
            Todos nuestros productos son controlados, verificados y aprobados por el área de control de calidad.
            </span>
          </div>
          
        </div>
        <div class="col-md-4">
          <img src="../assets/pinmailer.jpeg" class="img-fluid" alt="Amberso y reverso tarjeta débito">
        </div>
        <div class="text-center">
          <router-link to="/contact" class="btn rounded-pill contact-btn">
            Solicitar Cotización y/o Consultas 
          </router-link>
        </div>
        <hr>
      </div>
      <h2>Sobres, Formularios Impresos y Formas Continuas :</h2>
      <br>
      <SobresComponent :data="sobres" />
    </div>
  </template>
  
  <script>
  import SobresComponent from '@/components/PreImpresos.vue'
  
  export default {
    name: 'SobresView',
    components: {
        SobresComponent
    },
    data() {
      return {
        sobres: [
          {
            title: 'Formas Continuas',
            image: require('@/assets/formatos-preimpresos.webp')
          },
          {
            title: 'Sobre con Ventana',
            description: '',
            image: require('@/assets/sobre-ventana.avif')
          },
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
</style>