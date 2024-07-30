<template>
    <div>
      <div class="row">
        <div class="col-md-12">

        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
            
          <img src="../assets/logo.png" width="500px" alt="">
        </div>
        <div class="col-md-5 mx-auto">
            <h2>Contactanos</h2>
            <p class="description">Contacto para conocer nuestra calidad y nuestros precios. Estaremos agradecidos por su interés.
            </p>
          <br>
          <form ref="form" @submit.prevent="sendEmail">
            <div class="row mb-3">
                <label for="inputName" class="col-sm-2 col-form-label">Nombre</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="inputName" name="user_name" placeholder="" v-model="form.name">
                </div>
            </div>
            <div class="row mb-3">
                <label for="inputLastName" class="col-sm-2 col-form-label">Apellido</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="inputLastName" name="user_lastname" placeholder="" v-model="form.lastname">
                </div>
            </div>
            <div class="row mb-3">
                <label for="inputEmail" class="col-sm-2 col-form-label">Correo</label>
                <div class="col-sm-10">
                <input type="email" class="form-control" id="inputEmail" name="user_email" placeholder="ejemplo@gmail.com" v-model="form.email">
                </div>
            </div>
            <div class="row mb-3">
                <label for="inputPhone" class="col-sm-2 col-form-label">Teléfono</label>
                <div class="col-sm-2">
                <input type="text" class="form-control" placeholder="+51" aria-label="Código País">
                </div>
                <div class="col-sm-6">
                <input type="phone" class="form-control" id="inputPhone" name="user_phone" v-model="form.phone">
                </div>
            </div>
            <fieldset class="row mb-3">
                <legend class="col-form-label col-sm-2 pt-0">Producto</legend>
                <div class="col-sm-10">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="products" id="gridCheck1" value="Tarjetas" v-model="form.products">
                    <label class="form-check-label" for="gridCheck1">Tarjetas</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="products" id="gridCheck2" value="Rollos" v-model="form.products">
                    <label class="form-check-label" for="gridCheck2">Rollos</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="products" id="gridCheck3" value="Servicios" v-model="form.products">
                    <label class="form-check-label" for="gridCheck3">Servicios</label>
                </div>
                </div>
            </fieldset>
            <div class="row mb-3">
                <div class="col-sm-10">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck4" name="subscribe" v-model="form.subscribe">
                    <label class="form-check-label" for="gridCheck4">Deseo recibir información a mi correo</label>
                    <br><br>
                </div>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Enviar</button>
            </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import emailjs from '@emailjs/browser';
  
  export default {
    data() {
      return {
        form: {
          name: '',
          lastname: '',
          email: '',
          phone: '',
          products: [],
          subscribe: false
        }
      };
    },
    methods: {
        sendEmail() {
            emailjs
                .sendForm(
                process.env.VUE_APP_SERVICE_ID, 
                process.env.VUE_APP_TEMPLATE_ID, 
                this.$refs.form, 
                process.env.VUE_APP_PUBLIC_KEY
                )
                .then(
                () => {
                    console.log('SUCCESS!');
                    alert('Formulario enviado exitosamente');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    alert('Hubo un error al enviar el formulario');
                }
                );
            }

    }
  };
  </script>
  
  

<style scoped>

.description {
    font-size: 1.6rem;
}

@media (max-width: 576px) {
    img{
        width: 100%;
    }
}

/* Set a minimum and maximum width for the images on medium screens */
@media (min-width: 576px) and (max-width: 768px) {
    img{
        width: 100%;
    }
}

/* Set a minimum and maximum width for the images on large screens */
@media (min-width: 768px) {
    img{
        width: 100%;
    }
}
</style>