<script setup>
import TitleInput from "./inputs/titleInput.vue";
import ShortDescription from "./inputs/shortDescription.vue";
import FullDescription from "./inputs/fullDescription.vue";
import { ref, computed } from "vue";
import { useRouter } from "vue-router/composables";

const title = ref("");
const shortDescription = ref("");
const fullDescription = ref("");

const router = useRouter();

const createPost = () => {
  const date = new Date();
  const correctDate = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;

  const post = {
    title: title.value,
    shortDescription: shortDescription.value,
    fullDescription: fullDescription.value,
    date: correctDate,
    comments: [],
  };

  let posts = JSON.parse(localStorage.getItem("posts"));
  posts ? posts.push(post) : (posts = [post]);
  localStorage.setItem("posts", JSON.stringify(posts));
  router.push("/");
};

const isCorrectData = computed(
  () =>
    Boolean(title.value) &&
    Boolean(shortDescription.value) &&
    title.value.length <= 50 &&
    shortDescription.value.length <= 100 &&
    fullDescription.value.length <= 255
);
</script>

<template>
  <form class="form">
    <TitleInput v-model="title" />
    <ShortDescription v-model="shortDescription" />
    <FullDescription v-model="fullDescription" />
    <button
      class="base-button create-post-button"
      @click.prevent="createPost"
      :disabled="!isCorrectData"
    >
      Создать запись
    </button>
  </form>
</template>

<style>
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: center;
  gap: 16px;
}
</style>
