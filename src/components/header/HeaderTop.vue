<template>
  <div class="header-top">
    <div class="container">
      <h1>"Верхний хедер"</h1>
      <button class="login-btn">Войти</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderTop'
}
</script>

<style scoped>
.header-top {
  background: #f8f8f8;
  padding: 10px 0;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.login-btn {
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 4px;
  cursor: pointer;
}
</style>