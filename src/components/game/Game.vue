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

    <button v-show="game.isGameCompleted">下一关</button>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCargoStore } from "@/store/cargo";
import { useTargetStore } from "@/store/target";
import Cargo from "./Cargo.vue";
import Map from "./Map.vue";
import Player from "./Player.vue";
import Target from "./Target.vue";
import { useGameStore } from "@/store/game";
import { levelData } from "@/game/gameData";

const gameStore = useGameStore();
const { setupGame } = gameStore;
const { game } = storeToRefs(gameStore);

setupGame(levelData);

const cargoStore = useCargoStore();
const { cargos } = storeToRefs(cargoStore);

const targetStore = useTargetStore();
const { targets } = storeToRefs(targetStore);
</script>

<style scoped></style>
