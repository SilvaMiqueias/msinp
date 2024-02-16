<template>
    <div class="p-b-30 p-t-30">
        <h1 class="text-center title">Estamos esperando o seu contato</h1>

        <div class="context row">
            <div class="col-md-9 card">
                <form-email></form-email>
            </div>
            <div class="col-md-3">
                    <div class="image card">
                        <img src="/image/site/qr-code.png">
                    </div>
            </div>
        </div>
    </div>
</template>
<script>
import FormEmail from "@/Components/Site/FormEmail.vue";

export default {
    components: {
        FormEmail
    }
}

</script>

<style scoped>
.title{
    font-size: 30px;
    font-weight: 900;
    text-align: center;
    color: #BF0811 !important;
}

.context{
    padding: 5% 10%;
}

.row{
    @media (max-width: 800px) {
        gap: 32px;
    }
}

.context .title{
    font-size: 18px;
    font-weight: 900;
    text-align: justify;
    color: #BF0811;
}

.context .card{
    padding: 20px 40px;
    border-radius: 3px !important;
}

.image img{
    height: 30%;
    width: 100%;
}

.p-b-30{
    padding-bottom: 32px;
}

.p-t-30{
    padding-top: 32px;
}


</style>
