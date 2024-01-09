import { Target } from "@/store/target";
import { Position } from "@/types/position";

export interface LevelData {
  map: number[][];
  cargos: Position[];
  targets: Target[];
  player: Position;
}

export const levelData: LevelData = {
  map: [
    [1, 1, 1, 1, 1],
    [1, 2, 2, 2, 1],
    [1, 2, 2, 2, 1],
    [1, 2, 2, 2, 1],
    [1, 1, 1, 1, 1],
  ],
  cargos: [
    { x: 2, y: 2 },
    { x: 2, y: 3 },
  ],
  targets: [
    { x: 1, y: 2 },
    { x: 1, y: 3 },
  ],
  player: {
    x: 1,
    y: 1,
  },
};
