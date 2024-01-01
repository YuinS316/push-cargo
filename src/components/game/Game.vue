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
const { cargos } = storeToRefs(cargoStore);
</script>

<style scoped></style>
