<template>
  <div class="not-found">
    <h1>
      404 PAGE NOT FOUND
    </h1>
  </div>
</template>

<script>
export default {
  name: 'NotFoundPage'
}
</script>

<style lang="scss" scoped>
  .not-found {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    h1 {
      color: black;
      font-size: 70px;
      margin-bottom: 20px;
    }
  }
</style>