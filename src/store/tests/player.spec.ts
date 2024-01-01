import { it, expect, describe, beforeEach } from "vitest";
import { usePlayerStore } from "../player";
import { createPinia, setActivePinia, storeToRefs } from "pinia";
import { useMapStore } from "../map";
import { useCargoStore } from "../cargo";

describe("Player", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe("should can move in a maze which is full of floor", () => {
    beforeEach(() => {
      const mapStore = useMapStore();
      const { setupMap } = mapStore;

      setupMap([
        [1, 2, 1],
        [2, 2, 2],
        [1, 2, 1],
      ]);
    });

    it("should move to right", () => {
      const playerStore = usePlayerStore();
      const { player } = storeToRefs(playerStore);
      const { movePlayerToRight } = playerStore;

      player.value.x = 1;
      player.value.y = 1;
      movePlayerToRight();
      expect(player.value.x).toBe(2);
    });

    it("should move to left", () => {
      const playerStore = usePlayerStore();
      const { player } = storeToRefs(playerStore);
      const { movePlayerToLeft } = playerStore;

      player.value.x = 1;
      player.value.y = 1;
      movePlayerToLeft();
      expect(player.value.x).toBe(0);
    });

    it("should move to top", () => {
      const playerStore = usePlayerStore();
      const { player } = storeToRefs(playerStore);
      const { movePlayerToTop } = playerStore;

      player.value.x = 1;
      player.value.y = 1;
      movePlayerToTop();
      expect(player.value.y).toBe(0);
    });

    it("should move to bottom", () => {
      const playerStore = usePlayerStore();
      const { player } = storeToRefs(playerStore);
      const { movePlayerToBottom } = playerStore;

      player.value.x = 1;
      player.value.y = 1;
      movePlayerToBottom();
      expect(player.value.y).toBe(2);
    });
  });

  describe("should can't move when face wall", () => {
    beforeEach(() => {
      const mapStore = useMapStore();
      const { setupMap } = mapStore;

      setupMap([
        [1, 1, 1],
        [1, 2, 1],
        [1, 1, 1],
      ]);
    });

    it("shouldn't move to right", () => {
      const playerStore = usePlayerStore();
      const { player } = storeToRefs(playerStore);
      const { movePlayerToRight } = playerStore;

      player.value.x = 1;
      player.value.y = 1;
      movePlayerToRight();
      expect(player.value.x).toBe(1);
    });

    it("shouldn't move to left", () => {
      const playerStore = usePlayerStore();
      const { player } = storeToRefs(playerStore);
      const { movePlayerToLeft } = playerStore;

      player.value.x = 1;
      player.value.y = 1;
      movePlayerToLeft();
      expect(player.value.x).toBe(1);
    });

    it("shouldn't move to top", () => {
      const playerStore = usePlayerStore();
      const { player } = storeToRefs(playerStore);
      const { movePlayerToTop } = playerStore;

      player.value.x = 1;
      player.value.y = 1;
      movePlayerToTop();
      expect(player.value.y).toBe(1);
    });

    it("shouldn't move to bottom", () => {
      const playerStore = usePlayerStore();
      const { player } = storeToRefs(playerStore);
      const { movePlayerToBottom } = playerStore;

      player.value.x = 1;
      player.value.y = 1;
      movePlayerToBottom();
      expect(player.value.y).toBe(1);
    });
  });

  describe("push a cargo in differenct conditions", () => {
    beforeEach(() => {
      const mapStore = useMapStore();
      const { setupMap } = mapStore;

      setupMap([
        [1, 1, 1, 1, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 1, 1, 1, 1],
      ]);
    });

    it("should can push a cargo to left", () => {
      const cargoStore = useCargoStore();
      const { cargos } = storeToRefs(cargoStore);
      const { addCargo, createCargo } = cargoStore;
      const cargo = createCargo({ x: 2, y: 1 });
      //  初始化箱子
      addCargo(cargo);

      const playerStore = usePlayerStore();
      const { player } = storeToRefs(playerStore);
      const { movePlayerToLeft } = playerStore;

      //  初始化人物
      player.value.x = 3;
      player.value.y = 1;

      //  向左推，此时人物和箱子都会向左移动
      movePlayerToLeft();

      expect(cargos.value).toEqual([{ x: 1, y: 1 }]);
      expect(player.value.x).toBe(2);
    });

    it("should can push a cargo to right", () => {
      const cargoStore = useCargoStore();
      const { cargos } = storeToRefs(cargoStore);
      const { addCargo, createCargo } = cargoStore;
      const cargo = createCargo({ x: 2, y: 1 });
      //  初始化箱子
      addCargo(cargo);

      const playerStore = usePlayerStore();
      const { player } = storeToRefs(playerStore);
      const { movePlayerToRight } = playerStore;

      //  初始化人物
      player.value.x = 1;
      player.value.y = 1;

      //  向右推，此时人物和箱子都会向右移动
      movePlayerToRight();

      expect(cargos.value).toEqual([{ x: 3, y: 1 }]);
      expect(player.value.x).toBe(2);
    });

    it("should can push a cargo to top", () => {
      const cargoStore = useCargoStore();
      const { cargos } = storeToRefs(cargoStore);
      const { addCargo, createCargo } = cargoStore;
      const cargo = createCargo({ x: 2, y: 2 });
      //  初始化箱子
      addCargo(cargo);

      const playerStore = usePlayerStore();
      const { player } = storeToRefs(playerStore);
      const { movePlayerToTop } = playerStore;

      //  初始化人物
      player.value.x = 2;
      player.value.y = 3;

      //  向上推，此时人物和箱子都会向上移动
      movePlayerToTop();

      expect(cargos.value).toEqual([{ x: 2, y: 1 }]);
      expect(player.value.y).toBe(2);
    });

    it("should can push a cargo to bottom", () => {
      const cargoStore = useCargoStore();
      const { cargos } = storeToRefs(cargoStore);
      const { addCargo, createCargo } = cargoStore;
      const cargo = createCargo({ x: 2, y: 3 });
      //  初始化箱子
      addCargo(cargo);

      const playerStore = usePlayerStore();
      const { player } = storeToRefs(playerStore);
      const { movePlayerToBottom } = playerStore;

      //  初始化人物
      player.value.x = 2;
      player.value.y = 2;

      //  向下推，此时人物和箱子都会向下移动
      movePlayerToBottom();

      expect(cargos.value).toEqual([{ x: 2, y: 4 }]);
      expect(player.value.y).toBe(3);
    });
  });
});
