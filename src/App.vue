<template>
  <div class="flex items-center justify-center h-screen">
    <div>
      <div class="flex justify-center mb-8">Emoji 推箱子</div>
      <div class="border-1 border-solid p-48">
        <Game></Game>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Game from "./components/game/Game.vue";
</script>

<style scoped></style>
