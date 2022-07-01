<template>
  <div class="navbar">
    <div class="navbar__btns">
      <custom-button @click="this.$router.push('/')" v-if="!this.$route">Авторизация</custom-button>
      <custom-button @click="$router.push('/analytic')" v-if="this.$route.path!=='/analytic'">Аналитика</custom-button>
      <custom-button @click="logout" v-if="this.$store.state.isAuth">Выход</custom-button>
    </div>
  </div>
</template>

<script>
import CustomButton from "@/components/UI/CustomButton";

export default {
  components: {CustomButton},
  methods:{
    logout(){
      localStorage.removeItem('leadhit-site-id')
      this.$store.state.isAuth = false
      this.$router.push('/')
    }
  },

}
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: lightgray;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.navbar__btns {
  margin-left: auto;
}
</style>
