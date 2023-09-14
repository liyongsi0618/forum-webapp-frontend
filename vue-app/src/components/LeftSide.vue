<template>
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
</template>

<script setup>
import SideBar from './SideBar.vue';

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