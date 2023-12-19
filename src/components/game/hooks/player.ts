import { usePlayerStore } from "@/store/player";
import { storeToRefs } from "pinia";
import { onMounted, onUnmounted, computed } from "vue";

export function useMove() {
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
  };

  onMounted(() => {
    window.addEventListener("keyup", fn);
  });

  onUnmounted(() => {
    window.removeEventListener("keyup", fn);
  });
}

export function usePosition() {
  const playerStore = usePlayerStore();
  const { player } = storeToRefs(playerStore);
  const STEP = 3;

  const position = computed(() => ({
    left: player.value.x * STEP + "rem",
    top: player.value.y * STEP + "rem",
    transform: player.value.direction === "right" ? `rotateY(180deg)` : "",
  }));

  return { position };
}
