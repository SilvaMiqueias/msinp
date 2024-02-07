<script setup>
import TextInput from "@/Components/TextInput.vue";
import {useForm} from "@inertiajs/vue3";
import InputLabel from "@/Components/InputLabel.vue";
import {ref} from "vue";
import Store from "@/Store/store";


const form = useForm({
    name: null,
    email: null,
    phone: null,
    description: null
});

form.setError({
    name: 'O campo nome é obrigatório.',
    email: 'O campo email é obrigatório.',
    phone: 'O campo telefone é obrigatório.',
    description: 'O campo assunto é obrigatório.'
});

form.defaults({
    name: 'Updated Example',
    email: 'updated-default@example.com',
})

const emit = defineEmits(['cancel', 'mens']);
const store = Store;

import {useToast} from "primevue/usetoast";
const toast = useToast();

let loading = ref(false);
function sendEstimate(){
     loading.value = true;
     setTimeout(() => loading.value = false, 4000);
}

function submit() {
    // router.post('/mail', form);
    form.post('/mail', {
        preserveScroll: true,
        onStart: () => loading.value = true,
        onFinish: () => loading.value = false,
        onSuccess: params => {
            store.dispatch('startMessage', {saverity: 'success', context: 'Deu certo!'});
            form.reset();
            emit('cancel');
            toast.add({ severity: 'success', summary: 'Mensagem Enviada!', detail: 'Em breve entraremos em contato!', life: 3000 });
        },
        onError:() => {
            store.dispatch('startMessage', {saverity: 'error', context: 'Ocorreu um erro ao enviar as informações!'});
            form.reset();
            emit('cancel');
            toast.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro!', life: 3000 });
        },
    })
}



function watch(){
    form.transform(vue => {
    })
}

</script>


<template>
        <div class="send-email" v-if="loading" >
          <h1 class="title">Informações sendo enviadas!</h1>
          <ProgressSpinner/>
        </div>
       <div  v-else>
           <form @submit.prevent="submit" >
               <InputLabel for="name" value="Nome" />
               <TextInput
                   id="name"
                   type="text"
                   class="mt-1 block w-full"
                   v-model="form.name"
                   required
                   autocomplete="name"
               />
               <div  class="error" v-if="form.errors.name">{{ form.errors.name }}</div>
               <InputLabel for="email" value="E-mail" />
               <TextInput
                   id="email"
                   type="email"
                   class="mt-1 block w-full"
                   v-model="form.email"
                   required
                   autocomplete="email"
               />
               <div class="error" v-if="form.errors.email">{{ form.errors.email }}</div>
               <InputLabel for="phone" value="Telefone" />
               <InputMask id="phone" v-model="form.phone"   required mask="(99) 99999-9999" placeholder="(00) 00000-0000" />
               <div class="error" v-if="form.errors.phone">{{ form.errors.phone }}</div>

               <InputLabel for="description" value="Assunto" />
               <textarea  id="description"
                          cols="5"
                          rows="5"
                          class="mt-1 block w-full"
                          v-model="form.description"
                          required
                          autocomplete="description" />
               <div class="error" v-if="form.errors.description">{{ form.errors.description}}</div>
               <div class="buttons">
                   <button @click="$emit('cancel')"  type="reset" class="btn-cancel">
                       Cancelar
                   </button>
                   <button :disabled="form.processing"  class="btn-submit" type="submit">
                       Enviar
                   </button>
               </div>
           </form>
       </div>
</template>


<style scoped>

form{
    display: grid;
    gap: 8px;
}

label{
    margin-bottom: 0;
}

.buttons{
    display: flex;
    flex-direction: row;
    gap: 32px;
}

.btn-submit{
    border: 1px solid #ED1B23;
    color: #ED1B23;
    background-color: #ffffff;
    width: 100px;
    height: 42px;
    padding: 10px;
    border-radius: 48px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
}

.btn-cancel{
    background-color: #ED1B23;
    color: #ffffff;
    width: 100px;
    height: 42px;
    padding: 10px;
    border-radius: 48px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
}

.send-email{
  display: grid;
  gap: 32px;
  align-items: center;
  justify-content: center;
}

.title{
  font-size: 25px;
  font-weight: 700;
  color: #1a202c;
}

.error{
    font-size: 10px;
    color:  #ED1B23;
    font-weight: 700;
}

</style>
