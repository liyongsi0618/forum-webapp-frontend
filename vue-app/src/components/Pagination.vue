<template>
  <v-pagination 
    :length="pageCount" 
    rounded="circle"
    variant="elevated"
    active-color="primary"
    size="small"
    v-model="page"
  >
  </v-pagination>
</template>


<script setup>
import { pageNumStore } from '../stores/pageNum'
import { storeToRefs } from 'pinia'

// 使用pinia传递分页参数
const store = pageNumStore()
const {pageCount, page} = storeToRefs(store)
</script>