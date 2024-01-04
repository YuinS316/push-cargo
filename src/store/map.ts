import { Position } from "@/types/position";
import { defineStore } from "pinia";
import { shallowRef } from "vue";

export const enum MapTile {
  //  墙壁
  WALL = 1,
  //  地板
  FLOOR = 2,
}

export const useMapStore = defineStore("mapStore", () => {
  const map = shallowRef<number[][]>([]);

  function setupMap(m: number[][]) {
    map.value = m;
  }

  function isWall(position: Position) {
    return map.value[position.y]?.[position.x] === MapTile.WALL;
  }

  return { map, setupMap, isWall };
});
