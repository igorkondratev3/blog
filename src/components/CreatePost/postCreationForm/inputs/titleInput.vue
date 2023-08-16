<script setup>
defineProps({
  value: String,
});

defineEmits(["input"]);
</script>

<template>
  <label class="label-post">
    Заголовок
    <input
      v-bind="$attrs"
      class="title-post"
      type="text"
      maxlength="50"
      required
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </label>
</template>

<style>
.title-post {
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
.title-post:focus-visible {
  outline: calc(var(--base) * 0.01) solid black;
}

.label-post {
  display: flex;
  flex-direction: column;
}
</style>
