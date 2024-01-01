import { Position } from "@/types/position";
import { defineStore } from "pinia";
import { ref } from "vue";

interface Cargo extends Position {}

export const useCargoStore = defineStore("cargo", () => {
  const cargos = ref<Cargo[]>([]);

  function createCargo(cargo: Cargo): Cargo {
    return cargo;
  }

  function addCargo(cargo: Cargo) {
    cargos.value.push(cargo);
  }

  function findCargo(position: Position) {
    return cargos.value.find(
      (item) => item.x === position.x && item.y === position.y
    );
  }

  return {
    cargos,
    createCargo,
    addCargo,
    findCargo,
  };
});
