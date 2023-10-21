<template>
    <div class="ProductsView" >
      <h1>Key Solutions S.A.C</h1>
      <h2>Sobres, Pre-Impresos y Formas Continuas :</h2>
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
            title: 'Tarjeta MASTERCARD Crédito / Débito',
            description: 'Contact Less | Banda Magnetica',
            image: require('@/assets/pinmailer.jpeg')
          },
        ],
      }
    }
  }
  </script>