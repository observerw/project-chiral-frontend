<script setup lang="ts">
import Basic from './basic.vue'
import Editor from '@/views/workspace/components/editor/index.vue'
import type { EventEntity } from '@/api/api-base'

const { isLoading, data, color } = defineProps<{
  isLoading?: boolean
  data?: EventEntity
  color?: string
}>()

let dialogOpen = $ref(false)
const handleClick = () => { dialogOpen = true }
</script>

<template>
  <Basic @click="handleClick">
    <div bg-primary-6 shrink-0 w-4px />
    <div grow center-x p-2>
      {{ data?.name }}
    </div>
  </Basic>
  <v-dialog v-model="dialogOpen" width="75%" height="75%">
    <Editor :status="{ id: '1' }" />
  </v-dialog>
</template>
