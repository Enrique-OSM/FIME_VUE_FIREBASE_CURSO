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
    background-color: lightblue;
    padding: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  h1 {
    margin-right: auto;
    color: white;
  }

  span {
    margin-left: 10px;
    cursor: pointer;
  }
  span:hover {
    color: white;
  }
</style>