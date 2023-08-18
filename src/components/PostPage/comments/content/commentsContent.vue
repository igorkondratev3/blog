<script setup>
import { normalizeDate } from "@/helpers/common.js";

defineProps({
  comments: Array,
});
defineEmits(["deleteComment"]);
</script>

<template>
  <div class="comments-content">
    <div
      class="comments-content__comment comment"
      v-for="(comment, index) of comments.toReversed()"
      :key="`${index} comment`"
    >
      <div class="comment__user-information">
        <div class="comment__user-name">
          <strong>Имя:</strong> {{ comment.userName }}
        </div>
        <div class="comment__user-email" v-if="Boolean(comment.userEmail)">
          <strong>email:</strong> {{ comment.userEmail }}
        </div>
      </div>
      <div class="comment__value">{{ comment.comment }}</div>
      <div class="comment__date">{{ normalizeDate(comment.date) }}</div>
      <button
        class="comment__delete"
        @click="$emit('deleteComment', comments.length - index - 1)"
      >
        <img src="/src/assets/images/delete.svg" alt="delete" class="icon16" />
      </button>
    </div>
  </div>
</template>

<style>
.comments-content {
  display: flex;
  flex-direction: column;
  gap: calc(var(--base) * 0.16);
}

.comments-content__comment {
  display: flex;
  flex-direction: column;
  max-width: calc(var(--base) * 5);
  font-size: calc(var(--base) * 0.16);
}

.comment__user-information {
  display: flex;
  gap: calc(var(--base) * 0.08);
  margin: 0px calc(var(--base) * 0.04);
  overflow-wrap: anywhere;
  word-break: break-all;
}

.comment__value {
  width: calc(var(--base) * 5);
  padding: calc(var(--base) * 0.08);
  border: calc(var(--base) * 0.01) solid black;
  border-radius: calc(var(--base) * 0.08);
  overflow-wrap: anywhere;
  word-break: break-all;
  white-space: pre-line;
}

.comment__date {
  align-self: flex-end;
  margin-right: calc(var(--base) * 0.04);
}

.comment__delete {
  position: absolute;
  bottom: 0;
  left: calc(var(--base) * 0.04);
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
}

.comment__delete:focus-visible {
  border-radius: calc(var(--base) * 0.04);
  outline: calc(var(--base) * 0.01) solid black;
}

.icon16 {
  display: block;
  width: calc(var(--base) * 0.16);
  height: calc(var(--base) * 0.16);
}

@media (max-width: 555px) {
  .comments-content__comment {
    max-width: calc(var(--base) * 3.4);
  }

  .comment__value {
    width: calc(var(--base) * 3.4);
  }
}
</style>
