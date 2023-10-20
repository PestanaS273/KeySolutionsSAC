<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top" :class="{ 'navbar-smaller': isNavbarSmaller }">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand"><h2><b>Key Solutions S.A.C</b></h2></router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a href="#" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Productos
            </a>
            <ul class="dropdown-menu">
              <li><router-link to="/tarjetas" class="dropdown-item">Tarjetas</router-link></li>
              <li><router-link to="/rollos" class="dropdown-item">Rollos</router-link></li>
              <li><router-link to="/servicios" class="dropdown-item">Servicios</router-link></li>
              <li><hr class="dropdown-divider"></li>
              <li><router-link to="/products" class="dropdown-item">Todos los productos</router-link></li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contacto</router-link>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Buscar..." aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Buscar</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isNavbarSmaller: false,
      lastScrollPosition: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition > this.lastScrollPosition) {
        this.isNavbarSmaller = true;
      } else {
        this.isNavbarSmaller = false;
      }
      this.lastScrollPosition = currentScrollPosition;
    }
  }
}
</script>

<style scoped>
/* Add your header styles here */
.navbar {
  transition: all 0.3s ease-in-out;
}

.navbar-smaller {
  height: 60px;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
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

</style>