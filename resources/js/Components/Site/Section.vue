<template>
    <div>
        <banner></banner>
    </div>
</template>

<script>
import Banner from "@/Components/Site/Banner.vue";
import { mapGetters } from 'vuex'
import DialogEmail from "@/Components/Site/DialogEmail.vue";

export default {
  components: {
      DialogEmail,
      Banner
  },
    computed: {
      ...mapGetters({
          textOne: "getTextOne",
          textTwo: "getTextTwo"
      })
    },

    methods: {
      // ...mapMutations({
      //   textOne: 'setText1',
      //   textTwo: 'setText2'
      // })
      // ...mapActions([])
    },

    // created() {
    //   this.$store.dispatch('changeText1', 'Bora');
    //
    // }

}
</script>

<style scoped></style>
