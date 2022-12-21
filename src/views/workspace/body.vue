<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import WSComponent from './components/index.vue'
import useWSStore from './store'
import type { ILayout } from './layout'
import { Layout } from './layout'
import api from '@/api/api'

const WSStore = useWSStore()

const { isLoading } = useQuery({
  queryKey: ['workspace'],
  queryFn: api.project.getWorkspaceInfo,
  select: ({ layout }) => layout,
  onSuccess: config => { WSStore.layout = Layout.deserialize(config as ILayout) },
})

onUnmounted(() => {
  api.project.updateWorkspaceInfo({ layout: WSStore.layout.serialize() })
})
</script>

<template>
  <div
    grow relative
    h-screen
    bg="gray-200 dark:gray-500"
    grid="~ cols-2 rows-2"
    gap-4 p-4
  >
    <WSComponent
      v-for="{ id, position, state } in WSStore.components"
      :id="id"
      :key="id"
      :position="position"
      :state="state"
    />
  </div>
</template>