<template>
  <div class="navbar">
    <div class="navbar__image">
      <div class="navbar__logo"></div>
    </div>
    <div class="navbar__btns">
      <custom-button @click="this.$router.push('/')" v-if="!this.$route">Авторизация</custom-button>
      <custom-button @click="$router.push('/analytic')"
                     v-if="this.$route.path!=='/analytic'"
                     class='link'
      >Аналитика
      </custom-button>
      <custom-button @click="logout"
                     v-if="this.$store.state.isAuth"
                     class='link'
      >Выход
      </custom-button>
    </div>
  </div>
</template>

<script>
import CustomButton from "@/components/UI/CustomButton";

export default {
  components: {CustomButton},
  methods: {
    logout() {
      localStorage.removeItem('leadhit-site-id')
      this.$store.state.isAuth = false
      this.$router.push('/')
    }
  },

}
</script>

<style scoped lang="scss">
.navbar {
  width: 100%;
  height: 60px;
  background-color: lightgray;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;

  &__image {
    max-width: 100%;
  }

  &__logo {
    width: 180px;
    height: 50px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url("../assets/leadhit-logo.svg");
  }
}

.navbar__btns {
  margin-left: auto;
}

.link {
  max-width: 284px;
  min-width: 162px;
  height: 36px;
  font-size: 16px;
  border-radius: 5px;
  transition: 0.3s;
  background: none;
  border: 1px solid #ff4402;
  color: black;

  &:hover {
    color: #FFFFFF;
  }
}

</style>
