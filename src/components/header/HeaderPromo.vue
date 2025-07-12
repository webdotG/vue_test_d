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
/* мобилка */
.header-promo {
    background-color: #111636;
    display: flex;
    align-items: center;
    justify-content: center;
    
    text-align: center;
}

.promo{
    width: 16px;
    height: 16px;
    
}

h4,p{
    margin: 0;
    color: whitesmoke;
    
}

h4{
    font-size: 14px;
    font-weight: 300;
    padding-left: 8px;
    padding-right: 8px;
}

p{
    font-size: 12px;
}

/* планшет */
@media (min-width: 640px) {
  .header-promo {
    padding: 5px 0;
  }
  .promo{
      width: 18px;
      height: 18px;
  }
  h4{
      font-size: 16px;
      padding-left: 12px;
      padding-right: 12px;
  }
  p{
      font-size: 14px;
  }
}

/* десктоп */
@media (min-width: 1100px) {
  .promo {
    width: 20px;
    height: 20px;
  }
  h4 {
    font-size: 18px;
  }
  p {
    font-size: 16px;
  }
}
</style>