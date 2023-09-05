<template>
  <v-main class="bg-grey-lighten-3">
    <v-container>
      <v-row>
        <!-- 左侧两个sidebar -->
        <v-col cols="3" class="d-none d-sm-block">
          <!-- 推荐好文 -->
          <SideBar>推荐好文</SideBar>

          <!-- 更多阅读 -->
          <SideBar class="mt-5">更多阅读</SideBar>

          <!-- 最新发布 -->
          <SideBar class="mt-5">更多阅读</SideBar>
        </v-col>

        <!-- 中部区域内容 -->
        <v-col>
          <!-- 轮播图 -->
          <Carousels />

          <!-- 文章展示页面 -->
          <ArticlePage />

          <!-- 分页 -->
          <Pagination class="my-10"></Pagination>
        </v-col>
      </v-row>

    </v-container>
  </v-main>
</template>

<script setup>
import SideBar from './SideBar.vue';
import Carousels from './Carousels.vue';
import ArticlePage from './ArticlePage.vue';
import Pagination from './Pagination.vue'


</script>