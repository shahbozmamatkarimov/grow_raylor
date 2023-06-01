import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useToggleStore = defineStore('toggleModal', () => {
  const toggle = ref(true)
  return { toggle }
})
