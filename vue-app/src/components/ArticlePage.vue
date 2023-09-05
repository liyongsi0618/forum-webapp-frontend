<template>
  <v-container class="pa-0 mt-5" style="background-color: white; 
        border-radius: 0.5rem;">
    <div v-for="(article, index) in articles.values" :key="index">
      <ArticleCard :article="article"></ArticleCard>
    </div>

  </v-container>
</template>



<script setup>
import ArticleCard from './ArticleCard.vue';

import { reactive } from 'vue';

// 获取首页文章卡片信息
const articles = reactive([]);
fetch('http://127.0.0.1:5000/')
  .then(resp => {
    if (resp.ok) {
      return resp.json();
    }
    throw new Error('页面获取错误');
  }).then(data => articles.values = data)

</script>