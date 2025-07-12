<template>
    <section class="funnelPart">
        <ul class="funnelPart-list">
            <li class="funnelPart-item">
                <h3 class="funnelPart-heading">
                    1
                </h3>
                <p class="funnelPart-paragraph">
                    Choose a Diamond
                </p>
            </li>
            <li class="funnelPart-item">
                <h3 class="funnelPart-heading">
                    2
                </h3>
                <p class="funnelPart-paragraph">
                    Choose a Setting
                </p>
            </li>
            <li class="funnelPart-item">
                <h3 class="funnelPart-heading">
                    3
                </h3>
                <p class="funnelPart-paragraph">
                    Complete Ring
                </p>
            </li>
        </ul>
    </section>
</template>

<style scoped>
/* мобилка */
.funnelPart {
  padding-top: 10px;
  padding-bottom: 20px;
  max-width: 1920px;
}

.funnelPart-list {
  width: 100%;
  display: flex;
  
  box-sizing: border-box;
  border: 1px solid var(--color-primary);
  
}

.funnelPart-item {
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  padding: 15px 20px;
  box-sizing: border-box;
}


.funnelPart-item:not(:last-child)::after {
  content: "";
  height: 1px;
  
  background-color: var(--color-primary);
  display: block;
  position: absolute;
  bottom: 0;
  left: 20px;
}

.funnelPart-heading {
  
  font-weight: 500;
  line-height: 1.2;
  color: var(--color-primary);
}

.funnelPart-paragraph {
  
  font-weight: 600;
  
  margin-left: 15px;
  color: var(--color-primary);
}

/* планшет */
@media (min-width: 640px) {
  .funnelPart-list {
    
    height: 80px;
    border-radius: 40px;
    padding: 0 20px;
  }

  .funnelPart-item {
    flex: 1 1;
    padding: 0;
    margin-left: 20px;
  }
  
  .funnelPart-item:first-child {
    margin-left: 0;
  }

  
  .funnelPart-item:not(:last-child)::after {
    content: "";
    height: 80px;
    width: 1px;
    background-color: var(--color-primary);
    display: block;
    position: absolute;
    
    top: 0;
    left: unset;
    bottom: unset;
  }

  .funnelPart-heading {
    font-size: 28px;
  }

  .funnelPart-paragraph {
    font-size: 15px;
    margin-left: 10px;
  }
}

/* десктоп */
@media (min-width: 1100px) {
  .funnelPart-list {
    padding: 0;
  }
  .funnelPart-item {
    margin-left: 34px;
  }
  .funnelPart-item:not(:last-child)::after {
    right: -34px;
  }
  .funnelPart-heading {
    font-size: 32px;
    line-height: 41px;
  }
  .funnelPart-paragraph {
    font-size: 16px;
    line-height: 20px;
    margin-left: 12px;
  }
}
</style>