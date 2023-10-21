<template>
  <div class="ProductsView" >
    <h1>Key Solutions S.A.C</h1>
    <h2>Tarjetas Banca:</h2>
    <br>
    <tarjetas :data="tarjetasbanco" />
  </div>
</template>

<script>
import Tarjetas from '@/components/TarjetasComponent.vue'

export default {
  name: 'TarjetasBanca',
  components: {
    Tarjetas
  },
  data() {
    return {
      tarjetasbanco: [
        {
          title: 'Tarjeta VISA Crédito / Débito',
          description: 'Contact Less | Banda Magnetica',
          image: require('@/assets/visa-debito.jpeg')
        },
        {
          title: 'Tarjeta MASTERCARD Crédito / Débito',
          description: 'Contact Less | Banda Magnetica',
          image: require('@/assets/mastercard-credito.png')
        },
        {
          title: 'Tarjeta Diners Club',
          description: 'Contact Less | Banda Magnetica',
          image: require('@/assets/dinner.jpeg')
        },
        
      ],
    }
  }
}
</script>