<template>
  <div class="header-promo">
      <img src="@/assets/RedRuby.png" alt="Promo"class="promo">
      <h4>"Промо"</h4>
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

.promo{
    width: 18px;
    height: 18px;
}
h4,p{
    color: whitesmoke;
    line-height: 21px;
}
h4{
    font-size: 16px;
    font-weight: 300;
    padding-left: 12px;
    padding-right: 12px;
}
p{
    font-size: 14px;
}
</style>