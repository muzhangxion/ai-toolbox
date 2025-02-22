<script lang="ts" setup>
import { Menu, mockMenuData } from '~/mock/mockData'

const menuList = ref<Menu[]>(mockMenuData)
</script>

<template>
  <div>
    <div v-for="item in menuList" :key="item.id" class="p-2 rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-300 dark:text-white dark:hover:bg-gray-400">
      {{ item.title }}
    </div>
  </div>
</template>
