import { setActivePinia, createPinia, storeToRefs } from "pinia";
import { it, expect, describe, beforeEach } from "vitest";
import { useCargoStore } from "../cargo";
import { useTargetStore } from "../target";

describe("Cargo", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should createCargo returns a cargo", () => {
    const { createCargo } = useCargoStore();
    const data = { x: 1, y: 1, onTarget: false };
    const cargo = createCargo(data);
    expect(cargo).toEqual(data);
  });

  it("should addCargo will add a cargo in cargoStore", () => {
    const cargoStore = useCargoStore();
    const { cargos } = storeToRefs(cargoStore);
    const { createCargo, addCargo } = cargoStore;

    const data = { x: 1, y: 1, onTarget: false };
    const cargo = createCargo(data);
    addCargo(cargo);

    expect(cargos.value).toEqual([data]);
  });

  describe("move cargo into target", () => {
    it("move into the target", () => {
      const { createCargo, addCargo, moveCargo } = useCargoStore();

      const data = { x: 1, y: 1 };
      const cargo = createCargo(data);
      addCargo(cargo);

      const { createTarget, addTarget } = useTargetStore();
      const target = createTarget({ x: 0, y: 1 });
      addTarget(target);

      //  将箱子移到目标点上
      moveCargo(cargo, -1, 0);

      expect(cargo.onTarget).toBe(true);
    });

    it("move out the target", () => {
      const { createCargo, addCargo, moveCargo } = useCargoStore();

      const data = { x: 1, y: 1 };
      const cargo = createCargo(data);
      addCargo(cargo);

      const { createTarget, addTarget } = useTargetStore();
      const target = createTarget({ x: 0, y: 1 });
      addTarget(target);

      //  将箱子移到目标点上
      moveCargo(cargo, -1, 0);
      //  将箱子移出目标点上
      moveCargo(cargo, -1, 0);

      expect(cargo.onTarget).toBe(false);
    });
  });
});
