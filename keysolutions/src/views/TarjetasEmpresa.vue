<template>
    <div class="ProductsView" >
      <h1>Key Solutions S.A.C</h1>

      <div class="row">
      <hr>

      <div class="col-md-6  mx-auto text-center">

        <h3 class="title">Tarjetas para Hoteles, Casinos, Seguros, Empresas, Calendarios y Más : </h3>

        
        <div class="blue-background" >
          <span class="description d-block">La versatilidad de nuestro producto permite diseños a la medida de los requerimientos de nuestros clientes, con la posibilidad de incluir tecnología de banda magnética, chip, código de barras, impresión de datos variables, entre otros.
          <br><br>
          Trabajamos con todo tipo de modelos para tarjetas.
          </span>
        </div>
        
      </div>
      <div class="col-md-5">
        <img src="../assets/tarjeta-pvc-hotel.png" class="img-fluid" alt="Amberso y reverso tarjeta débito">
      </div>
      <div class="text-center">
        <router-link to="/contact" class="btn rounded-pill contact-btn">
          Solicitar Cotización y/o Consultas 
        </router-link>
      </div>
      <hr>
    </div>
      <h2>Tarjetas Empresa:</h2>
      <br>
      <tarjetas :data="tarjetasempresa" />
    </div>
  </template>
  
  <script>
  import Tarjetas from '@/components/TarjetasComponent.vue'
  import { useHead } from '@vueuse/head'
  
  export default {
    name: 'TarjetaEmpresa',
    components: {
      Tarjetas
    },
    data() {
      return {
        tarjetasempresa: [
        {
          title: 'Tarjeta Identificación / Control de Acceso',
          description: 'Chip | Banda Magnetica',
          image: require('@/assets/tarjeta-identificacion.avif')
        },
        {
          title: 'Tarjeta para Hoteles',
          description: 'Chip | Banda Magnetica',
          image: require('@/assets/tarjeta-hotel.avif')
        },
        ]
      }
    },
    setup() {
      const head = useHead({
        title: 'Tarjetas de Empresa Perú - Bolivia',
        meta: [
          {
            name: 'description',
            content: 'Tarjetas de identificación y control de acceso, tarjetas para hoteles y casinos, con tecnología de chip y banda magnetica.'
          }
        ],
        link: [
          {
            rel: 'canonical',
            href: 'https://keysolutionssac.com/tarjetas-empresa'
          }
        ]
      })
      return {
        head
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