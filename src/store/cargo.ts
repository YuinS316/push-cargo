import { Position } from "@/types/position";
import { defineStore } from "pinia";
import { ref } from "vue";

interface Cargo extends Position {}

export const useCargoStore = defineStore("cargo", () => {
  const cargos = ref<Cargo[]>([
    { x: 2, y: 2 },
    { x: 3, y: 2 },
  ]);

  return {
    cargos,
  };
});
