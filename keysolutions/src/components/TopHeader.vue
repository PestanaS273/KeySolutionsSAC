<template>
  <header >
    <div class="container">
      <div class="row align-items-center">
        <div class="col-sm-4">
          <p class="small mb-0"><i class="fas fa-phone"></i> &#x1F4F1; 123-456-7890</p>
        </div>
        <div class="col-sm-4 text-center">
          <p class="small mb-0"><i class="fas fa-envelope"></i>&#x1F4E7; example@example.com</p>
        </div>
        <div class="col-sm-4 text-end">
          <a href="#" class="small"><i class="fab fa-linkedin"></i> LinkedIn</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TopHeader'
}
</script>

<style scoped>
/* Add your header styles here */

header {
  background-color: darkgrey;
  padding: 0.5px 0px;

}

header p {
  margin-bottom: 0px;
  margin-top: 0px;
}

header a {
  color: #212529;
  text-decoration: none;
}

header a:hover {
  color: grey;
  text-decoration: none;
}
</style>