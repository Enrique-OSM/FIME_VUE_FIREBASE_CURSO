<script setup>
import BookCard from '@/components/BookCard.vue';
import { onMounted, ref } from 'vue';

    /*
    //esto es un arreglo de objetos
    const books = [
    //un solo libro

    {
        title:"A",
        subtitle:"la comunidad del anillo",
        authors:"Tolkien",
    },
    {
        title:"B",
        subtitle:"las dos torres ",
        authors:"Tolkien",
    },
    {
        title:"C",
        subtitle:"el retorno del rey",
        authors:"Tolkien",
    },
    {
        title:"D",
        subtitle:"el hobit",
        authors:"Tolkien",
    },
    
]
    */
   //onMounted cuanso la pagina se cargue corres la funcion entre parentesis
   onMounted(getBooks);
const books = ref([])
//aqui se manda a llamar a la appi con fetch() "nativo de javascript "
    //async/await
async function getBooks(){
    
    const request = await fetch('https://www.dbooks.org/api/recent');
    const response = await request.json();
    books.value = response.books;
}

</script>
<template>
    <section>
        <h2>explorar libros</h2>
        <BookCard v-for="_book in books" :book="_book"></BookCard>
    </section>

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