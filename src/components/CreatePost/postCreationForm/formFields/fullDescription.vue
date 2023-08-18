<script setup>
import RemaingCharacters from "./remaingCharacters.vue";

defineProps({
  value: String,
  maxlength: Number,
});

defineEmits(["input"]);
</script>

<template>
  <label class="full-post-description">
    <h5 class="full-post-description__header">Полное описание</h5>
    <textarea
      class="full-post-description__value"
      :maxlength="maxlength"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"
    ></textarea>
    <RemaingCharacters :value="value" :maxlength="maxlength" />
  </label>
</template>

<style>
.full-post-description {
  display: flex;
  flex-direction: column;
}

.full-post-description__value {
  max-width: calc(var(--base) * 7.5);
  min-width: calc(var(--base) * 7.5);
  height: calc(var(--base) * 3);
  max-height: calc(var(--base) * 5);
  padding: calc(var(--base) * 0.08);
  border: calc(var(--base) * 0.01) solid transparent;
  border-radius: calc(var(--base) * 0.04);
  font: inherit;
  letter-spacing: inherit;
  color: inherit;
  background-color: white;
}

.full-post-description__value:focus-visible {
  outline: calc(var(--base) * 0.01) solid black;
}
</style>
