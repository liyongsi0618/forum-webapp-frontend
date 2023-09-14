<template>
  <v-sheet rounded="lg">
    <v-list rounded="lg" class="py-0">
      <!-- 边栏标题栏 -->
      <v-list-item 
        density="compact"
        base-color="white"
        height="50px" 
        class="justify-center"
        style="background-color: #4169e1;"
      >
        <v-list-item-title style="font-weight: bold;">
          <slot />
        </v-list-item-title>
      </v-list-item>

      <v-divider></v-divider>

      <!-- 边栏内容栏 -->
      <v-list-item 
        v-for="(datum,index) in data" :key="index" 
        density="compact" 
        :href= "'article/'+ datum.articleid"
      >
        <v-list-item-title style="font-size: x-small;">
          {{ index + 1 + ". " + datum.headline }}
        </v-list-item-title>
      </v-list-item>

    </v-list>
  </v-sheet>
</template>

<script setup>
import { toRefs } from 'vue';

// 接收sideBar数据props
const props = defineProps({
  data: Array
})

const {data} = toRefs(props)
</script>
