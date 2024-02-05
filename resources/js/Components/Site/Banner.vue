<template>
   <section>
       <n-carousel autoplay>
           <img
               class="carousel-img"
               src="/image/site/tudo_relacionado_as_solicitacoes_do_corpo_de_bombeiros.png"
           >
           <img
               class="carousel-img"
               src="/image/site/sistemas_completos_contra_incendio.png"
           >
       </n-carousel>
   </section>
   <section class="mt-4 mb-4 container">
       <div class="content-card">
           <div class="card" style="">
               <div class="card-body">
                   <div>
                       <i class="pi pi-user"></i>
                   </div>
                   <h5 class="card-title">Suporte</h5>
                   <p class="card-text">Equipe Dedicada para lhe atender.</p>
               </div>
           </div>
           <div class="card" style="">
               <div class="card-body">
                   <div>
                       <i class="pi pi-wallet"></i>
                   </div>
                   <h5 class="card-title">Pagamento Facilitado</h5>
                   <p class="card-text">Faça seu orçamento!</p>
               </div>
           </div>
           <div class="card" style="">
               <div class="card-body">
                   <div>
                       <i class="pi pi-shopping-cart"></i>
                   </div>
                   <h5 class="card-title">Serviços</h5>
                   <p class="card-text">Temos a solução para sua empresa.</p>
               </div>
           </div>
           <div class="card" style="">
               <div class="card-body">
                   <div>
                       <i class="pi pi-wrench"></i>
                   </div>
                   <h5 class="card-title">Equipamentos</h5>
                   <p class="card-text">Grande variedade em equipamentos.</p>
               </div>
           </div>
       </div>

   </section>

</template>

<script setup>
import {NCarousel} from 'naive-ui'
</script>

<style scoped>

html {
    font-size: 14px;
}

.carousel-img {
    width: 100%;
    object-fit: cover;
}


.content-card{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    align-content: center;

    @media (max-width: 800px) {
        flex-direction: column;
    }
}

.card {
    //flex: 1 1 auto;
    padding: 20px;
    width: 18rem;
    @media (max-width: 800px) {
        width: 100%;
    }
}

.card-body{
    display: grid;
    gap: 20px;
    div,h5, p {
        margin-bottom: 0;
        padding: 0;
    }
}

.card-title{
    font-size: 20px;
    font-weight: 900;
    text-align: justify;
    color: #BF0811;
}

i{
    background-color: #ffd200;
    padding: 20px;
    border-radius: 10px;
}



</style>
