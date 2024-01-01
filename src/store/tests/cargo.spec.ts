import { setActivePinia, createPinia, storeToRefs } from "pinia";
import { it, expect, describe, beforeEach } from "vitest";
import { useCargoStore } from "../cargo";

describe("Cargo", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should createCargo returns a cargo", () => {
    const { createCargo } = useCargoStore();
    const data = { x: 1, y: 1 };
    const cargo = createCargo(data);
    expect(cargo).toEqual(data);
  });

  it("should addCargo will add a cargo in cargoStore", () => {
    const cargoStore = useCargoStore();
    const { cargos } = storeToRefs(cargoStore);
    const { createCargo, addCargo } = cargoStore;

    const data = { x: 1, y: 1 };
    const cargo = createCargo(data);
    addCargo(cargo);

    expect(cargos.value).toEqual([data]);
  });
});
