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
import { useRoute } from 'vue-router';


// 根据type类型计算页面数量
// 获取总页数，因为type改变更多是直接的页面跳转，type刷新，不需要利用监听，fetch会再次执行
const type = ref(0)
console.log(useRoute().params.type);
type.value = useRoute().params.type

const pageCount = ref(1)
const baseUrl = 'http://127.0.0.1:5000/type/page-count/'
fetch(baseUrl + `${type.value}`)
  .then(resp => {
    if (resp.ok) {
      return resp.json();
    }
    throw new Error('页面获取错误');
  }).then(data => pageCount.value = parseInt(data))


// 获取首页文章卡片信息
const articles = ref([]);

// 使用pinia传递页面跳转参数
const store = pageNumStore()
const { page } = storeToRefs(store)

function getArticleContent() {
// 获取Article Card信息
const baseUrl = 'http://127.0.0.1:5000/type/'
fetch(baseUrl + `${type.value}-${page.value}`)
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