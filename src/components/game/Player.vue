<template>
  <div class="absolute w-4 h-4 m-4" :style="position">🧑‍🦯</div>
</template>

<script setup lang="ts">
import { usePlayerStore } from "@/store/player";
import { storeToRefs } from "pinia";
import { computed, onMounted, onUnmounted } from "vue";
import { usePosition } from "@/composables/usePosition";
import { useGameStore } from "@/store/game";

useMove();

const { position } = usePlayerPosition();

const { detectGameCompleted } = useGameStore();

//  监听键盘事件，控制移动
function useMove() {
  const playerStore = usePlayerStore();
  const {
    movePlayerToLeft,
    movePlayerToRight,
    movePlayerToTop,
    movePlayerToBottom,
  } = playerStore;
  const fn = (e: KeyboardEvent) => {
    switch (e.code) {
      case "ArrowLeft": {
        movePlayerToLeft();
        break;
      }
      case "ArrowRight": {
        movePlayerToRight();
        break;
      }
      case "ArrowUp": {
        movePlayerToTop();
        break;
      }
      case "ArrowDown": {
        movePlayerToBottom();
        break;
      }
      default: {
        break;
      }
    }

    detectGameCompleted();
  };

  onMounted(() => {
    window.addEventListener("keyup", fn);
  });

  onUnmounted(() => {
    window.removeEventListener("keyup", fn);
  });
}
//  返回人物的css样式
function usePlayerPosition() {
  const playerStore = usePlayerStore();
  const { player } = storeToRefs(playerStore);
  const { position } = usePosition(player.value);

  const mergePosition = computed(() => ({
    ...position.value,
    transform: player.value.direction === "right" ? `rotateY(180deg)` : "",
  }));

  return {
    position: mergePosition,
  };
}
</script>

<style scoped></style>
