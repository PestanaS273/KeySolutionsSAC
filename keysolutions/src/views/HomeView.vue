<template>
  <div class="home">
    <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active " id="carousel1">
          <router-link to="/tarjetas-banca">
          <img src="../assets/tarjetascarousel.png" id="carousel-1-img" class="d-block w-80 mx-auto" alt="Rarjetas de credito">
          <div class="carousel-caption d-md-block">
            <h5><b>Tarjetas con Chip Contact Less</b></h5>
            <p>Creación y personalización de tarjetas para bancos, transporte, hoteles.</p>
          </div>
        </router-link>
        </div>
        <div class="carousel-item" id="carousel2" >
          <router-link to="/rollos">
          <img src="../assets/papeltermico.png" id="carousel-2-img" class="d-block w-80 mx-auto" alt="Rollos Papel termico">
          <div class="carousel-caption d-md-block">
            <h5><b>Rollos Papel Termico</b></h5>
            <p>Papel termico y autocopiativo para facturacion e impresión.</p>
            <p>Papel termico 80x80</p>
          </div>
        </router-link>
        </div>
        <div class="carousel-item" id="carousel3" no-wra>
          <router-link to="/sobres-preimpresos">
          <img src="../assets/mealer.png" id="carousel-3-img" class="d-block w-80 mx-auto" alt="Sobres Pin Mailer" no-wrap>
          <div class="carousel-caption d-md-block">
            <h5><b>Sobres Pin Mailer</b></h5>
            <p>Formatos Pre-impresos, Formas Continuas, Sobres de seguridad Pin Mailer</p>
          </div>
        </router-link>
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
          <div class="col-md-9 mx-auto">
            <h1><b>Key Solutions S.A.C : </b><br><br><i>Importación exportación de insumos especializados para el sector financiero y empresarial</i></h1>
            <br>
            <h4>Ofrecemos servicios de fabricación y personalización de tarjetas con chip, rollos termicos de diferentes medidas, formatos pre impresos y sobres de seguridad.</h4>
            <br>
          </div>
        </div>
        <br><br>
        <div class="row">
          <div class="col-md-6">
            <h3><i>Seguridad</i></h3>
            <ul class="calidades">
              <li>Las tarjetas que ofrecemos son elaboradas en instalaciones de producción certificadas</li>
              <li>Aseguran Precisión, Confiabilidad y Seguridad</li>
              <li>CHIP utilizado en tarjetas Visa y MasterCard certificadas por las Marcas</li>
            </ul>
          </div>
          <div class="col-md-6">
            <h3><i>Calidad</i></h3>
            <ul class="calidades">
              <li>Tarjetas fabricadas con PVC de alta calidad</li>
              <li>Materiales resistentes al desgaste del uso diario</li>
              <li>Entrega sin retrasos</li>
            </ul>
          </div>
        </div>
      </div>
      <br><br>
      <div id="productos">
        <div class="product-title">
          <div class="row">
            <div class="col-md-12">
              <h2><b>Nuestros Productos : </b></h2>
            </div>
          </div>
        </div>


        <div class="card mb-3 mx-auto" style="width: 70%;">
          <router-link to="/tarjetas-banca" class="card-link">
          <img src="../assets/varias-tarjetas.avif" class="card-img-top mx-auto" alt="...">
          <div class="card-body">
            <h5 class="card-title"><b>Tarjetas Débito Crédito</b></h5>
            <p class="card-text">Fabricación y personalización para el sector financiero <br>
            <small class="text-body-secondary">VISA | MASTERCARD | DINNER CLUB</small></p>
          </div>
        </router-link>
        </div>
        

        

        <div class="card mb-3 mx-auto" style="width: 70%;">
          <router-link to="/tarjetas-empresa" class="card-link">
          <img src="../assets/tarjeta-hotel.png" class="card-img-top mx-auto" alt="...">
          <div class="card-body">
            <h5 class="card-title"><b>  Tarjetas de Identificación</b></h5>
            <p class="card-text">Tarjetas personalizables para identificación con tecnología Contact Less, banda Magnetica y chip</p>
            <p class="card-text"><small class="text-body-secondary">Hoteles | Empresas | Transporte | Sistemas educativos </small></p>
          </div>
        </router-link>
        </div>

        <div class="card mb-3 mx-auto" style="width: 70%;">
          <router-link to="/rollos" class="card-link">
          <img src="../assets/rollos.png" class="card-img-top mx-auto" alt="...">
          <div class="card-body">
            <h5 class="card-title"><b>Papel termico y autocopiativo</b></h5>
            <p class="card-text">Diferentes medidas de rollo para impresión electronica</p>
            <p class="card-text"><small class="text-body-secondary">Rollos 80x80</small></p>
          </div>
        </router-link>
        </div>

        <div class="card mb-3 mx-auto" style="width: 70%;">
          <router-link to="/sobres-preimpresos" class="card-link">
          <img src="../assets/pinmailer.jpeg" class="card-img-top mx-auto" alt="...">
          <div class="card-body">
            <h5 class="card-title"><b>Formatos Pre-impresos y Sobres de Seguridad</b></h5>
            <p class="card-text">Formatos pre impresos y formas continuas para el sector financiero. Sobres de seguridad PIN Mailer de protección para inforamción sensible</p>
            <p class="card-text"><small class="text-body-secondary"></small></p>
          </div>
        </router-link>
        </div>
      </div>


      <br><br><hr><br><br>
        <div class="clientes">
          <div class="row">
            <div class="col-md-12">
              <h2 style="color: black;">Clientes que confian en Key Solutions S.A.C:</h2>
              <div class="logos">
                <img src="../assets/redEnlace.png" alt="Logo 1">
                <img src="../assets/bancoBisa.png" alt="Logo 2">
                <img src="../assets/bancoUnidad.png" alt="Logo 3">
                <img src="../assets/ecofuturo.png" alt="Logo 4">
                <img src="../assets/bancoEconomico.png" alt="Logo 5">
                <img src="../assets/bancoFie.png" alt="Logo 6">
                <img src="../assets/bancoSol.png" alt="Logo 7">
                <img src="../assets/bancoUnion.png" alt="Logo 8">
                <img src="../assets/bnb.png" alt="Logo 9">
                <img src="../assets/jesusCooperativa.png" alt="Logo 10">
                <img src="../assets/serviRed.png" alt="Logo 11">
              </div>
            </div>
          </div>
        </div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  mounted() {
    // Set a timer for the carousel to automatically switch slides every 5 seconds
    this.timer = setInterval(() => {
      const carousel = document.querySelector('#carouselExampleCaptions');
      const activeSlide = carousel.querySelector('.carousel-item.active');
      const nextSlide = activeSlide.nextElementSibling || carousel.querySelector('.carousel-item:first-child');
      const nextIndex = Array.from(carousel.querySelectorAll('.carousel-item')).indexOf(nextSlide);
      carousel.querySelector('.carousel-indicators [data-bs-target="#carouselExampleCaptions"][data-bs-slide-to="' + nextIndex + '"]').click();
    }, 7000);
    // Add an event listener to stop the timer when the user navigates away from the page
    window.addEventListener('beforeunload', this.clearTimer);
  },
  beforeUnmount() {
    // Clear the timer when the component is destroyed
    this.clearTimer();
    // Remove the event listener when the component is destroyed
    window.removeEventListener('beforeunload', this.clearTimer);
  },
  methods: {
    clearTimer() {
      clearInterval(this.timer);
    }
  }
}
</script>

<style scoped>
  /* Add some margin to the top and bottom of the carousel */


  /* Add some margin to the top and bottom of the text section */
  .text-section {
    margin-top: 20px;
    margin-bottom: 20px;
  }


  .clientes {

  
  padding: 20px;
}
  .logos {
  display: flex; /* use flexbox to align the logos */
  flex-wrap: wrap; /* allow the logos to wrap to the next line */
  justify-content: center; /* center the logos horizontally */
  align-items: center; /* center the logos vertically */
}



.logos img {
  max-width: 150px; /* set the maximum width of the logos to 100% */
  max-height: 150px; /* set the maximum height of the logos to 100% */
  margin: 10px; /* add some margin around the logos */
  /* filter: grayscale(100%); */
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
    margin-top: 30px;
    margin-bottom: 50px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease-in-out;
    padding-top: 30px;
    font-size: 18px;
    background-color: #f1f7ff;

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
  margin-top: 0px;
  margin-bottom: 40px;
  padding-top: 20px;
  padding-bottom: 20px;
}


.below-carousel{

  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  background: lightgrey;
}

.product-title{
  margin-bottom: 0px;
}

.carousel-item h5,
.carousel-item h5 b,
.carousel-item p {
  font-size: 28px; /* change the font size */
  color: #ffffff; /* change the text color */
  font-family: 'Open Sans', sans-serif; /* change the font family */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* add a shadow to the text */

}

.col-md-6 li{
  font-size: 20px;
}


/* .card-text{
  font-size: 18px;
  background-color: #4b6b9e;
  color: white;
} */




/* Set a minimum and maximum width for the images on small screens */
@media (max-width: 576px) {
  .card-img-top {
    min-width: 100px;
    max-width: 200px;
  }

  .d-block{
    min-width: 100px;
    max-width: 200px;
  }

  #carousel-1-img{
  min-width: max-content;
  min-height:350px;
  max-height: 350px;
}



#carousel-2-img{
  min-width: max-content;
  min-height:350px;
  max-height: 350px;
}

#carousel-3-img{
  min-width: max-content;
  min-height: 350px;
  max-height: 350px;
}
}

/* Set a minimum and maximum width for the images on medium screens */
@media (min-width: 576px) and (max-width: 768px) {
  .card-img-top {
    min-width: 150px;
    max-width: 250px;
  }
  .d-block{
    min-width: 120px;
    max-width: 250px;
  }

  #carousel-1-img{
  min-width: max-content;
  min-height: 300px;
  max-height: 300px;
}



#carousel-2-img{
  min-width: max-content;
  min-height: 300px;
  max-height: 300px;
}

#carousel-3-img{
  min-width: max-content;
  min-height: 300px;
  max-height: 300px;
}


}

/* Set a minimum and maximum width for the images on large screens */
@media (min-width: 768px) {
  .card-img-top {
    min-width: 200px;
    max-width: 400px;
  }
  .d-block{
    min-width: 300px;
    max-width: 400px;
  }

  #carousel-1-img{
  min-width: 100%;
  min-height:500px;
  max-height: 500px;
}



#carousel-2-img{
  min-width: 100%;
  min-height:500px;
  max-height: 500px;
}

#carousel-3-img{
  min-width: 100%;
  min-height:500px;
  max-height: 500px;
}


}
</style>