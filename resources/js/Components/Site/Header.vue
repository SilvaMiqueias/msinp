<template>
    <header>
      <div v-if="$isMobile()">
          <div class="card flex">
              <Sidebar  v-model:visible="visible" header="" :pt="sidebar">
                  <template  style="background-color: #FFFFFF"  #header>
                          <div class="header-mobile ml-3">
                              <img src="../../../../public/image/site/logo_04_megainsp.png" id="logo">
                          </div>
                  </template>

                  <ul class="list-none p-0 m-0 overflow-hidden">
                          <li>
                              <a style="text-decoration: none" v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                  <i class="pi pi-home mr-2 route-active"></i>
                                  <router-link class="router-link" to="/">Inicio</router-link>
                              </a>
                          </li>
                          <li>
                              <a style="text-decoration: none" v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                  <i class="pi pi-info mr-2 route-active"></i>
                                  <router-link class="router-link" to="/about">Sobre</router-link>
                              </a>
                          </li>
                          <li>
                              <a style="text-decoration: none" v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                  <i class="pi pi-phone mr-2 route-active"></i>
                                  <router-link class="router-link" to="/contact">Contato</router-link>
                              </a>
                          </li>
                  </ul>
              </Sidebar>
              <div class="menu-mobile">
                  <img src="../../../../public/image/site/logo02megainsp.png" id="logo">
                  <a  @click="visible = true"> <span class="pi pi-bars"></span></a>
              </div>

          </div>
      </div>
       <div v-else>
           <div class="logos">
               <img src="../../../../public/image/site/logo02megainsp.png" id="logo">
               <!--            <img src="../../../../public/image/site/tarjeta_megainsp.png" id="target-logo">-->
               <div class="target-logo">
                   <h1>FALE CONOSCO E AGENDE UM ATENDIMENTO PERSONALIZADO </h1>
                   <div>
                       <a @click="openDialog"><span class="pi pi-envelope"></span> megainsp@gmail.com</a>
                       <a href=""><span class="pi pi-whatsapp"></span> (62) 99124-7722 </a>
                   </div>
               </div>
           </div>
           <div class="menu">
               <nav   class="navbar">
                   <a class="link navbar-brand mr-auto">

                   </a>
                   <div class="links mr-2">
                       <router-link class="router-link" to="/">Inicio</router-link>
                       <router-link class="router-link" to="/about">Sobre</router-link>
                       <router-link class="router-link" to="/contact">Contato</router-link>
                   </div>
               </nav>
           </div>
       </div>
    </header>
</template>

<script>
import {ref} from "vue";
import sidebar from "../../../../public/presets/sidebar";

export default {
    computed: {
        sidebar() {
            return sidebar
        }
    },

    data(){
        return { visible: ref(false)}
    },

    methods: {
        openDialog(){
           this.$store.dispatch('openDialog', true);
        }
    }
}
</script>

<style scoped>
 header{
     background-color: #ffffff;
 }

 .links{
     display: flex;
     gap: 32px;
 }

 .links .router-link{
     color: #ED1B23;
     font-weight: 500;
 }

 .router-link:hover{
     color: #BF0811;
     text-decoration: none;
     font-weight: 700;
 }

 .navbar-brand{
     width: 100px
 }

 .route-active-mobile{
     color: #ae510f !important;
 }

 .route-active{
     color: #BF0811 !important;
 }

 .logos{
     display: flex;
     flex-direction: row;
     justify-content: space-between;
     height: 100px;
     padding: 15px
 }


 .target-logo{
     display: grid;
     gap: 10px;
 }

 .target-logo h1 {
         background-color: yellow;
         color: #BF0811;
         font-weight: 900;
         font-size: 18px;
         text-align: center;
         padding: 10px;
 }

 .target-logo div{
    display: flex;
    gap: 32px;
     justify-content: flex-end;
 }

 .target-logo div a{
     display: flex;
     gap: 10px;
     align-items: center;
     text-decoration: none;
     cursor: pointer;
     color: #ED1B23;
     font-weight: 500;
 }

 .target-logo div a:hover{
     color: #BF0811 !important;
     font-weight: 700 !important;
 }

 .menu-mobile{
     display: flex;
     flex-direction: row;
     justify-content: space-between;
     align-items: center;
     padding: 10px;
 }

 .menu-mobile img{
     width: 150px;
 }

 .menu-mobile a{
     cursor: pointer;
 }

 .menu-mobile a span{
     padding: 10px;
     border: 1px solid;
     border-radius: 5px;
 }

 .header-mobile{
     width: 80px;
 }

 .header-mobile img{
     width: 100%;
 }

</style>
