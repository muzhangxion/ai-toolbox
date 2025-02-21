<script setup lang="ts">
import { ILink } from '~/types'
import logo from '~/assets/images/logo/aokayi.png'

const { t } = useLang()

const lists = computed<ILink[]>(() => [
  { id: 1, title: 'Pinia Store', url: 'pinia', icon: 'i-carbon-store' },
  { id: 1, title: t('modal'), url: 'modal', icon: 'i-carbon-collapse-all' },
  { id: 1, title: 'Menu', url: 'menu', icon: 'i-carbon-menu' },
  { id: 1, title: 'Naive UI', url: 'naive', icon: 'i-carbon-milestone' },
  { id: 1, title: 'New soon...', url: '', icon: 'i-carbon-milestone' },
])
</script>

<template>
  <div class="flex h-screen">
    <div class="flex-none w-64 h-full overflow-y-auto bg-gray-100">
      <div class="p-4">
        <h2 class="text-lg font-bold">
          侧边栏
        </h2>
        <div class="mt-4 space-y-2">
          <div v-for="i in 50" :key="i" class="p-2 bg-white rounded">
            Item {{ i }}
          </div>
        </div>
      </div>
    </div>

    <div class="flex-1 h-full overflow-y-auto bg-white hide-scrollbar">
      <div class="mb-10 flex items-center justify-between">
        <div
          class="w-[140px] h-[80px] bg-no-repeat bg-center mt-4"
          :style="{ backgroundImage: `url(${logo})`, backgroundSize: 'auto 100%' }"
        />
        <div class="flex space-x-2">
          <TemLanguageChange />
          <TemColorChange />
        </div>
      </div>
      <div class="flex flex-col">
        <h1>{{ t("follow") }}</h1>
        <div class="flex w-full items-center justify-between py-2">
          <img
            class="h-20 w-20 rounded-full"
            height="160"
            width="160"
            src="https://avatars.githubusercontent.com/u/38668796?v=4"
            alt="productdevbook"
          >

          <div
            class="place-items-centerr grid grid-cols-3 justify-items-center gap-4 [&>*]:flex [&>*]:items-center [&>*]:justify-center [&>*]:rounded-md [&>*]:bg-gray-100 [&>*]:p-3 dark:[&>*]:bg-gray-600"
          >
            <a
              target="blank"
              class="font-bold text-gray-900 hover:bg-gray-300 dark:text-white dark:hover:bg-gray-400"
              href="https://github.com/productdevbook"
            >
              <UnoIcon class="i-ph-github-logo-duotone" />
            </a>

            <a
              class="hover:bg-gray-300 dark:hover:bg-gray-400"
              href="https://twitter.com/productdevbook"
              target="_blank"
            >
              <UnoIcon class="i-ph-twitter-logo-duotone" />
            </a>

            <a
              target="blank"
              class="font-bold text-gray-900 hover:bg-gray-300 dark:text-white dark:hover:bg-gray-400"
              href="https://discord.gg/UN8mqgC79S"
            >
              <UnoIcon class="i-ph-discord-logo-duotone" />
            </a>
          </div>
        </div>
      </div>

      <ul role="list" class="mt-10 space-y-4">
        <li v-for="item in lists" :key="item.id">
          <List
            :link="{
              id: item.id,
              title: item.title,
              url: item.url,
              icon: item.icon,
            }"
          />
        </li>
      </ul>
    </div>
  </div>
</template>
