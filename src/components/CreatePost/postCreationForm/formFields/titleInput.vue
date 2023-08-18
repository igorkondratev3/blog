<script setup>
import RemaingCharacters from "./remaingCharacters.vue";

defineProps({
  value: String,
  maxlength: Number,
});

defineEmits(["input"]);
</script>

<template>
  <label class="post-title">
    <h5 class="post-title__header">Заголовок</h5>
    <input
      type="text"
      class="post-title__value"
      :maxlength="maxlength"
      required
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <RemaingCharacters :value="value" :maxlength="maxlength" />
  </label>
</template>

<style>
.post-title {
  display: flex;
  flex-direction: column;
}

.post-title__value {
  width: calc(var(--base) * 7.5);
  padding: calc(var(--base) * 0.08);
  outline: none;
  border: calc(var(--base) * 0.01) solid transparent;
  border-radius: calc(var(--base) * 0.04);
  font: inherit;
  letter-spacing: inherit;
  color: inherit;
  background-color: white;
}

.post-title__value:focus-visible {
  outline: calc(var(--base) * 0.01) solid black;
}

@media (max-width: 800px) {
  .post-title__value {
    width: calc(var(--base) * 5.5);
  }
}

@media (max-width: 600px) {
  .post-title__value {
    width: calc(var(--base) * 3.5);
  }
}
</style>
