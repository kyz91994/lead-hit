<template>
  <div class="auth-page">
    <h1 class="auth-page__title">LeadHit</h1>
    <form class="auth-page__form"
          @submit.prevent>
      <custom-input type="text"
             class="auth-page__field"
             placeholder="введите id сайта"
             @input="error=false"
             v-model="inputValue"/>
      <div class="error" v-if="error">id сайта должен содержать 24 символа</div>
      <custom-button class="auth-page__enter-btn" @click="submitId">Войти</custom-button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import CustomInput from "@/components/UI/CustomInput";
import CustomButton from "@/components/UI/CustomButton";

export default {
  name: "AuthPage",
  components: {CustomButton, CustomInput},
  data() {
    return {
      inputValue: '',
      error: false,
      auth: false
    }
  },
  methods: {
    submitId() {
      if ((this.inputValue.length !== 24)) {
        this.error = true
      } else {
        this.requestLead(this.inputValue)
      }
    },
    async requestLead(value) {
      let self = this
      try {
        const response = await axios.get('https://track-api.leadhit.io/client/test_auth', {
          headers: {
            'Api-Key': '5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo',
            'Leadhit-Site-Id': value
          }
        });
        if (response.data.message === 'ok') {
          localStorage.setItem('leadhit-site-id', '5f8475902b0be670555f1bb3');
          this.auth = true
          self.$router.push('/analytic')
        } else {
          alert('error')
        }
      } catch (e) {
        alert(e.message)
      }
    }
  },
  watch: {
  }
}
</script>

<style scoped lang="scss">
.auth-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  &__title {

  }

  &__form {
    display: flex;
    border: 1px solid black;
    padding: 10px;
    gap: 10px
  }

  &__field {
    padding: 10px;
    border: 1px solid dodgerblue;
  }

  &__enter-btn {
    background-color: cyan;
    width: 100px;
    border-radius: 5px;
  }
}

.error {
  color: red;
  border: 1px solid red;
}
</style>