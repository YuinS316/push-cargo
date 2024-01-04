<template>
  <div>
    <div class="absolute w-4 h-4 m-4" :style="position">🏁</div>
  </div>
</template>

<script setup lang="ts">
import { usePosition } from "@/composables/usePosition";
import { Position } from "@/types/position";

interface TargetProps extends Position {}

const props = defineProps<TargetProps>();

const { position } = usePosition(props);
</script>

<style scoped></style>
