import { defineStore } from "pinia";
import { reactive } from "vue";
import { Position, useMapStore } from "./map";

export const usePlayerStore = defineStore("player", () => {
  const player = reactive({
    x: 1,
    y: 1,
    direction: "left",
  });

  function movePlayerToLeft() {
    const mapStore = useMapStore();
    const { isWall } = mapStore;
    const nextPosition: Position = {
      x: player.x - 1,
      y: player.y,
    };

    if (isWall(nextPosition)) {
      return;
    }

    player.x -= 1;
    player.direction = "left";
  }

  function movePlayerToRight() {
    const mapStore = useMapStore();
    const { isWall } = mapStore;
    const nextPosition: Position = {
      x: player.x + 1,
      y: player.y,
    };

    if (isWall(nextPosition)) {
      return;
    }

    player.x += 1;
    player.direction = "right";
  }

  function movePlayerToTop() {
    const mapStore = useMapStore();
    const { isWall } = mapStore;
    const nextPosition: Position = {
      x: player.x,
      y: player.y - 1,
    };

    if (isWall(nextPosition)) {
      return;
    }
    player.y -= 1;
  }

  function movePlayerToBottom() {
    const mapStore = useMapStore();
    const { isWall } = mapStore;
    const nextPosition: Position = {
      x: player.x,
      y: player.y + 1,
    };

    if (isWall(nextPosition)) {
      return;
    }
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
