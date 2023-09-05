<template>
  <v-app-bar flat image="./src/assets/img/vbanner.jpg" absolute>
    <v-container class="mx-auto d-flex align-center justify-center">
      <v-row>
        <v-col cols="1">
          <!-- 综合导航栏 -->
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props" color="orange lighten-5" style="font-weight: bold;"
                prepend-icon="mdi-format-list-bulleted">Guide</v-btn>
            </template>

            <v-list>
              <v-list-item v-for="link in links" :key="link.id">
                <v-list-item-title>{{ link }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>

        <v-col class="d-none d-md-block">
          <!-- 导航栏按钮 -->
          <v-btn 
            v-for="link in links" :key="link" 
            color="white" 
            style="font-weight: bold;"
          >{{ link }}</v-btn>
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
import { reactive, ref } from 'vue';

const links = [
  'PHP开发',
  'Java开发',
  'Python开发',
  'Web前端',
  '数据科学',
  '人工智能',
  '杂谈'
]

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
