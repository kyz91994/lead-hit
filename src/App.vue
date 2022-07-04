<template>
  <nav-bar class="navbar"/>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
.container {
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
</style>

<script>
import NavBar from "@/components/NavBar";

export default {
  components: {NavBar},
  mounted() {
    if (localStorage.getItem('leadhit-site-id')) {
      this.$store.state.isAuth = true
    }
  }
}
</script>