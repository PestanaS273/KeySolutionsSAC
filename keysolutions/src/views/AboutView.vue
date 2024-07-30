<template>
  <div class="about">
    <h1>Key Solutions S.A.C</h1>

    <div class="row">
      <hr>
      <div class="col-md-6  mx-auto text-center">
        <h3 class="title">Nosotros</h3>

        <div class="blue-background" >
          <span class="description d-block">Key Solutions S.A.C es una empresa que opera en Perú y Bolivia con más de 20 años de experiencia en la fabricación, personalización y distribución de productos de seguridad para tarjetas de crédito y débito.
          <br><br>
          Nuestros productos son de alta calidad y están diseñados para proteger la información de tus tarjetas de posibles robos de datos.
          <br><br>
          Contamos con una amplia gama de productos, desde fundas de bloqueo RFID hasta rollos térmicos y sobres pre-impresos.
          </span>
        </div>
        
      </div>
      <div class="col-md-5">
        <img src="../assets/logoKey.png" class="img-fluid" alt="Logo Key Solutions S.A.C">
      </div>
      <div class="text-center">
        <router-link to="/contact" class="btn rounded-pill contact-btn">
          Contáctanos
        </router-link>
      </div>
      <hr>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
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

.title{
  font-size: 2em;
  margin-top: 20px;
  margin-bottom: 20px;
}

.img-fluid{

}
</style>
