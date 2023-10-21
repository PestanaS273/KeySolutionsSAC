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
  export default {
    name: 'SobresComponent',
    props: {
      data: {
        type: Array,
        required: true
      }
    }
  }
  </script>