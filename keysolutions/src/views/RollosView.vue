<template>
    <div class="ProductsView" >
      <h1>Key Solutions S.A.C</h1>
      <div class="row">
        <hr>
        <div class="col-md-7  mx-auto text-center">
          
          <div class="blue-background" >
            <span class="description d-block">Nos especializamos en la fabricación de rollos de papel para todo tipo de impresoras, sean termicas, matriciales, laser e Inkjet.
            <br><br>
            Garantizamos la calidad de nuestros productos en cuanto al metraje, peso, diametro y ancho de cada rollo, lo mismo que su calidad de transcripción e impresión.
            <br><br>
            Brindamos tambien rollos térmicos a la medida para ATM's y POS.
            </span>
          </div>
          
        </div>
        <div class="col-md-5">
          <img src="../assets/pos.png" class="img-fluid" alt="Amberso y reverso tarjeta débito">
        </div>
        <div class="text-center">
          <router-link to="/contact" class="btn rounded-pill contact-btn">
            Solicitar Cotización y/o Consultas 
          </router-link>
        </div>
        <hr>
      </div>
      <h2>Rollos Térmicos :</h2>
      <br>
      <Rollos :data="rollos" />
    </div>
  </template>
  
  <script>
  import Rollos from '@/components/RollosComponent.vue'
  import { useHead } from '@vueuse/head'
  
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
    },
    setup() {
      const head = useHead({
        title: 'Rollos Perú - Bolivia',
        meta: [
          {
            name: 'description',
            content: 'Rollos térmicos y autocopiantes para impresoras de todo tipo, ATM y POS.'
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