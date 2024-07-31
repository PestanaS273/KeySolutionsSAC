<template>
  <div class="about">
    <h1>Key Solutions S.A.C</h1>

    <div class="row">
      <hr>
      <div class="col-md-6  mx-auto text-center">
        <h3 class="title">Nosotros</h3>

        <div class="blue-background" >
          <span class="description d-block">
          Key Solutions S.A.C es una empresa que brinda insumos especializados para el sistema financiero y empresarial. Los productos que ofrecemos los adecuamos a las necesidades de cada uno de nuestros clientes en cuanto a diseño, material e impresión. Para brindar estos servicios y cumplir con nuestros clientes, contamos con profesionales altamente calificados y con una vasta experiencia en cada rubro que ofrecemos.
          <br><br>
          Somos una empresa con una experiencia de más de 20 años en el mercado, lo que nos permite brindar un servicio de calidad y con la garantía de satisfacción de nuestros clientes. Nuestro compromiso es brindar productos de calidad.
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
