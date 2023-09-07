import { ref } from 'vue'
import { defineStore } from 'pinia'

export const pageNumStore = defineStore('pageNum', () => {
  const page = ref(1)

  // 获取总页数信息传递给pagination模块
  const pageCount = ref(0);
  const baseUrl = 'http://127.0.0.1:5000/page/page-count'
  fetch(baseUrl)
    .then(resp => {
      if (resp.ok) {
        return resp.json();
      }
      throw new Error('页面获取错误');
    }).then(data => pageCount.value = parseInt(data))
  return { pageCount, page }
})
