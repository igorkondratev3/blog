<script setup>
import FullDescription from "@/components/CreatePost/postCreationForm/formFields/fullDescription.vue";
import ShortDescription from "@/components/CreatePost/postCreationForm/formFields/shortDescription.vue";
import TitleInput from "@/components/CreatePost/postCreationForm/formFields/titleInput.vue";
import TheHeader from "@/components/common/TheHeader.vue";
import CommentCreationForm from "@/components/PostPage/comments/creationForm/commentCreationForm.vue";
import CommentsContent from "@/components/PostPage/comments/content/commentsContent.vue";
import { useRouter } from "vue-router/composables";
import { usePostData } from "@/composables/PostPage/postData.js";
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
      <TitleInput v-else v-model="postData.post.value.title" :maxlength="50" />
      <p v-if="!editMode" class="post__short-description">
        {{ postData.post.value.shortDescription }}
      </p>
      <ShortDescription
        v-else
        v-model="postData.post.value.shortDescription"
        :maxlength="100"
      />
      <p v-if="!editMode" class="post__full-description">
        {{ postData.post.value.fullDescription }}
      </p>
      <FullDescription
        v-else
        v-model="postData.post.value.fullDescription"
        :maxlength="255"
      />
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
      <h4 class="comments__header">Комментарии</h4>
      <div class="comments__wrapper">
        <CommentsContent
          :comments="postData.post.value.comments"
          @deleteComment="postData.deleteComment"
        />
        <CommentCreationForm @addCommentInPost="postData.addComment" />
      </div>
    </div>
  </div>
</template>

<style>
.post-page {
  gap: calc(var(--base) * 0.64);
}

.post {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: calc(var(--base) * 0.16);
}

.post__title,
.post__short-description,
.post__full-description {
  overflow-wrap: anywhere;
  word-break: break-all;
  white-space: pre-line;
}

.post__date {
  font-size: calc(var(--base) * 0.16);
}

.post__buttons {
  display: flex;
  gap: calc(var(--base) * 0.16);
}

.comments {
  display: flex;
  flex-direction: column;
  padding: calc(var(--base) * 0.16) calc(var(--base) * 0.08) 0px;
  border-top: calc(var(--base) * 0.01) solid black;
  border-radius: calc(var(--base) * 0.16);
  gap: calc(var(--base) * 0.16);
}

.comments__wrapper {
  display: flex;
  justify-content: space-between;
  gap: calc(var(--base) * 0.16);
}

@media (max-width: 920px) {
  .comments__wrapper {
    flex-direction: column;
    justify-content: flex-start;
  }
}
</style>
