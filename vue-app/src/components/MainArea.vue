<template>
  <v-main class="bg-grey-lighten-3">
    <v-container>
      <v-row>
        <!-- 左侧两个sidebar -->
        <v-col cols="3" class="d-none d-sm-block">
          <!-- 推荐好文 -->
          <SideBar 
          :data="recommend"
          >推荐好文</SideBar>

          <!-- 更多阅读 -->
          <SideBar 
            class="mt-5"
            :data="mostRead"
          >更多阅读</SideBar>

          <!-- 最新发布 -->
          <SideBar 
            class="mt-5"
            :data="latest"
          >最新发布</SideBar>
        </v-col> 

        <!-- 中部区域内容 -->
        <v-col cols="12" sm="9">
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
import { ref } from 'vue';

const latest = ref([]);
const mostRead = ref([]);
const recommend = ref([]);

async function getSideBar() {
  const baseUrl = 'http://127.0.0.1:5000'

  try {
    // Promise.all并行处理fetch
    let responses = await Promise.all(
      [fetch(`${baseUrl}/latest`), fetch(`${baseUrl}/most-read`), fetch(`${baseUrl}/recommend`)]
    );

    // 响应结果json处理
    let jsons = responses.map(response => response.json());
    
    // json处理仍然返回promise，因此需要再使用一次await拿到结果
    let values = await Promise.all(jsons);

    [latest.value, mostRead.value, recommend.value] = values

  } catch (error) {
    console.log(error);
  }
}getSideBar();

</script>