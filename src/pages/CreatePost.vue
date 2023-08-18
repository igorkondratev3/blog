<script setup>
import PostCreationForm from "@/components/CreatePost/postCreationForm/postCreationForm.vue";
import TheHeader from "@/components/common/TheHeader.vue";
</script>

<template>
  <div class="create-post page">
    <TheHeader header="Создание записи" />
    <PostCreationForm />
  </div>
</template>

<style>
.create-post {
  gap: calc(var(--base) * 0.64);
}
</style>
