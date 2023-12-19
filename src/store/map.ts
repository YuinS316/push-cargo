import { defineStore } from "pinia";
import { shallowRef } from "vue";

export const enum MapTile {
  //  墙壁
  WALL = 1,
  //  地板
  FLOOR = 2,
}

export const useMapStore = defineStore("mapStore", () => {
  const map = shallowRef([
    [1, 1, 1, 1, 1],
    [1, 2, 2, 2, 1],
    [1, 2, 2, 2, 1],
    [1, 2, 2, 2, 1],
    [1, 1, 1, 1, 1],
  ]);

  return { map };
});
