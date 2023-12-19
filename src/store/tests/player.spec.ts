import { it, expect, describe, beforeEach } from "vitest";
import { usePlayerStore } from "../player";
import { createPinia, setActivePinia, storeToRefs } from "pinia";
import { useMapStore } from "../map";

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
});
