<script setup>
defineProps({
  value: String,
});

defineEmits(["input"]);
</script>

<template>
  <label class="label-post">
    Полное описание
    <textarea
      v-bind="$attrs"
      class="full-post"
      maxlength="255"
      :value="value"
      @input="$emit('input', $event.target.value)"
    ></textarea>
  </label>
</template>

<style>
.full-post {
  width: calc(var(--base) * 7.5);
  height: calc(var(--base) * 3);
  max-width: 100%;
  max-height: calc(var(--base) * 5);
  padding: calc(var(--base) * 0.08);
  outline: none;
  border: calc(var(--base) * 0.01) solid transparent;
  border-radius: calc(var(--base) * 0.04);
  font: inherit;
  letter-spacing: inherit;
  color: inherit;
  background-color: white;
}
.title-post:focus-visible {
  outline: calc(var(--base) * 0.01) solid black;
}

.label-post {
  display: flex;
  flex-direction: column;
}
</style>
