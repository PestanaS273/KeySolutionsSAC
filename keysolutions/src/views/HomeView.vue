<template>
  <div class="home">
    <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active ">
          <img src="../assets/tarjeta.png" class="d-block w-80 mx-auto" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/tarjeta.png" class="d-block w-80 mx-auto" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/tarjeta.png" class="d-block w-80 mx-auto" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="container">
      <div class="below-carousel">
        <div class="row">
          <div class="col-md-12">
            <h2><b>Fabricante de Tarjetas PVC con chip...</b></h2>
            <h5>Fabricacion y personalizacion de tarjetas. Tarjetas contact less y magneticas para transpote, hoteles, monederos, debito / crédito. </h5>
            
          </div>
        </div>
        <br><br>
        <div class="row">
          <div class="col-md-6">
            <h3>Seguridad</h3>
            <ul class="calidades">
              <li>Comprobamos la calidad de nuestros chips antes de entrega</li>
              <li>Protocolos de seguridad</li>
              <li>Chip modelo...</li>
            </ul>
          </div>
          <div class="col-md-6">
            <h3>Calidad</h3>
            <ul class="calidades">
              <li>Sin intermediarios</li>
              <li>Materiales de calidad asegurando sus años de vida</li>
              <li>Entrega sin retrasos</li>
            </ul>
          </div>
        </div>
      </div>
      <br><br>
      
      
      
      <div class="product-title">
        <div class="row">
          <div class="col-md-12">
            <h2>Nuestros productos :</h2>
          </div>
        </div>
      </div>


      <div class="card mb-3">
        <router-link to="/tarjetas" class="card-link">
        <img src="../assets/tarjeta.png" class="card-img-top mx-auto" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
        </div>
      </router-link>
      </div>
      

      <div class="card mb-3">
        <router-link to="/tarjetas" class="card-link">
        <img src="../assets/tarjeta.png" class="card-img-top mx-auto" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
        </div>
      </router-link>
      </div>

      <div class="card mb-3">
        <router-link to="/tarjetas" class="card-link">
        <img src="../assets/tarjeta.png" class="card-img-top mx-auto" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
        </div>
      </router-link>
      </div>

      <div class="card mb-3">
        <router-link to="/tarjetas" class="card-link">
        <img src="../assets/tarjeta.png" class="card-img-top mx-auto" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
        </div>
      </router-link>
      </div>
      

    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
   mounted() {
    // Set a timer for the carousel to automatically switch slides every 5 seconds
    setInterval(() => {
      const carousel = document.querySelector('#carouselExampleCaptions');
      const activeSlide = carousel.querySelector('.carousel-item.active');
      const nextSlide = activeSlide.nextElementSibling || carousel.querySelector('.carousel-item:first-child');
      const nextIndex = Array.from(carousel.querySelectorAll('.carousel-item')).indexOf(nextSlide);
      carousel.querySelector('.carousel-indicators [data-bs-target="#carouselExampleCaptions"][data-bs-slide-to="' + nextIndex + '"]').click();
    }, 5000);
  }
}
</script>

<style scoped>
.home {
  /* Add some margin to the top and bottom of the carousel */
  .carousel {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  /* Add some margin to the top and bottom of the text section */
  .text-section {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  

  /* Add some margin to the top and bottom of the columns */
  .column {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .calidades{
    text-decoration: none;
    text-align: start;
  }



  /* Add some margin to the top and bottom of the cards */
  .card {
    margin-top: 50px;
    margin-bottom: 50px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease-in-out;
    padding-top: 100px;

  }

  .card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transform: scale(1.03);
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
  position: relative;
  z-index: 1;
}

.card:hover::before {
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  z-index: -1;
  background: rgba(255, 255, 255, 0.5);
  filter: blur(20px);
}

.card-link{
  text-decoration: none;
  color: black;
  
}

.carousel{
  background-color: #212529;
  margin-top: 0px;
  margin-bottom: 40px;
  padding-top: 20px;
  padding-bottom: 20px;
}

.below-carousel{
  /* background-image: url("../assets/backgroundgrey.jpeg"); */
  background-size: cover;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.product-title{
  margin-bottom: 0px;
}

}

/* Set a minimum and maximum width for the images on small screens */
@media (max-width: 576px) {
  .card-img-top {
    min-width: 100px;
    max-width: 200px;
  }
}

/* Set a minimum and maximum width for the images on medium screens */
@media (min-width: 576px) and (max-width: 768px) {
  .card-img-top {
    min-width: 150px;
    max-width: 250px;
  }
}

/* Set a minimum and maximum width for the images on large screens */
@media (min-width: 768px) {
  .card-img-top {
    min-width: 200px;
    max-width: 400px;
  }
}
</style>