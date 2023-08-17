<script setup>
import { RouterLink } from "vue-router";

defineProps({
  header: String,
});
</script>

<template>
  <header class="header">
    <h1 class="header__value">{{ header }}</h1>
    <RouterLink to="/" class="home-link base-button"> На главную </RouterLink>
  </header>
</template>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
