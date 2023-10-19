<template>
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h5>Key Solutions S.A.C</h5>
            <hr>
            <p>Key Solutions es una empresa situada en... que se dedica a... con la finalidad de brindar mejor calidad...</p>
          </div>
          <div class="col-md-4">
            <h5>Nuestro Portafolio</h5>
            <hr>
            <ul>
              <li><router-link to="#">Tarjetas Personalizadas</router-link></li>
              <li><router-link to="#">Tarjetas Neutras</router-link></li>
              <li><router-link to="#">Tarjetas Con panel Rasca</router-link></li>
              <li><router-link to="#">Tarjeta LLavero</router-link></li>
              <li><router-link to="#">Tarjeta con etiqueta removible</router-link></li>
            </ul>
          </div>
          <div class="col-md-4">
            <h5>Contactos</h5>
            <hr>
            <ul>
                <li><router-link to="/about">Nosotros</router-link></li>
                <li>(+51) 123-456-789</li>
                <li>ejemplo@gmail.com</li>
                <li>fax</li>
                <li>Direccion...</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'TopFooter'
  }
  </script>
  
  <style scoped>
li{
    list-style: none;
    text-align:start;
}
footer{
    background-color: #212529;
    color: #fff;
    padding: 30px 0px;
    margin-top: 50px;
}

a{
    text-decoration: none;
    color: #fff;

}

a:hover{
    color: grey;

}
  </style>
