<template>
    <div class="container-fluid"  ref="containerRef">
        <Mensagem></Mensagem>
        <Header/>
        <n-notification-provider>
        </n-notification-provider>
        <dialog-email></dialog-email>
        <router-view class="router-view"></router-view>
        <a href="https://api.whatsapp.com/message/DK27BKXC6RU7K1?autoload=1&app_absent=0" class="float" target="_blank">
            <i class="pi pi-whatsapp my-float"></i>
        </a>
        <Footer/>
    </div>
</template>

<script setup>
import Header from "@/Components/Site/Header.vue";
import Footer from "@/Components/Site/Footer.vue";
import { useNotification} from 'naive-ui';
import {defineComponent, ref} from "vue";
import Mensagem from "@/Components/Site/Mensagem.vue";
import DialogEmail from "@/Components/Site/DialogEmail.vue";



defineComponent({
    setup () {
        const notification = useNotification();
        const containerRef = ref(void 0);

        return {
            warning () {
                notification.warning({
                    content: '...'
                })
            },
            containerRef
        }
    }
})

function sendWhats(){
    alert('envia mensagem');
}

</script>



<style scoped>
.container-fluid {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.router-view {
    flex: 1;
}

.float{
    position:fixed;
    width:40px;
    height:40px;
    bottom:40px;
    right:40px;
    background-color: #075e54;
    color:#FFF;
    border-radius:50px;
    text-align:center;
    font-size:15px;
    z-index:100;
}

.my-float{
    margin-top:12px;
}

</style>
