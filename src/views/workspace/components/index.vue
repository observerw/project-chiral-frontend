<script setup lang="ts">
import type { IPosition, IPositionState } from '../layout'
import Gantt from './gantt/index.vue'
import Editor from './editor/index.vue'
import Graph from './graph/index.vue'
import Design from './design/index.vue'

const status = defineProps<{
  id: string // 组件的id，同一个组件的不同id会导致独立的内部状态
  position?: IPosition // 组件位置，[column-start, row-start, column-end, row-end]
  state?: IPositionState // 组件所处的位置（角落，垂直，水平，全屏），用于动态调节组件显示的内容
}>()
const position = toRef(status, 'position')
</script>

<template>
  <div
    :class="`
      col-start-${position?.[0]}
      col-end-${position?.[1]}
      row-start-${position?.[2]}
      row-end-${position?.[3]}
    `"
  >
    <Gantt v-if="id === 'gantt'" :status="status" />
    <Editor v-else-if="id === 'editor'" :status="status" />
    <Graph v-else-if="id === 'graph'" :status="status" />
    <Design v-else-if="id === 'design'" :status="status" />
  </div>
</template>
