<template>
  <input :type="type"
         class="custom_input"
         :value="modelValue"
         @input="updateInput"
  >
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    modelValue: [String, Number],
    type: [String]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }

}
</script>

<style scoped lang="scss">
.custom_input {
  padding: 14px 18px;
  width: 284px;
  height: 36px;
  border-radius: 4px;
  background-color: #FFFEFB;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  color: #3F3F3F;

  &::-webkit-input-placeholder {
    color: #B4B4B4;
    font-size: 12px;
    font-weight: 400;
  }

  &::-moz-placeholder {
    font-size: 12px;
    color: #B4B4B4;
    font-weight: 400;
  }

  &:-ms-input-placeholder {
    color: #B4B4B4;
    font-size: 12px;
    font-weight: 400;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}

.error-input {
  border: 1px solid #FF8484;
}
</style>