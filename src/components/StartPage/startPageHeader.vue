<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="start-page__header header">
    <h1 class="header__value">Мини-блог</h1>
    <RouterLink to="/create-post" class="create-post-link base-button">
      Создать запись
    </RouterLink>
  </header>
</template>

<style>
.start-page__header {
  position: sticky;
  top: 0;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(232, 238, 233);
}
</style>
