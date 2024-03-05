<script setup>
import { onMounted, ref } from "vue";

const emits = defineEmits(["hideDetail"])
const props = defineProps(['SelectedBookId'])

const book = ref();

async function getBook(){
    const request = await fetch("https://www.dbooks.org/api/book/" + props.SelectedBookId);
    const response = await request.json();
    book.value = response;
}
onMounted(getBook);
</script>
<template>
    <section>
        <button @click="emits('hideDetail')" type="button">Atras</button>
        <h2>book details</h2>
        <div class="detail-container">
            <img :src="book?.image" alt="">
            <p><span>titulo:{{book?.title}} </span></p>
            <p><span>Subtitulo:{{book?.subtitle}} </span>
            </p>
            <p><span>Autores:{{book?.authors}}</span>
            </p>
            <p><span>Paginas:{{book?.pages}}</span>
            </p>
            <p><span>Año de publicacion:{{ book?.year }}</span>
            </p>
            <p><span>Editorial: {{book?.publisher}}</span>
            </p>
            <a :href="book?.download" type="button">Descargar</a>
            <button>Crear Reseña</button>
        </div>
        <div>
            <p><span>Descripcion: </span></p>
        </div>
    </section>
</template>
<style scoped>
/* Estilo para el contenedor principal */
.section {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
}

/* Estilo para el título */
.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

/* Estilo para el contenido */
.content {
  font-size: 16px;
  line-height: 1.5;
}

/* Estilo para las imágenes */
.image {
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
}

/* Estilo para los enlaces */
.link {
  color: blue;
  text-decoration: underline;
}

/* Estilo para las listas */
.list {
  padding-left: 20px;
}

/* Estilo para los elementos de la lista */
.list-item {
  margin-bottom: 5px;
}

/* Estilo para las citas */
.quote {
  font-style: italic;
  margin-bottom: 10px;
}

/* Estilo para los botones */
.button {
  padding: 10px 20px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

/* Estilo para los botones cuando se pasa el cursor sobre ellos */
.button:hover {
  background-color: darkblue;
}

</style>