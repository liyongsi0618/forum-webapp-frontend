<template>
  <v-main class="bg-grey-lighten-3">
    <v-container style="max-width: 1300px" >
      <v-row>
        <!-- 左侧sidebar -->
        <v-col cols="3" class="d-none d-sm-block">
          <LeftSide />
        </v-col> 

        <!-- 中部区域内容 -->
        <v-col cols="12" sm="9">
          <!-- 轮播图 -->
          <Carousels />

          <!-- 文章展示页面，包含pagination -->
          <!-- <router-link to="/type/1"></router-link> -->
          <router-view></router-view>
          <!-- <ArticlePage /> -->

        </v-col>
      </v-row>

    </v-container>
  </v-main>
</template>

<script setup>
import Carousels from './Carousels.vue';
import LeftSide from './LeftSide.vue';

</script>