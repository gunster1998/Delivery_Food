<script setup>

</script>


<template>
  <header class="header">
    <div class="container">
      <div class="header-box">
        <router-link to="/" class="logo header-logo">
          <img src="../assets/img/logo.png" class="logo" />
          <p class="logo_text">
            Delivery <br />
            Food
          </p>
        </router-link>
        <div class="header-controls">
          <button class="btn btn_primary">
            <img src="../assets/img/button_img/user.png" alt="user" />
            Войти
          </button>
          <button class="btn btn_outline" @click="openModal()">
            <img src="../assets/img/button_img/shopping-cart.png" alt="shopping-cart" />
            Корзина
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
  const emit = defineEmits(["toggleModal"])
  const openModal = () => emit("toggleModal")
</script>

<style scoped>
.header{
    display: flex;
    align-items: center;
    min-height:124px;
}

.header-box{
    height: 100%;
    display:flex;
    align-items: center;
    justify-content: space-between;
}
.header-controls{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap:10px;
}
</style>