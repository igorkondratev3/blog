<script setup>
import { computed } from "vue";

const props = defineProps({
  value: String,
  maxlength: Number,
});

const remaingCharacters = computed(() => props.maxlength - props.value.length);
</script>

<template>
  <div class="remaing-characters">
    {{ remaingCharacters }}
  </div>
</template>

<style>
.remaing-characters {
  align-self: flex-end;
  font-size: calc(var(--base) * 0.16);
  color: gray;
}
</style>
