<script setup>
import { RouterLink } from "vue-router";
defineProps({
  post: Object,
  postId: Number,
});
</script>

<template>
  <RouterLink :to="`/post/${postId}`" class="lon">
    <article class="post-card">
      <section class="title-short">
        <h3 class="title">{{ post.title }}</h3>
        <p class="short-dis">{{ post.shortDescription }}</p>
      </section>
      <section class="comments-date">
        <p class="comments">комментарии: {{ post.comments.length }}</p>
        <p class="date">
          {{ post.date.split("-").toReversed().join("-") }}
        </p>
      </section>
    </article>
  </RouterLink>
</template>

<style>
.title-short {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.comments-date {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.lon {
  text-decoration: none;
  color: inherit;
  width: 30vw;
  height: 300px;
}

.post-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 16px;
  padding: 16px;
  gap: 16px;
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

.short-dis {
  word-wrap: break-word;
  word-break: break-all;
  white-space: pre-wrap;
}

.title {
  font-size: 32px;
  word-wrap: break-word;
  word-break: break-all;
}

.date {
  align-self: flex-end;
  font-size: 20px;
}

.comments {
  align-self: flex-end;
  font-size: 20px;
}
</style>
