import { ref } from 'vue'
import { defineStore } from 'pinia'

export const pageNumStore = defineStore('pageNum', () => {
  const page = ref(1)

  return { page }
})
