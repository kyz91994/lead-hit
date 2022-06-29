<template>
<button :disabled="disabled" class="btn">
  <slot></slot>
</button>
</template>

<script>
export default {
  name: "CustomButton",
  props:{
    disabled:{
      type: [Boolean]
    }
  }
}
</script>

<style scoped lang="scss">
.btn{
  width: 284px;
  height: 36px;
  border-radius: 10px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 12px;
  font-style: normal;
  line-height: 15px;
  color: #FFF;
  background-color: #7BAE73;
}
.disable{
  background-color: #EEEEEE;
  color: #B4B4B4;
}
</style>