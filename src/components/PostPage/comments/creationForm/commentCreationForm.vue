<script setup>
import { useCommentData } from "./commentData.js";
import { getComment } from "./helpers.js";

defineEmits(["addCommentInPost"]);

const { commentData, isCorrectCommentData, isCorrectEmail } = useCommentData();
</script>

<template>
  <form class="comment-creation-form">
    <input
      type="text"
      class="comment-creation-form__user-name comment-creation-form__input"
      placeholder="Имя"
      required
      maxlength="50"
      v-model="commentData.userName.value"
    />
    <input
      type="email"
      class="comment-creation-form__user-email comment-creation-form__input"
      placeholder="email"
      maxlength="50"
      v-model="commentData.userEmail.value"
    />
    <textarea
      class="comment-creation-form__content"
      required
      maxlength="255"
      placeholder="Текст комментария"
      v-model="commentData.comment.value"
    >
    </textarea>
    <div class="comment-creation-form__create">
      <button
        class="comment-creation-form__button base-button"
        :disabled="!isCorrectCommentData"
        @click.prevent="
          commentData.emailValidate()
            ? $emit('addCommentInPost', getComment(commentData))
            : undefined
        "
      >
        Добавить комментарий
      </button>
      <div class="email-clue" v-if="!isCorrectEmail">
        Email должен соответстоввать шаблону name@email.com
      </div>
    </div>
  </form>
</template>

<style>
.comment-creation-form {
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  gap: calc(var(--base) * 0.16);
  margin-top: calc(var(--base) * 0.64);
}

.comment-creation-form__input {
  width: calc(var(--base) * 7.5);
  padding: calc(var(--base) * 0.08);
  outline: none;
  border: calc(var(--base) * 0.01) solid transparent;
  border-radius: calc(var(--base) * 0.04);
  font: inherit;
  font-size: calc(var(--base) * 0.2);
  letter-spacing: inherit;
  color: inherit;
  background-color: white;
}

.comment-creation-form__input:focus-visible {
  outline: calc(var(--base) * 0.01) solid black;
}

.comment-creation-form__content {
  min-width: calc(var(--base) * 7.5);
  max-width: calc(var(--base) * 7.5);
  height: calc(var(--base) * 1);
  max-height: calc(var(--base) * 3);
  padding: calc(var(--base) * 0.08);
  outline: none;
  border: calc(var(--base) * 0.01) solid transparent;
  border-radius: calc(var(--base) * 0.04);
  font: inherit;
  font-size: calc(var(--base) * 0.2);
  letter-spacing: inherit;
  color: inherit;
  background-color: white;
}

.comment-creation-form__content:focus-visible {
  outline: calc(var(--base) * 0.01) solid black;
}

.comment-creation-form__create {
  display: flex;
  gap: calc(var(--base) * 0.08);
}

.email-clue {
  padding: calc(var(--base) * 0.08);
  border-radius: calc(var(--base) * 0.08);
  background-color: rgb(221, 100, 100);
  font-size: calc(var(--base) * 0.16);
  color: white;
}
</style>
