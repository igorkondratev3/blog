<script setup>
import StartPageHeader from "../components/StartPage/startPageHeader.vue";
import PostCard from "../components/StartPage/postCard.vue";

const posts = JSON.parse(localStorage.getItem("posts"));
</script>

<template>
  <div class="start-page page">
    <StartPageHeader />
    <main class="posts" v-if="posts">
      <PostCard
        v-for="(post, index) in posts.toReversed()"
        :key="`${index} post`"
        :post="post"
        :postId="posts.length - index - 1"
      />
    </main>
    <div v-else class="start-page__empty">Записи отсутствуют</div>
  </div>
</template>

<style>
.start-page {
  gap: calc(var(--base) * 0.32);
}
.posts {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: calc(var(--base) * 0.32);
}

.start-page__empty {
  align-self: center;
  margin-top: 64px;
  font-size: 80px;
}
</style>
