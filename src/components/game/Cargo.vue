<template>
  <div>
    <!-- <div class="absolute w-4 h-4 m-4">🏁</div> -->
    <div class="absolute w-4 h-4 m-4" :style="position">📦</div>
  </div>
</template>

<script setup lang="ts">
import { usePosition } from "@/composables/usePosition";
import { Position } from "@/types/position";

interface CargoProps extends Position {}

const props = defineProps<CargoProps>();

const { position } = usePosition(props);
</script>

<style scoped></style>
