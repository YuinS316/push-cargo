<template>
  <div>
    <div class="absolute w-4 h-4 m-4" :style="cargoStyle">📦</div>
  </div>
</template>

<script setup lang="ts">
import { usePosition } from "@/composables/usePosition";
import { Position } from "@/types/position";
import { computed } from "vue";

interface CargoProps extends Position {
  onTarget: boolean;
}

const props = defineProps<CargoProps>();

const { position } = usePosition(props);

const cargoStyle = computed(() => {
  return {
    ...position.value,
    opacity: props.onTarget ? 0.8 : 1,
  };
});
</script>

<style scoped></style>
