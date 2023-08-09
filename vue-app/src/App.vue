<template>
  <v-app id="inspire">
    <v-app-bar flat color="grey-lighten-3"></v-app-bar>

    <v-app-bar flat image="./src/assets/vbanner.jpg">
      <v-container class="fill-height d-flex align-center">
        <v-avatar
          class="me-10 ms-4"
          color="grey-darken-1"
          size="32"
        ></v-avatar>

        <v-btn
          v-for="link in links"
          :key="link"
          variant="text"
        >
          {{ link }}
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            density="compact"
            hide-details
            variant="solo"
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>

          <!-- 左侧两个sidebar -->
          <v-col cols="3">
            <v-row>
              <v-col>
                <SideBar>推荐好文</SideBar>
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

  const links = [
    'Dashboard',
    'Messages',
    'Profile',
    'Updates',
  ]
</script>