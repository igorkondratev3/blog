<script setup>
import { useRouter } from "vue-router/composables";
import FullDescription from "@/components/CreatePost/postCreationForm/formFields/fullDescription.vue";
import ShortDescription from "@/components/CreatePost/postCreationForm/formFields/shortDescription.vue";
import TitleInput from "@/components/CreatePost/postCreationForm/formFields/titleInput.vue";
import TheHeader from "@/components/common/TheHeader.vue";
import CommentCreationForm from "@/components/PostPage/comments/creationForm/commentCreationForm.vue";
import CommentsContent from "@/components/PostPage/comments/content/commentsContent.vue";
import { usePostData } from "@/components/PostPage/postData.js";
import { normalizeDate } from "@/helpers/common.js";

const props = defineProps({
  id: String,
});

const router = useRouter();

const { postData, isCorrectPostData, editMode } = usePostData(props.id);
</script>

<template>
  <div class="post-page page">
    <TheHeader header="Мини-блог" />
    <article class="post">
      <h2 v-if="!editMode" class="post__title">
        {{ postData.post.value.title }}
      </h2>
      <TitleInput v-else v-model="postData.post.value.title" />
      <p v-if="!editMode" class="post__short-description">
        {{ postData.post.value.shortDescription }}
      </p>
      <ShortDescription v-else v-model="postData.post.value.shortDescription" />
      <p v-if="!editMode" class="post__full-description">
        {{ postData.post.value.fullDescription }}
      </p>
      <FullDescription v-else v-model="postData.post.value.fullDescription" />
      <p class="post__date">{{ normalizeDate(postData.post.value.date) }}</p>
      <div class="post__buttons">
        <button
          class="post__delete base-button"
          @click="postData.deletePost(router)"
        >
          Удалить запись
        </button>
        <button
          class="post__edit base-button"
          v-if="!editMode"
          @click="editMode = true"
        >
          Редактировать запись
        </button>
        <button
          class="base-button"
          v-else
          @click="postData.editPost()"
          :disabled="!isCorrectPostData"
        >
          Закончить редактирование
        </button>
      </div>
    </article>
    <div class="comments">
      <CommentsContent
        :comments="postData.post.value.comments"
        @deleteComment="postData.deleteComment"
      />
      <CommentCreationForm @addCommentInPost="postData.addComment" />
    </div>
  </div>
</template>

<style>
.post-page {
  gap: 64px;
}

.post {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
}

.post__short-description,
.post__full-description {
  word-wrap: break-word;
  word-break: break-all;
  white-space: pre-line;
}

.post__date {
  font-size: 16px;
}

.post__buttons {
  display: flex;
  gap: 16px;
}

.comments {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  border-top: 1px solid black;
  padding: 16px 8px 0px;
  border-radius: 16px;
}
</style>
