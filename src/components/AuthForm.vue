<template>
  <form class="auth-form"
        @submit.prevent>
    <div class="auth-form__field-id">
      <custom-input type="text"
                    placeholder="введите id сайта"
                    @input="error=false"
                    v-model.trim="inputValue"
                    :class="{'custom_input error-input': this.error}"
      />
      <div class="error" v-if="error">id сайта должен содержать 24 символа</div>
    </div>
    <custom-button @click="submitId">Войти</custom-button>
  </form>
</template>

<script>
export default {
  name: "AuthForm",
  data() {
    return {
      inputValue: '',
      error: false
    }
  },
  methods: {
    submitId() {
      if (this.inputValue.length !== 24) {
        this.error = true
      } else {
        this.$emit('submitId', this.inputValue)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.auth-form {
  display: flex;
  flex-direction: column;
  gap: 30px;
  min-width: 332px;
  padding: 24px;
  background: #FFFEFB;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;

  &__field-id {
    height: 60px;
    gap: 30px;
  }
}

.error {
  text-align: center;
  margin-top: 10px;
  color: red;
  font-weight: 400;
  font-size: 12px;
}
</style>