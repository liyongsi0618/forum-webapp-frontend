import { defineStore } from 'pinia'

export const categoryListStore = defineStore('categoryList', () => {
  const categoryList = [
    'PHP开发',
    'Java开发',
    'Python开发',
    'Web前端',
    '数据科学',
    '人工智能',
    '网络安全',
    '杂谈'
  ]

  return { categoryList }
})
