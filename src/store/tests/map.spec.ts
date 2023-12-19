import { it, expect, describe, beforeEach } from "vitest";
import { useMapStore } from "../map";
import { createPinia, setActivePinia, storeToRefs } from "pinia";

describe("Map", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it("should setupMap can set map", () => {
    const mapStore = useMapStore();
    const { map } = storeToRefs(mapStore);
    const { setupMap } = mapStore;

    const newMap = [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ];
    setupMap(newMap);
    expect(map.value).toEqual(newMap);
  });
});
