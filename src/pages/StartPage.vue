<script setup>
import TheHeader from "../components/StartPage/TheHeader.vue";
import PostCard from "../components/PostPage/postCard.vue";

const posts = JSON.parse(localStorage.getItem("posts"));
</script>

<template>
  <div class="page start-page">
    <TheHeader />
    <main class="cards">
      <PostCard
        v-for="(post, index) in posts"
        :key="`${index}post`"
        :post="post"
        :postId="index"
      />
    </main>
  </div>
</template>

<style>
.start-page {
  gap: 32px;
  align-items: flex-start;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  align-self: center;
  justify-content: space-between;
  gap: 32px;
}
</style>
