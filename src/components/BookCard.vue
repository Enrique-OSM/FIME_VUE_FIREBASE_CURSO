<script setup>
defineProps(['book'])
</script>
<template>
        <div class="book-card">
            <!--una sola instancia de n libro-->
        <img :src="book.image" alt="">
            
                
            <div>
                <p>titulo: {{ book.title }}</p>
                <p>subtitulo: {{ book.subtitle }}</p>
                <p>autores: {{ book.authors }}</p>
            </div>
            
        </div>
</template>
<style scoped>

</style>