<template>
  <v-pagination 
    :length="20" 
    rounded="circle"
    variant="elevated"
    active-color="primary"
    v-model="page"
  ></v-pagination>
</template>


<script setup>
import { pageNumStore } from '../stores/pageNum'
import { storeToRefs } from 'pinia'

// 使用pinia传递分页参数
const store = pageNumStore()
const {page} = storeToRefs(store)
</script>