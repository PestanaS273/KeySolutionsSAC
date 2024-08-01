<template>
  <div class="ProductsView" >
    <h1>Key Solutions S.A.C</h1>
    <div class="row">
      <hr>
      <div class="col-md-6  mx-auto text-center">
        
        <div class="blue-background" >
          <span class="description d-block">Las tarjetas que ofrecemos son elaboradas en instalaciones de producción certificadas que aseguran Precisión, Confiabilidad y Seguridad. 
          <br><br>
          Las tarjetas de plástico son una excelente herramienta de marketing y fidelización de clientes, fabricadas en PVC de alta calidad, con impresión de alta resolución y durabilidad.
          <br><br>
          Contamos con una amplia gama de tarjetas de plástico, con diferentes acabados y opciones de personalización, que se adaptan a las necesidades de cada cliente.
          <br><br>
          Adicionalmente a la manufactura de tarjetas de débito virgenes, ofrecemos la personalización variable (Impresión del BIN / CVV), grabación de banda magnetica y chip, asi como la confección del sobre de entrega.
          </span>
        </div>
        
      </div>
      <div class="col-md-6">
        <img src="../assets/frente-reverso.avif" class="img-fluid" alt="Amberso y reverso tarjeta débito">
      </div>
      <div class="text-center">
        <router-link to="/contact" class="btn rounded-pill contact-btn">
          Solicitar Cotización y/o Consultas 
        </router-link>
      </div>
      <hr>
    </div>
    <h2>Tarjetas de Débito / Crédito :</h2>
    <br>
    <tarjetas :data="tarjetasbanco" />
  </div>
</template>

<script>
import Tarjetas from '@/components/TarjetasComponent.vue'
import { useHead } from '@vueuse/head'

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
          description: 'Contactless | Banda Magnetica',
          image: require('@/assets/visa-debito.jpeg')
        },
        {
          title: 'Tarjeta MASTERCARD Crédito / Débito',
          description: 'Contactless | Banda Magnetica',
          image: require('@/assets/mastercard-credito.png')
        },
        {
          title: 'Tarjeta Diners Club',
          description: 'Contactless | Banda Magnetica',
          image: require('@/assets/dinner.jpeg')
        },
        
      ],
    }
  },
  setup() {
      const head = useHead({
        title: 'Tarjetas de Débito y Crédito Perú - Bolivia',
        meta: [
          {
            name: 'description',
            content: 'Tarjetas de débito y crédito para sistemas financieros, con tecnología contactless y banda magnetica.'
          }
        ],
        link: [
          {
            rel: 'canonical',
            href: 'https://keysolutionssac.com/tarjetas-banca'
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
</style>