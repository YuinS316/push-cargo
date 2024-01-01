import { Position } from "@/types/position";
import { computed } from "vue";

export function usePosition(pos: Position) {
  const STEP = 3;

  const position = computed(() => ({
    left: pos.x * STEP + "rem",
    top: pos.y * STEP + "rem",
  }));

  return { position };
}
