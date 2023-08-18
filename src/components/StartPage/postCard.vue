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
  min-width: calc(var(--base) * 4.2);
  height: calc(var(--base) * 3);
  color: inherit;
  outline: none;
  text-decoration: none;
  transition: transform 0.2s linear;
}

.post-link:hover {
  transform: scale(1.03);
}

.post-link:focus-visible {
  transform: scale(1.03);
}

.post-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: calc(var(--base) * 0.16);
  height: 100%;
  border: calc(var(--base) * 0.01) solid black;
  border-radius: calc(var(--base) * 0.16);
  padding: calc(var(--base) * 0.16);
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
  gap: calc(var(--base) * 0.16);
}

.post-card__title {
  font-size: calc(var(--base) * 0.32);
  overflow-wrap: anywhere;
  word-break: break-all;
}

.post-card__short-description {
  overflow-wrap: anywhere;
  word-break: break-all;
  white-space: pre-line;
}

.post-card__info {
  display: flex;
  flex-direction: column;
  gap: calc(var(--base) * 0.08);
}

.post-card__comments,
.post-card__date {
  align-self: flex-end;
  font-size: calc(var(--base) * 0.2);
}

@media (max-width: 460px) {
  .post-link {
    min-width: calc(var(--base) * 3.4);
  }
}
</style>
