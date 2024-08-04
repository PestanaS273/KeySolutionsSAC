<template>
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h5>Key Solutions S.A.C</h5>
            <hr>
            <p>Key Solutions es una empresa con sede central en Lima - PERU que se dedica a la importación exportación de insumos especializados en el sector financiero con la finalidad de brindar soluciones con la mejor calidad a nuestros clientes en Perú y Bolivia.</p>
          </div>
          <div class="col-md-4">
            <h5>Nuestro Portafolio</h5>
            <hr>
            <div class="row">
              <ul>
                <div class="col">
                  <li><router-link to="/tarjetas-banca">Tarjetas Crédito Débito</router-link></li>
                  <li><router-link to="/tarjetas-empresa">Tarjetas Empresa</router-link></li>
                  <li><router-link to="/rollos">Rollos Térmicos</router-link></li>
                  <li><router-link to="/sobres-preimpresos">Sobres y Formularios</router-link></li>
                  <li><router-link to="/fundas-bloqueo">Sobres de Seguridad RFID</router-link></li>
                </div>
              </ul>
            </div>
          </div>
          <div class="col-md-4">
            <h5>Contactos</h5>
            <hr>
            <ul>
                <li><router-link to="/nosotros">Nosotros</router-link></li>
                <li>(+51) 949 284 735</li>
                <li>rpestana@keysolutionssac.com</li>
                <li>Av. Raúl Ferrero 1542 La Molina, Lima - Perú</li>
                <li>Key Solutions Perú S.A.C - RUC: 20612618179</li>
            </ul>
          </div>
        </div>
        <div class="row text-end">
        <div class="col-md-12">
          <div class="copyright" style="font-size: smaller;">
            © Todos los derechos reservados | Diseñado y desarrollado por <a href="https://www.linkedin.com/in/pestanasm/" target="_blank" style="text-decoration: underline;">Sebastian Pestana</a>
          </div>
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
    text-decoration: underline;
    color: #fff;
    

}

a:hover{
    color: grey;

}
  </style>
