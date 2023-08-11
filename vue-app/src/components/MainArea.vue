<template>
<v-main class="bg-grey-lighten-3">
    <v-container>
        <v-row>
            <!-- 左侧两个sidebar -->
            <v-col cols="3" class="d-none d-sm-block">
                <!-- 推荐好文 -->
                <v-row>
                    <v-col>
                    <SideBar >推荐好文</SideBar>
                    </v-col>
                </v-row>
                <!-- 更多阅读 -->
                <v-row>
                    <v-col>
                    <SideBar>更多阅读</SideBar>
                    </v-col>
                </v-row>
            </v-col>
        
            <!-- 中部区域内容 -->
            <!-- 轮播图 -->
            <v-col>
                <v-row><v-col>
                    <v-sheet
                        rounded="lg"
                    >
                        <Carousels />
                    </v-sheet>
                </v-col></v-row>
                <v-row><v-col>
                    <!-- 文章展示页面 -->
                    <ArticlePage />
                    <ArticlePage />                    
                </v-col></v-row>



            </v-col>
        </v-row>

    </v-container>
</v-main>

</template>

<script setup>
    
    import SideBar from './SideBar.vue';
    import Carousels from './Carousels.vue';
    import ArticlePage from './ArticlePage.vue';

</script>