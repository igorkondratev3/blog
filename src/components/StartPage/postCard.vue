<script setup>
import { RouterLink } from "vue-router";
import { normalizeDate } from "@/helpers/common.js";

defineProps({
  post: Object,
  postId: Number,
});
</script>

<template>
  <RouterLink :to="`/post/${postId}`" class="post-link">
    <article class="post-card">
      <section class="post-card__content">
        <h3 class="post-card__title">{{ post.title }}</h3>
        <p class="post-card__short-description">{{ post.shortDescription }}</p>
      </section>
      <section class="post-card__info">
        <p class="post-card__comments">
          комментарии: {{ post.comments.length }}
        </p>
        <p class="post-card__date">
          {{ normalizeDate(post.date) }}
        </p>
      </section>
    </article>
  </RouterLink>
</template>

<style>
.post-link {
  width: 30vw;
  height: 300px;
  color: inherit;
  text-decoration: none;
}

.post-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  border: 1px solid black;
  border-radius: 16px;
  padding: 16px;
  overflow-y: auto;
}

.post-card::-webkit-scrollbar {
  display: none;
}

.post-card::-webkit-scrollbar-track {
  display: none;
}

.post-card::-webkit-scrollbar-thumb {
  display: none;
}

.post-card {
  scrollbar-width: none;
}

.post-card__content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.post-card__title {
  font-size: 32px;
  overflow-wrap: anywhere;
  word-break: break-all;
}

.post-card__short-description {
  overflow-wrap: anywhere;
  word-break: break-all;
  white-space: pre-wrap;
}

.post-card__info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.post-card__comments,
.post-card__date {
  align-self: flex-end;
  font-size: 20px;
}
</style>
