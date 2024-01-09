import { createPinia, setActivePinia, storeToRefs } from "pinia";
import { it, expect, describe, beforeEach } from "vitest";
import { useCargoStore } from "../cargo";
import { useTargetStore } from "../target";
import { useGameStore } from "../game";

describe("game", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should game completed", () => {
    const { addCargo, createCargo, moveCargo } = useCargoStore();
    const cargo = createCargo({ x: 2, y: 1 });
    addCargo(cargo);

    const { addTarget, createTarget } = useTargetStore();
    addTarget(createTarget({ x: 3, y: 1 }));

    moveCargo(cargo, 1, 0);

    const gameStore = useGameStore();
    const { detectGameCompleted } = gameStore;
    const { game } = storeToRefs(gameStore);

    detectGameCompleted();

    expect(game.value.isGameCompleted).toBe(true);
  });

  it("should game not completed", () => {
    const { addCargo, createCargo, moveCargo } = useCargoStore();
    const cargo = createCargo({ x: 2, y: 1 });
    addCargo(cargo);

    const { addTarget, createTarget } = useTargetStore();
    addTarget(createTarget({ x: 3, y: 1 }));

    moveCargo(cargo, 1, 0);
    moveCargo(cargo, 1, 0);

    const gameStore = useGameStore();
    const { detectGameCompleted } = gameStore;
    const { game } = storeToRefs(gameStore);

    detectGameCompleted();

    expect(game.value.isGameCompleted).toBe(false);
  });
});
