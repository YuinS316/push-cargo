import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { useCargoStore } from "./cargo";
import { useTargetStore } from "./target";
import { usePlayerStore } from "./player";
import { useMapStore } from "./map";

import { LevelData } from "@/game/gameData";

interface GameState {
  isGameCompleted: boolean;
}

export const useGameStore = defineStore("game", () => {
  const game = reactive<GameState>({
    isGameCompleted: false,
  });

  function detectGameCompleted() {
    const { cargos } = useCargoStore();
    game.isGameCompleted = cargos.every((cargo) => cargo.onTarget === true);
  }

  function setupGame(levelData: LevelData) {
    //  设置地图
    const { setupMap } = useMapStore();
    setupMap(levelData.map);

    //  设置箱子
    const { createCargo, addCargo } = useCargoStore();
    levelData.cargos.forEach((cargo) => {
      addCargo(createCargo(cargo));
    });

    //  设置目标
    const { createTarget, addTarget } = useTargetStore();
    levelData.targets.forEach((target) => {
      addTarget(createTarget(target));
    });

    //  设置玩家
    const { player } = usePlayerStore();
    player.x = levelData.player.x;
    player.y = levelData.player.y;
  }

  return {
    game,
    detectGameCompleted,
    setupGame,
  };
});
