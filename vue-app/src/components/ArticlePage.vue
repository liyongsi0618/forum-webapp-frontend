<template>
    <!-- 文章卡片 -->
    <v-container class="mt-5 pa-0">
      <ArticleCard
          v-for="(article, index) in articles" :key="index"
          :headline="article.headline"
          :content="article.content"
          :readcount="article.readcount"
          :createtime="article.createtime"
          :nickname="article.nickname"
          :type="article.type"
        ></ArticleCard>

      <!-- 分页 -->
      <Pagination class="my-10" :pageCount="pageCount"></Pagination>      
    </v-container>

</template>


<script setup>
import ArticleCard from './ArticleCard.vue';
import Pagination from './Pagination.vue'

import { ref, watch } from 'vue';
import { pageNumStore } from '../stores/PageNum'
import { storeToRefs } from 'pinia'

// 使用pinia传递页面跳转参数
const store = pageNumStore()
const {page} = storeToRefs(store)

// 获取页数信息
const pageCount = ref(1)
const baseUrl = 'http://127.0.0.1:5000/page/page-count'
fetch(baseUrl)
.then(resp => {
  if (resp.ok) {
    return resp.json();
  }
  throw new Error('页面获取错误');
}).then(data => pageCount.value = parseInt(data))


const articles = ref([]);
  // 获取Article Card信息
function getArticleContent() {
  const baseUrl = 'http://127.0.0.1:5000/page/'
  fetch(baseUrl + page.value.toString())
    .then(resp => {
      if (resp.ok) {
        return resp.json();
      }
      throw new Error('页面获取错误');
      })
    .then(data => {
      articles.value = data;
    })
}getArticleContent();

// 监测页码跳转变化，调用fetch封装函数获取新数据
watch(page, (page, prevValue)=>{
  getArticleContent();
  window.scrollTo({top:380, behavior:"smooth"})
})

</script>