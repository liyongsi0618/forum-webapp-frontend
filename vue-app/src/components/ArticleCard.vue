<template>
  <v-card elevation="3" class="my-2" style="border-radius: 0.75rem;">
    <v-row no-gutters>
      <v-col cols="3" class="d-none d-sm-block my-auto">
        <v-img 
          src="https://cdn.vuetifyjs.com/images/cards/house.jpg" 
        ></v-img>
      </v-col>

      <v-col cols="12" sm="9" class="px-3">
        <!-- 标题栏 -->
        <v-card-title class="text-h6">
          {{ headline }}
        </v-card-title>


        <!-- 内容栏 -->
        <v-card-text 
          class="py-0" 
          style="min-height: 50px; color: #666; font-size: 12px; line-height: 1.5"
        >
          {{ abstract }}
        </v-card-text>

        <!-- 按钮栏 -->
        <v-card-actions 
          compact 
          class="justify-end justify-sm-center px-5" 
          style="font-size: 12px; color: #666;"
        >

          <!-- 浏览量Watched -->
          <v-btn 
            disabled 
            compact 
            icon="mdi-eye-outline" 
            size="x-small" 
            color="surface-variant"
          >
          </v-btn>
          <span>{{ readcount }}</span>

          <!-- 文章作者Author -->
          <v-btn 
            disabled 
            compact 
            icon="mdi-pen" 
            size="x-small" 
            color="surface-variant" 
            class="d-none d-sm-block"
          >
          </v-btn>
          <span class="d-none d-sm-block">{{ nickname }}</span>

          <!-- 最后发布时间 Updatetime -->
          <v-btn 
            disabled 
            compact 
            icon="mdi-clock-time-five" 
            size="x-small" 
            color="surface-variant"
            class="d-none d-md-block"
          >
          </v-btn>
          <span class="d-none d-md-block">{{ createtimeFormat }}</span>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
import { computed, ref, toRefs } from 'vue';


const props = defineProps({
  headline: String,
  content: String,
  readcount: Number,
  createtime: String,
  nickname: String
})

const {headline, content, readcount, createtime, nickname} = toRefs(props)
// const headline = props.headline
// const content = props.content
// const readcount = props.readcount
// const createtime = props.createtime
// const nickname = props.nickname

// 处理得到文章摘要
import { ripTags, truncate } from "../common/ContentManage";
const abstractLength = 90
const abstract = computed(() => {
  return truncate(ripTags(content.value), abstractLength)
})


// 处理时间字符串为本地时间格式
const createtimeFormat = computed(() => {
  return new Date(createtime.value).toLocaleString().slice(0, -3)
})

</script>