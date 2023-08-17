<script setup>
import TitleInput from "./formFields/titleInput.vue";
import ShortDescription from "./formFields/shortDescription.vue";
import FullDescription from "./formFields/fullDescription.vue";
import { useRouter } from "vue-router/composables";
import { usePostData } from "./postData.js";
import { createPost } from "./helpers.js";

const router = useRouter();
const { postData, isCorrectPostData } = usePostData();
</script>

<template>
  <form class="post-creation-form">
    <TitleInput v-model="postData.title.value" />
    <ShortDescription v-model="postData.shortDescription.value" />
    <FullDescription v-model="postData.fullDescription.value" />
    <button
      class="create-post-button base-button"
      @click.prevent="createPost(postData, router)"
      :disabled="!isCorrectPostData"
    >
      Создать запись
    </button>
  </form>
</template>

<style>
.post-creation-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: center;
  gap: 16px;
}
</style>
