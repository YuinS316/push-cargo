import { Position } from "@/types/position";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useMapStore } from "./map";
import { useTargetStore } from "./target";

export interface Cargo extends Position {
  onTarget: boolean;
}

export const useCargoStore = defineStore("cargo", () => {
  const cargos = ref<Cargo[]>([]);

  function createCargo(cargo: Position): Cargo {
    return {
      ...cargo,
      onTarget: false,
    };
  }

  function addCargo(cargo: Cargo) {
    cargos.value.push(cargo);
  }

  function findCargo(position: Position) {
    return cargos.value.find(
      (item) => item.x === position.x && item.y === position.y
    );
  }

  function moveCargo(cargo: Cargo, dx: number, dy: number) {
    const { isWall } = useMapStore();

    const nextPosition = { x: cargo.x + dx, y: cargo.y + dy };

    //  遇到墙不移动
    if (isWall(nextPosition)) {
      return false;
    }

    //  遇到另一个箱子不移动
    if (findCargo(nextPosition)) {
      return false;
    }

    //  移动箱子
    Object.assign(cargo, nextPosition);

    const { findTarget } = useTargetStore();

    const isOnTarget = findTarget(nextPosition);
    cargo.onTarget = !!isOnTarget;

    return true;
  }

  return {
    cargos,
    createCargo,
    addCargo,
    findCargo,
    moveCargo,
  };
});
