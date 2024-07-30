<template>
    <div class="Fundas">
      <div class="row">
        <div class="col-md-5 mx-auto" v-for="card in data" :key="card.title">
          <div class="card">
            <img :src="card.image" class="card-img-top" :alt="card.title">
            <div class="card-body">
              <h5 class="card-title">{{ card.title }}</h5>
              <p class="card-text">{{ card.description }}</p>
            </div>
          </div>
          <br><br>
        </div>
      </div>
    </div>
    
  </template>
  
  <script>
  import { useHead } from '@vueuse/head'

  export default {
    name: 'FundasBloqueoComponent',
    props: {
      data: {
        type: Array,
        required: true
      }
    },
    setup() {
      const head = useHead({
        title: 'Fundas de Bloqueo RFID',
        meta: [
          {
            name: 'description',
            content: 'Fundas de bloqueo RFID para tarjetas de crédito y débito.'
          }
        ]
      })
      return {
        head
      }
    }
  }
  </script>