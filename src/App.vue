<script setup>
import { ref } from "vue";
import LoginPage from "./pages/LoginPage.vue"
import NavBar from "./components/NavBar.vue"
import AcercaDeNosotros from "./pages/AcercaDeNosotros.vue";
import ExplorePage from "./pages/ExplorePage.vue"
const isLoginShown = ref(true);

//pageShown ("about-us" | "explore" | reseñas)
const pageShown = ref("about-us");

function changePage(page) {
  pageShown.value = page;
}
</script>

<template>
  <!--Login-->
  <LoginPage @hide-login="isLoginShown = false" v-if="isLoginShown === true" />
  <div v-else>
    <!--nav bar-->
    <NavBar @change-page="changePage" @hide-login="isLoginShown=true"/>
    <AcercaDeNosotros v-if="pageShown === 'about-us'"></AcercaDeNosotros>
    <ExplorePage v-if="pageShown === 'explore'"></ExplorePage>
    <section v-if="pageShown === 'reviews'">
      <h2>reviwes</h2>
    </section>
  </div>

  <!--contenido de la app-->
</template>
<style scoped>
/*hacerca de nosotros*/
.about-us-container {
  margin: auto;
  max-width: 700px;
}

.about-us-container>h2 {
  text-align: center;
  font-weight: 600;
}

.about-us-container>img {
  margin: auto;
  max-width: 700px;
}
</style>