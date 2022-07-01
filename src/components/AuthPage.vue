<template>
  <div class="auth-page">
    <h1 class="auth-page__title">LeadHit</h1>
    <auth-form @submitId="submitId"/>
  </div>
</template>

<script>
import axios from 'axios'
import AuthForm from "@/components/AuthForm";

export default {
  name: "AuthPage",
  components: {AuthForm},
  methods: {
    submitId(id) {
      this.requestLead(id)
    },
    async requestLead(valueId) {
      let self = this
      try {
        const response = await axios.get('https://track-api.leadhit.io/client/test_auth', {
          headers: {
            'Api-Key': '5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo',
            'Leadhit-Site-Id': `${valueId}`
          }
        });
        if (response.data.message === 'ok') {
          this.$store.state.isAuth = true
          localStorage.setItem('leadhit-site-id', '5f8475902b0be670555f1bb3');
          self.$router.push('/analytic')
        } else {
          alert('error')
        }
      } catch (e) {
        alert(e.message)
      }
    }
  },
  mounted() {
    if (!!localStorage.getItem('leadhit-site-id')) {
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
  }
}

</style>