import { it, expect, describe, beforeEach } from "vitest";
import { usePlayerStore } from "../player";
import { createPinia, setActivePinia, storeToRefs } from "pinia";

describe("Player", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
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
