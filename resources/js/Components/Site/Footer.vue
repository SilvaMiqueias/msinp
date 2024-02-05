<template xmlns="http://www.w3.org/1999/html">
  <section>
      <div class="footer">
          <footer class="py-3 my-4">
              <ul class="nav justify-content-center  border-bottom pb-3 mb-3">
                  <li class="nav-item">
                      <router-link class="router-link nav-link px-2 text-muted" to="/">Inicio</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link class="router-link nav-link px-2 text-muted" to="/about">Sobre</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link class="router-link nav-link px-2 text-muted" to="/contact">Contato</router-link>
                  </li>
              </ul>
              <p class="text-center text-muted">@ 2024 company, Inc</p>
          </footer>
      </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
 .footer{
     background-color: #BF0811;
     color: #FFFFFF;
     clear: both;
     padding: 20px;
 }

 .footer .nav-link {
     color: #FFFFFF !important;
 }

 .footer p{
     color: #FFFFFF !important;
 }
 .text-owner{
     padding-top: 10px;
 }
</style>
