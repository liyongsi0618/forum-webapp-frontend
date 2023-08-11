<template>
      <v-container class="px-2 py-2">
            <v-card class=" elevation-3" >
                <v-row no-gutters>
                    <v-col cols="4" class="d-none d-md-block my-auto">
                        <v-img
                        src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
                        max-width="260"
                        cover
                        ></v-img>
                    </v-col>

                    <v-col>
                        <!-- 标题栏 -->
                        <v-row class="my-1">
                            <v-card-title class="text-h6 text-md-h5 py-0">
                                中文标题
                            </v-card-title>
                        </v-row>

                        <!-- 副标题 -->
                        <v-row class="my-0">
                            <v-card-subtitle class="py-0">
                                副标题
                            </v-card-subtitle>
                        </v-row>

                        <!-- 内容栏 -->
                        <v-row class="my-0">
                            <v-card-text>
                                <p>Vue是一个独立的社区驱动的项目，它是由尤雨溪在2014年作为其个人项目创建，是一个成熟的、经历了无数实战考验的框架。</p>
                            </v-card-text>
                        </v-row>
  
                        <v-row class="justify-center my-0">
                            <v-card-actions>
                                <v-btn 
                                    compact
                                    icon="mdi-thumb-up-outline" 
                                    size="x-small" 
                                    color="surface-variant"
                                >
                                </v-btn>
                                <span style="font-size: 12px;">30</span>

                                <v-btn 
                                    disabled
                                    compact
                                    icon="mdi-eye-outline" 
                                    size="x-small" 
                                    color="surface-variant"

                                >
                                </v-btn>
                                <span style="font-size: 12px;">1000</span>

                                <v-btn 
                                    disabled
                                    compact
                                    icon="mdi-pen" 
                                    size="x-small" 
                                    color="surface-variant"
                                    class="d-none d-sm-block"
                                >
                                </v-btn>
                                <span class="d-none d-sm-block" style="font-size: 12px;">Author</span>

                                <v-btn 
                                    disabled
                                    compact
                                    icon="mdi-clock-time-five" 
                                    size="x-small" 
                                    color="surface-variant"
                                    class="d-none d-sm-block"
                                >
                                </v-btn>
                                <span class="d-none d-sm-block" style="font-size: 12px;">createtime</span>
                            </v-card-actions>
                        </v-row>
                    </v-col>
                </v-row>
            </v-card>
      </v-container>
</template>

<script setup>

</script>