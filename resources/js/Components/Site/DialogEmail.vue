<template>
    <Dialog v-model:visible="visible" key="dialogRef" @update:visible="closed"  :close-on-escape="false"   modal header="Agende Um Atendimento Personalizado"  :style="{ width: '50rem' }" >
        <form-email @cancel="closed"/>
    </Dialog>
</template>
<script>
import {defineComponent, inject, ref} from "vue";
import FormEmail from "@/Components/Site/FormEmail.vue";
import {mapGetters} from "vuex";

const dialogRef = inject('dialogRef');


export default defineComponent({
    components: {FormEmail},

    data(){
        return {
            visible: false,
        }
    },

    computed: {
        ...mapGetters({
            getDialog: "getDialog",
        })
    },

    created() {
        this.visible = true;
    },

    methods: {

        closed(){
            this.visible = false;
            this.$store.dispatch('openDialog', false);
        },

        open(){
            this.visible = true;
        }
    },

    watch: {
      getDialog(newValue, oldValue){
          if(newValue === true){
              this.open();
          }
          console.log('novo' + newValue);
      }
    }

})
</script>
<style scoped></style>
