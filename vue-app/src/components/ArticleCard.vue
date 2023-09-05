<template>
  <v-card elevation="3" class="my-2">
    <v-row no-gutters>
      <v-col cols="4" class="d-none d-md-block my-auto">
        <v-img 
          src="https://cdn.vuetifyjs.com/images/cards/house.jpg" 
          cover
        ></v-img>
      </v-col>

      <v-col>
        <!-- 标题栏 -->
        <v-card-title class="text-h6 px-2 my-1">
          {{ headline }}
        </v-card-title>


        <!-- 内容栏 -->
        <v-card-text 
          class="px-2 py-1" 
          style="min-height: 110px; color: #666;"
        >
          {{ content }}
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
            class="d-none d-sm-block"
          >
          </v-btn>
          <span class="d-none d-sm-block">{{ createtime }}</span>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
const props = defineProps(['article'])

const headline = props.article.headline

// 处理得到文章摘要
function getAbstract(str) {
  const abstrLength = 200
  // 除去标签
  if (!str) return '';
  str = str.replace(/(<([^>]+)>)/ig, '');
  str = str.replace(/&nbsp;/ig, ' ')
  str = str.replace(/&#39;/ig, '\'')
  if (str.length > abstrLength) {
    str = str.substr(0, abstrLength) + '...'
  }
  return str
}
const content = getAbstract(props.article.content)

const readcount = props.article.readcount
const nickname = props.article.nickname
// 处理时间字符串为本地时间格式
const createtime = new Date(props.article.createtime).toLocaleString()

</script>