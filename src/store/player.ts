import { defineStore } from "pinia";
import { reactive } from "vue";

export const usePlayerStore = defineStore("player", () => {
  const player = reactive({
    x: 1,
    y: 1,
    direction: "left",
  });

  function movePlayerToLeft() {
    player.x -= 1;
    player.direction = "left";
  }

  function movePlayerToRight() {
    player.x += 1;
    player.direction = "right";
  }

  function movePlayerToTop() {
    player.y -= 1;
  }

  function movePlayerToBottom() {
    player.y += 1;
  }

  return {
    player,
    movePlayerToLeft,
    movePlayerToRight,
    movePlayerToTop,
    movePlayerToBottom,
  };
});
