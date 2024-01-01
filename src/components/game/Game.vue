<template>
  <div class="relative">
    <Map></Map>
    <Player></Player>
    <template v-for="cargo in cargos">
      <Cargo v-bind="cargo"></Cargo>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useCargoStore } from "@/store/cargo";
import Cargo from "./Cargo.vue";
import Map from "./Map.vue";
import Player from "./Player.vue";
import { storeToRefs } from "pinia";

const cargoStore = useCargoStore();
const { createCargo, addCargo } = cargoStore;
const { cargos } = storeToRefs(cargoStore);

initCargos();
function initCargos() {
  const c1 = createCargo({ x: 2, y: 2 });
  const c2 = createCargo({ x: 3, y: 3 });
  addCargo(c1);
  addCargo(c2);
}
</script>

<style scoped></style>
