<template>
  <v-app-bar flat image="http://127.0.0.1:5173/src/assets/img/vbanner.jpg" absolute>
    <v-container class="mx-auto d-flex align-center justify-center" style="max-width: 1300px;">
      <v-row>
        <v-col cols="1">
          <!-- 综合导航栏 -->
          <v-menu open-on-hover>
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props" color="orange lighten-5" style="font-weight: bold;"
                prepend-icon="mdi-format-list-bulleted">Guide</v-btn>
            </template>

            <v-list>
              <v-list-item v-for="(item, index) in categoryList" :key="index" :href='"/type/" + "index"'>
                <v-list-item-title>{{ item }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>

        <v-col class="d-none d-md-block">
          <!-- 导航栏按钮 -->
          <v-btn 
            v-for="(item, index) in categoryList" :key="index" 
            color="white" 
            style="font-weight: bold;"
            :href='"/type/" + index'
          >{{ item }}</v-btn>
        </v-col>

        <v-col cols="2" class="d-none d-lg-block">
          <!-- 搜索框 -->
          <v-text-field 
            :loading="loadStatus.loading" 
            density="compact" 
            variant="solo-filled" 
            single-line hide-details
            placeholder="搜索文章内容..." 
            clearable 
            append-inner-icon="mdi-magnify" 
            @click:append-inner="doSearch"
            @keyup.enter="doSearch"
          ></v-text-field>
        </v-col>
      </v-row>

    </v-container>
  </v-app-bar>
</template>
<script setup>
import { reactive, toRefs } from 'vue';

import { categoryListStore } from '../stores/CategoryList'
const store = categoryListStore()
const { categoryList } = toRefs(store)

// 搜索框的底部进度条状态
const loadStatus = reactive({
  loaded: false,
  loading: false
})

function doSearch() {
  loadStatus.loading = true

  setTimeout(() => {
    loadStatus.loading = false
    loadStatus.loaded = true
  }, 2000)
}

</script>
