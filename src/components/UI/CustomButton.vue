<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    disabled: {
      type: [Boolean]
    }
  }
}
</script>

<style scoped lang="scss">
.btn {
  max-width: 284px;
  min-width: 162px;
  height: 36px;
  font-size: 16px;
  border-radius: 5px;
  color: #FFF;
  background-color: #ff4402;
  transition: 0.3s;

  &:hover {
    background-color: #ee6230;
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
    color: #ff4402;
  }
}
</style>