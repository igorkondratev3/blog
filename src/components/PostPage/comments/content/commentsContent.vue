<script setup>
import { normalizeDate } from "@/helpers/common.js";

defineProps({
  comments: Array,
});
defineEmits(["deleteComment"]);
</script>

<template>
  <div class="comments-content">
    <h4 class="comments-content__header">Комментарии</h4>
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
  gap: 16px;
}

.comments-content__comment {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  font-size: 16px;
}

.comment__user-information {
  display: flex;
  gap: 8px;
  margin: 0px 4px;
  overflow-wrap: anywhere;
  word-break: break-all;
}

.comment__value {
  width: 500px;
  padding: 8px;
  border: 1px solid black;
  border-radius: 8px;
  overflow-wrap: anywhere;
  word-break: break-all;
  white-space: pre-line;
}

.comment__date {
  align-self: flex-end;
  margin-right: 4px;
}

.comment__delete {
  position: absolute;
  bottom: 0;
  left: 4px;
  border: none;
  cursor: pointer;
  background-color: transparent;
}

.icon16 {
  width: 16px;
  height: 16px;
}
</style>
