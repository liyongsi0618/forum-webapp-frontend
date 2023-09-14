<template>
  <v-app>
    <SideNav />

    <Header />

    <MainArea />

  </v-app>
</template>

<script setup>
  import SideNav from './components/SideNav.vue'
  import MainArea from './components/MainArea.vue'
  import Header from './components/Header.vue'

  import { useRoute } from 'vue-router';
  console.log(useRoute().params.type);

</script>