<script setup>
import StartPageHeader from "../components/StartPage/startPageHeader.vue";
import PostCard from "../components/StartPage/postCard.vue";

const posts = JSON.parse(localStorage.getItem("posts"));
</script>

<template>
  <div class="page start-page">
    <StartPageHeader />
    <main class="posts">
      <PostCard
        v-for="(post, index) in posts.toReversed()"
        :key="`${index} post`"
        :post="post"
        :postId="index"
      />
    </main>
  </div>
</template>

<style>
.start-page {
  gap: 32px;
}
.posts {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 32px;
}
</style>
