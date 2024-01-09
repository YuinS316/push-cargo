import { Position } from "@/types/position";
import { defineStore } from "pinia";
import { ref } from "vue";

export interface Target extends Position {}

export const useTargetStore = defineStore("target", () => {
  const targets = ref<Target[]>([]);

  function createTarget(target: Target): Target {
    return target;
  }

  function addTarget(target: Target) {
    targets.value.push(target);
  }

  function findTarget(position: Position) {
    return targets.value.find(
      (item) => item.x === position.x && item.y === position.y
    );
  }

  return {
    targets,
    createTarget,
    addTarget,
    findTarget,
  };
});
