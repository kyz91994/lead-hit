<template>
  <div class="auth-page">
    <h1 class="auth-page__title">LeadHit</h1>
    <auth-form @submitId="submitId"/>
  </div>
</template>

<script>
import AuthForm from "@/components/AuthForm";
import {mapActions, mapMutations, mapState} from 'vuex'

export default {
  name: "AuthPageWithStore",
  components: {AuthForm},
  methods: {
    ...mapMutations({
      setAuth: 'setAuth',
      setLoading: 'setLoading',
    }),
    ...mapActions({
      requestLead: 'requestLead'
    }),
    submitId(id) {
      this.requestLead(id).then(() => {
        this.$router.push('/analytic')
      })
    }
  },
  computed: {
    ...mapState({
      isAuth: state => state.isAuth,
      isAuthLoading: state => state.isAuthLoading,
    }),
  },
  mounted() {
    if (localStorage.getItem('leadhit-site-id')) {
      this.setAuth(true)
      this.$router.push('/analytic')
    }
  }

}
</script>

<style scoped lang="scss">
.auth-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  align-self: center;
  justify-self: center;

  &__title {
    font-size: 72px;
  }
}

</style>