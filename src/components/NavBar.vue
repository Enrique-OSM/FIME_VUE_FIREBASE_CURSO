<script setup>
/*componetizars*/
const emits = defineEmits(['changePage','hideLogin']) 
</script>
<template>
    <nav>
        <h1>MyBooksApp</h1>
      <span @click="emits('changePage','about-us')">Acerca de nosotros</span>
      <span @click="emits('changePage','explore')">Explorar</span>
      <span @click="emits('changePage','reviews')">Reseñas</span>
      <span @click="emits('hideLogin')">Cerrar sesion</span>
    </nav>
</template>
<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: aliceblue;
  width: 100%;
}

nav>div>span { /*html semantico*/
  margin-right: 20px;
}
</style>