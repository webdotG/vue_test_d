<template>
  <div class="header-promo">
      <img src="@/assets/RedRuby.png" alt="Promo"
      width="25px" height="25px" class="promo">
      <h4>"Промо "</h4>
      <p>More Shine For Your Summer, Up To 30% </p>
  </div>
</template>

<script>
export default {
  name: 'HeaderPromo'
}
</script>

<style scoped>
.header-promo {
    background-color: #111636;
    display: flex;
    align-items: center;
    justify-content: center;
}

h4,p{
    color: whitesmoke;
}
</style>