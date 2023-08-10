<template>
  <v-app id="inspire">

    <Header />
    <SideNav />

    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>

          <!-- 左侧两个sidebar -->
          <v-col cols="3">
            <v-row>
              <v-col>
                <SideBar >推荐好文</SideBar>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <SideBar>更多阅读</SideBar>
              </v-col>
            </v-row>
          </v-col>
          
          <!-- 中部区域内容 -->
          <v-col>
            <MainArea />
          </v-col>

        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  import SideBar from './components/SideBar.vue'
  import MainArea from './components/MainArea.vue'
  import SideNav from './components/SideNav.vue'
  import Header from './components/Header.vue'


</script>