<template>
  <nav class="navbar navbar-expand-lg sticky-top">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand"><img src="../assets/logoKey.png" alt="Logo Key Solutions S.A.C" id="logoKey"></router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/nosotros" class="nav-link"  @click="closeNavbar">Nosotros </router-link>
          </li>
          <li class="nav-item dropdown">
            <a href="#" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Productos y Servicios 
            </a>
            <ul class="dropdown-menu">
              <li><router-link to="/tarjetas-banca" class="dropdown-item" @click="closeNavbar">Tarjetas Banca</router-link></li>
              <li><router-link to="/tarjetas-empresa" class="dropdown-item"  @click="closeNavbar">Tarjetas Empresa</router-link></li>
              <li><router-link to="/rollos" class="dropdown-item"  @click="closeNavbar">Rollos Termicos</router-link></li>
              <li><router-link to="/sobres-preimpresos" class="dropdown-item"  @click="closeNavbar">Formularios y Sobres</router-link></li>
              <li><router-link to="/fundas-bloqueo" class="dropdown-item"  @click="closeNavbar">Fundas de Bloqueo RFID</router-link></li>
              <li><hr class="dropdown-divider"></li>
              <li><router-link to="/products" class="dropdown-item"  @click="closeNavbar">Todos los productos</router-link></li>
            </ul>
          </li>

          
          <li class="nav-item">
            <router-link to="/contact" class="nav-link"  @click="closeNavbar">Contacto</router-link>
          </li>
        </ul>
        <!-- <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Buscar..." aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Buscar</button>
        </form> -->
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
  closeNavbar() {
    const navbarToggler = this.$el.querySelector('.navbar-toggler');
    if (navbarToggler && !navbarToggler.classList.contains('collapsed')) {
      navbarToggler.click();
    }
  }
}
}
</script>

<style scoped>
/* Add your header styles here */
.navbar {
background-color: #fff;

}


.btn-outline-success{
  color: #fff;
  background-color: grey;
  border-color: grey;
  transition: 0.2s ease-out, border-color 0.2s ease-out;
}
.btn-outline-success:hover{
  background-color: grey;
  border-color: #fff;
  transition: 0.2s ease-out, border 0.2s ease-out;
  transform: scale(1.1);
}

.nav-item{
  color: black;
  transition: 0.2s ease-out, border 0.2s ease-out;
}
.nav-item:hover{
  color:rgb(101, 101, 101);
  transition: 0.2s ease-out, border 0.2s ease-out;
  transform: scale(1.1);
}

.nav-link {
  color: black;
  transition: color 0.2s ease-out, transform 0.2s ease-out;
}

.nav-link:hover {
  color: rgb(101, 101, 101);
  transform: scale(1.05);
}

.navbar-brand{
  color: black;
  
}

.dropdown-item{
  color: black;
}
.dropdown-item:hover{
  color: rgb(101, 101, 101);
  transform: scale(1.02);
  transition: transform 0.2s ease-out;
  background-color: transparent;

}


/* Set a minimum and maximum width for the images on small screens */

@media (max-width: 576px) {

  #logoKey{
    width: 200px;
    height: 60px;
  }
}



/* Set a minimum and maximum width for the images on medium screens */
@media (min-width: 576px) and (max-width: 768px) {
  #logoKey{
    width: 200px;
    height: 60px;
  }
}


/* Set a minimum and maximum width for the images on large screens */
@media (min-width: 768px) {
  #logoKey{
    width: 200px;
    height: 60px;
  }
}


</style>

