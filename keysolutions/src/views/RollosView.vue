<template>
    <div class="ProductsView" >
      <h1>Key Solutions S.A.C</h1>
      <h2>Tarjetas Empresa:</h2>
      <br>
      <Rollos :data="rollos" />
    </div>
  </template>
  
  <script>
  import Rollos from '@/components/RollosComponent.vue'
  
  export default {
    name: 'RollosView',
    components: {
      Rollos
    },
    data() {
      return {
        rollos: [
        {
          title: 'Rollos Térmicos 80x80',
          image: require('@/assets/rollos80.jpeg')
        },
        {
          title: 'Rollos Autocopiante 80x80',
          image: require('@/assets/rollo-autocopiante.jpeg')
        },
        ]
      }
    }
  }
  </script>