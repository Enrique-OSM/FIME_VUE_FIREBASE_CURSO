<script setup>
import BookCard from '@/components/BookCard.vue';
import BookDetail from '@/components/BookDetail.vue';
import { onMounted, ref } from 'vue';
    const SelectedBookId = ref();
   //onMounted cuando la pagina se cargue corres la funcion entre parentesis

const books = ref([])
//aqui se manda a llamar a la appi con fetch() "nativo de javascript "
    //async/await
async function getBooks(){
    
    const request = await fetch('https://www.dbooks.org/api/recent');
    const response = await request.json();
    books.value = response.books;
}
   onMounted(getBooks);
</script>
<template>
    <section v-if="!SelectedBookId">
        <h2>explorar libros</h2>
        <BookCard
        @click="SelectedBookId = _book.id"
        v-for="_book in books" :book="_book"/>
    </section>
    <!--detalle de un libro-->
    <BookDetail :selected-book-id="SelectedBookId" @hide-detail="SelectedBookId = undefined" v-else/>
    
</template>
<style scoped>

section{
    max-width: 800px;
    margin: auto;
    margin-top: 30px;
}
.book-card {
    margin: 20px auto;
    width: 80%;
    display: flex;
    background-color: aliceblue;
    
}
.book-card > div{
    margin: 70%;
}
.book-card > img{
    width: 30%;
}
h2 {
    text-align: center;
}
</style>