<template>
  <div class="absolute w-4 h-4 m-4" :style="position">🧑‍🦯</div>
</template>

<script setup lang="ts">
import { useMove, usePosition } from "./hooks/player";

//  监听键盘事件，控制移动
useMove();

//  返回人物的css样式
const { position } = usePosition();
</script>

<style scoped></style>
