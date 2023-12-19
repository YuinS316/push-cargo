<template>
  <div>
    <div v-for="(row, i) in map" :key="i" class="flex">
      <div v-for="(_, j) in row">
        <div class="box-border w-4 h-4 m-4">
          <template v-if="map[i][j] === MapTile.WALL"> 🚧 </template>
          <template v-if="map[i][j] === MapTile.FLOOR"> ◻️ </template>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="mt-4">
    <div>样例</div>
    <div>🚧🧑‍🦯◻️ 🗃️🪧</div>
  </div> -->
</template>

<script setup lang="ts">
import { useMapStore, MapTile } from "@/store/map";
import { storeToRefs } from "pinia";

const mapStore = useMapStore();
const { map } = storeToRefs(mapStore);
</script>

<style scoped></style>
