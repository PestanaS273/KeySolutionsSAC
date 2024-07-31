<template>
    <div class="sobres">
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
    name: 'SobresComponent',
    props: {
      data: {
        type: Array,
        required: true
      }
    },
    setup() {
      const head = useHead({
        title: 'Sobres y Pre-Impresos',
        meta: [
          {
            name: 'description',
            content: 'Sobres y Pre-Impresos'
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
  /* .sobres {
    height: 20%;
    object-fit: cover;
  } */
  </style>
