<template>
  <div class="ProductsView" >
    <h1>Key Solutions S.A.C</h1>
    <h2>Tarjetas Banca:</h2>
    <br>
    <tarjetas :data="tarjetasbanco" />
    <br>
    <h2>Tarjetas Empresa:</h2>
    <br>
    <tarjetas :data="tarjetasempresa" />
    <br>

    <h2>Fundas RFID:</h2>
    <br>
    <FundasBloqueo :data="fundas" />
    <br>

    <h2>Sobres de Seguridad y Pre-Impresos:</h2>
    <br>
    <SobresComponent :data="sobres" />
    <br>

    <h2>Rollos:</h2>
    <br>
    <Rollos :data="rollos" />
    <br>
  </div>
</template>

<script>
import Tarjetas from '@/components/TarjetasComponent.vue'
import Rollos from '@/components/RollosComponent.vue'
import SobresComponent from '@/components/PreImpresos.vue'
import { useHead } from '@vueuse/head'
import FundasBloqueo from '@/components/FundasBloqueoComponent.vue'

export default {
  name: 'TarjetasBanca',
  components: {
    Tarjetas,
    Rollos,
    SobresComponent,
    FundasBloqueo
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
        ],
      rollos: [
        {
          title: 'Rollos Térmicos 80x80',
          image: require('@/assets/rollos80.jpeg')
        },
        {
          title: 'Rollos Autocopiante 80x80',
          image: require('@/assets/rollo-autocopiante.jpeg')
        },
        ],
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
        fundas: [
          {
            title: 'Sobre Aluminio RFID Personalizables',
            image: require('@/assets/un-sobre.webp')
          },
        ]
    }
  },
  setup() {
      const head = useHead({
        title: 'Productos - Key Solutions S.A.C',
        meta: [
          {
            name: 'description',
            content: 'Productos de alta calidad para el sistema financiero y empresarial.'
          }
        ],
        links: [
          {
            rel: 'canonical',
            href: 'https://keysolutionssac.com/products'
          }
        ]
      })
      return {
        head
      }
    }
}
</script>