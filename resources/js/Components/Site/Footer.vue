<template xmlns="http://www.w3.org/1999/html">
  <section>
      <div class="footer">
          <div class="container py-4 py-lg-5">
              <div class="row row-cols-2 justify-center row-cols-md-4">
                  <div  class="col-12 col-md-3">
                      <h1 class="title">menu</h1>
                      <div class="itens mt-2">
                          <router-link class="router-link  text-muted" to="/">Inicio</router-link>
                          <router-link class="router-link  text-muted" to="/servico">Serviços</router-link>
                          <router-link class="router-link  text-muted" to="/contato">Contato</router-link>
                      </div>
                  </div>
                  <div class="col-12 col-md-3">
                      <h1 class="title">Contato</h1>
                      <div class="itens mt-2">
                          <a href="https://api.whatsapp.com/message/DK27BKXC6RU7K1?autoload=1&app_absent=0" target="_blank"><span class="pi pi-whatsapp"></span> (62) 9124-7722</a>
                          <a @click="openDialog"><span class="pi pi-envelope"></span> megainsp@gmail.com</a>
                      </div>
                  </div>
              </div>
              <hr class="mt-1 mb-1" style="background-color: #FFFFFF"/>
              <p class="text-center text-muted">@ {{year}} MegaInsp</p>
          </div>

      </div>
  </section>
</template>

<script>
import {ref} from "vue";

export default {

    data(){

        return {year: ref( new Date().getFullYear())}
    },

    methods: {
        openDialog() {
            this.$store.dispatch('openDialog', true);
        },
        getYear(){

        }
    }

}
</script>

<style scoped>
 .footer{
     background-color: #BF0811;
     color: #FFFFFF;
     clear: both;
     padding: 20px;
 }

 .title{
     font-size:20px;
     color: #FFFFFF;
     font-weight: 900;
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

 .itens{
     display: grid;
     gap: 8px;
 }

 .itens a{
     text-decoration: none;
     display: flex;
     gap: 10px;
     color: #FFFFFF;
     align-items: baseline;
     cursor: pointer;
 }

 .router-link{
     padding: 0 !important;
     text-decoration: none;
     color: #FFFFFF !important;
 }

</style>
