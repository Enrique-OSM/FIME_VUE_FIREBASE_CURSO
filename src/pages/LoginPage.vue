<script setup>
import { ref } from "vue";

    const emits = defineEmits(['hideLogin'])

    const email = ref();
    const password = ref();


    //vue model lo usamos para conectar una variable a un input
    function login() {
  //toda la logica de autenticar al usuario
  if (email.value === 'alejandro' && password.value === "abc") {
    //ingrese a la app
    emits('hideLogin')
  }
  else {
    //denegamos el acceso
    alert("las credenciales son incorrectas")
  }
}
</script>

<template>
     <div class="login-container">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div>
        <label for="email">Email</label>
        <input v-model="email" type="text" name="email" />
      </div>

      <div>
        <label for="password">password</label>
        <input v-model="password" type="text" name="password" />
      </div>
      <div><button type="submit">Ingresar</button></div>

    </form>
  </div>
</template>

<style scoped>
.login-container {
  width: 400px;
  margin: 50px auto;
  background-color: rgb(167, 199, 226);
  padding-block: 30px;
  border-radius: 30px;
}

.login-container>h1 {
  text-align: center;
}

.login-container>form {
  display: block;
  padding: 20px;
}
</style>