<template>
    <v-sheet rounded="lg">
        <v-carousel 
            show-arrows="hover"
            hide-delimiter-background
            cycle
            height="300"
            style="border-radius: 0.5rem;"
            >
            <v-carousel-item
                v-for="(item,i) in CarouselsList"
                :key="i"
                :src=item.src
                cover
            ></v-carousel-item>
        </v-carousel>
    </v-sheet>

    
</template>

<script setup>
import { reactive } from 'vue';

    const CarouselsList = reactive([
        {src: "./src/assets/img/MainPageCarou/CarouselsPics(1).jpg"},
        {src: "./src/assets/img/MainPageCarou/CarouselsPics(2).jpg"},
        {src: "./src/assets/img/MainPageCarou/CarouselsPics(3).jpg"},
        {src: "./src/assets/img/MainPageCarou/CarouselsPics(4).jpg"},
        {src: "./src/assets/img/MainPageCarou/CarouselsPics(5).jpg"},
        {src: "./src/assets/img/MainPageCarou/CarouselsPics(6).jpg"}
    ]) 

</script>