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
// pageCount 因为直接可以使用，且不同组件里对应的后端接口不完全一样，在父组件中调用接口，作为props传入
// page 在pagination过程中有修改需求，且因为兄弟组件要作为参数调用，以显示不同分页的信息，通过pinia传递更合适

// 接受父组件提供的页码参数
import { toRefs } from 'vue';

const props = defineProps({
  pageCount: Number
})

const { pageCount } = toRefs(props)

// 使用pinia传递分页参数
import { pageNumStore } from '../stores/PageNum'
import { storeToRefs } from 'pinia'

const store = pageNumStore()
const { page } = storeToRefs(store)
</script>