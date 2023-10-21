<template>
    <div class="ProductsView" >
      <h1>Key Solutions S.A.C</h1>
      <h2>Tarjetas Empresa:</h2>
      <br>
      <tarjetas :data="tarjetasempresa" />
    </div>
  </template>
  
  <script>
  import Tarjetas from '@/components/TarjetasComponent.vue'
  
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
          description: 'Contact Less | Banda Magnetica',
          image: require('@/assets/tarjeta-identificacion.avif')
        },
        {
          title: 'Tarjeta para Hoteles',
          description: 'Contact Less | Banda Magnetica',
          image: require('@/assets/tarjeta-hotel.avif')
        },
        ]
      }
    }
  }
  </script>