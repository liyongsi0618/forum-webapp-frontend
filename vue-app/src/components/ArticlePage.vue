<template>
  <v-container class="pa-0 mt-5" style="background-color: white; border-radius: 0.75rem;">
      
    <ArticleCard
        v-for="article in articles" :key="article.id"
        :headline="article.headline"
        :content="article.content"
        :readcount="article.readcount"
        :createtime="article.createtime"
        :nickname="article.nickname"
      ></ArticleCard>

  </v-container>
</template>



<script setup>
import ArticleCard from './ArticleCard.vue';

import { ref, watch } from 'vue';
import { pageNumStore } from '../stores/pageNum'
import { storeToRefs } from 'pinia'

// 使用pinia传递分页参数
const store = pageNumStore()
const {page} = storeToRefs(store)

// 获取首页文章卡片信息
const articles = ref([]);

function getArticleContent() {
  // 获取Article Card信息
  const baseUrl = 'http://127.0.0.1:5000/page/'
  fetch(baseUrl + page.value.toString())
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        }
        throw new Error('页面获取错误');
      }).then(data => {
        articles.value = data;
      })
}getArticleContent();

// 监测页码跳转变化，调用fetch封装函数获取新数据
watch(page, (page, prevValue)=>{
  getArticleContent();
})

</script>