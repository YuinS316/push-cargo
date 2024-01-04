<template>
  <div class="relative">
    <Map></Map>
    <template v-for="target in targets">
      <Target v-bind="target"></Target>
    </template>
    <template v-for="cargo in cargos">
      <Cargo v-bind="cargo"></Cargo>
    </template>
    <Player></Player>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCargoStore } from "@/store/cargo";
import { useTargetStore } from "@/store/target";
import { useMapStore } from "@/store/map";
import Cargo from "./Cargo.vue";
import Map from "./Map.vue";
import Player from "./Player.vue";
import Target from "./Target.vue";

const { setupMap } = useMapStore();

setupMap([
  [1, 1, 1, 1, 1],
  [1, 2, 2, 2, 1],
  [1, 2, 2, 2, 1],
  [1, 2, 2, 2, 1],
  [1, 1, 1, 1, 1],
]);

const cargoStore = useCargoStore();
const { createCargo, addCargo } = cargoStore;
const { cargos } = storeToRefs(cargoStore);

initCargos();
function initCargos() {
  const c1 = createCargo({ x: 2, y: 2 });
  const c2 = createCargo({ x: 2, y: 3 });
  addCargo(c1);
  addCargo(c2);
}

const targetStore = useTargetStore();
const { createTarget, addTarget } = targetStore;
const { targets } = storeToRefs(targetStore);

initTargets();
function initTargets() {
  const t1 = createTarget({ x: 1, y: 2 });
  const t2 = createTarget({ x: 1, y: 3 });
  addTarget(t1);
  addTarget(t2);
}
</script>

<style scoped></style>
