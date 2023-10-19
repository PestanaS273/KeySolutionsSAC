<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <h2>Contactanos</h2>
                <p>Contacto para conocer nuestra calidad y nuestros precios. Estaremos agradecidos por su interes</p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <img src="../assets/logo.png" width="500px" alt="" >
            </div>

        
            <div class="col-md-5 mx-auto">
                <br><br>
                <form>
                    
                    <div class="row mb-3">
                        <label for="inputEmail3" class="col-sm-2 col-form-label" >Correo</label>
                        <div class="col-sm-10">
                        <input type="email" class="form-control" id="inputEmail3" placeholder="ejemplo@gmail.com" >
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-2">
                            <input type="text" class="form-control" placeholder="+51" aria-label="Codigo País">
                        </div>
                        <div class="col-sm-6">
                        <input type="phone" class="form-control" id="inputPassword3" >
                        </div>
                    </div>
                    <fieldset class="row mb-3">
                        <legend class="col-form-label col-sm-2 pt-0">Producto</legend>
                        <div class="col-sm-10">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="gridRadios" id="gridCheck1" value="option1">
                            <label class="form-check-label" for="gridRadios1">
                            Tarjetas
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="gridRadios" id="gridCheck2" value="option2">
                            <label class="form-check-label" for="gridRadios2">
                            Rollos
                            </label>
                        </div>
                        <div class="form-check disabled">
                            <input class="form-check-input" type="checkbox" name="gridRadios" id="gridCheck3" value="option3">
                            <label class="form-check-label" for="gridRadios3">
                            Servicios
                            </label>
                        </div>
                        </div>
                    </fieldset>
                    <div class="row mb-3">
                        <div class="col-sm-10 ">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck1">
                            <label class="form-check-label" for="gridCheck1">
                            Deseo recibir notificaciones a mi correo
                            </label>
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
export default {
    name: 'ContactView',
}
</script>

<style scoped>

</style>
