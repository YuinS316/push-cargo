import { defineStore } from "pinia";
import { reactive } from "vue";
import { useMapStore } from "./map";
import { Position } from "@/types/position";
import { useCargoStore } from "./cargo";

export const usePlayerStore = defineStore("player", () => {
  const player = reactive({
    x: 1,
    y: 1,
    direction: "left",
  });

  function _move(dx: number, dy: number) {
    //  保持方向
    player.direction = dx < 0 ? "left" : dx > 0 ? "right" : player.direction;

    const mapStore = useMapStore();
    const { isWall } = mapStore;
    const nextPosition: Position = {
      x: player.x + dx,
      y: player.y + dy,
    };

    if (isWall(nextPosition)) {
      return;
    }

    const { findCargo, moveCargo } = useCargoStore();
    const cargo = findCargo(nextPosition);
    if (cargo !== undefined) {
      const isCargoMoved = moveCargo(cargo, dx, dy);
      if (!isCargoMoved) {
        return;
      }
    }

    player.x += dx;
    player.y += dy;
  }

  function movePlayerToLeft() {
    _move(-1, 0);
  }

  function movePlayerToRight() {
    _move(1, 0);
  }

  function movePlayerToTop() {
    _move(0, -1);
  }

  function movePlayerToBottom() {
    _move(0, 1);
  }

  return {
    player,
    movePlayerToLeft,
    movePlayerToRight,
    movePlayerToTop,
    movePlayerToBottom,
  };
});
