<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  id: String,
});
const posts = JSON.parse(localStorage.getItem("posts"));
const post = ref(structuredClone(posts[props.id]));

const userName = ref("");
const userEmail = ref("");
const comment = ref("");
//const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//проверять при создании комментария

const isCorrectData = computed(
  () =>
    userName.value.length > 0 &&
    userName.value.length <= 50 &&
    userEmail.value.length >= 0 &&
    comment.value.length > 0 &&
    comment.value.length <= 255
);

const addComment = () => {
  const date = new Date();
  let correctDate = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;
  correctDate = correctDate
    .split("-")
    .map((dateP) => (dateP.length === 1 ? "0" + dateP : dateP))
    .join("-");

  const comm = {
    userName: userName.value,
    userEmail: userEmail.value,
    comment: comment.value,
    date: correctDate,
  };
  post.value.comments.push(comm);
  posts[props.id].comments.push(comm);
  localStorage.setItem("posts", JSON.stringify(posts));
  userName.value = "";
  userEmail.value = "";
  comment.value = "";
};

const deleteComment = (commentIndex) => {
  console.log(commentIndex);
  post.value.comments.splice(commentIndex, 1);
  posts[props.id].comments.splice(commentIndex, 1);
  localStorage.setItem("posts", JSON.stringify(posts));
};
</script>

<template>
  <div class="page">
    <article class="post-cont">
      <h2 class="title-p">{{ post.title }}</h2>
      <p class="short-p">{{ post.shortDescription }}</p>
      <p class="full-p">{{ post.fullDescription }}</p>
      <p class="date-p">{{ post.date }}</p>
      <div class="post-buttons">
        <button class="base-button">Удалить запись</button>
      </div>
    </article>
    <div class="commentsss">
      <div class="comments-value">
        <h4>Комментарии</h4>
        <div
          class="comment-value"
          v-for="(comment, index) in post.comments"
          :key="`${index} comment`"
        >
          <div class="user-information">
            <div class="inf"><strong>Имя:</strong> {{ comment.userName }}</div>
            <div class="inf" v-if="Boolean(comment.userEmail)">
              <strong>email:</strong> {{ comment.userEmail }}
            </div>
          </div>
          <div class="co-value">{{ comment.comment }}</div>
          <div class="co-date">{{ comment.date }}</div>
          <img
            src="/src/assets/images/delete.svg"
            alt="delete"
            class="del-com"
            @click="deleteComment(index)"
          />
        </div>
      </div>
      <form class="add-com">
        <input
          class="user-name inp"
          type="text"
          required
          placeholder="Имя"
          maxlength="50"
          v-model="userName"
        />
        <input
          class="user-email inp"
          type="email"
          maxlength="50"
          placeholder="email"
          v-model="userEmail"
        />
        <textarea
          class="com-con"
          required
          maxlength="255"
          placeholder="Текст комментария"
          v-model="comment"
        >
        </textarea>
        <button
          class="base-button com-button"
          :disabled="!isCorrectData"
          @click.prevent="addComment"
        >
          Добавить комментарий
        </button>
      </form>
    </div>
  </div>
</template>

<style>
.comment-value {
  max-width: 500px;
  font-size: 16px;
}

.user-information {
  display: flex;
  gap: 8px;
  word-wrap: break-word;
  word-break: break-all;
  flex-wrap: wrap;
}

.inf {
  max-width: 245px;
}

.del-com {
  width: 16px;
  height: 16px;
  position: absolute;
  bottom: 0;
  left: 8px;
  cursor: pointer;
}

.co-value {
  width: 500px;
  padding: 8px;
  border: 1px solid black;
  border-radius: 16px;
  word-wrap: break-word;
  word-break: break-all;
  white-space: pre-wrap;
}

.co-date {
  align-self: flex-end;
}

.date-p {
  font-size: 16px;
}

.comments-value {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.comment-value {
  display: flex;
  flex-direction: column;
}

.commentsss {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  border-top: 1px solid black;
  padding: 16px 8px 0px;
  border-radius: 16px;
}
.inp {
  width: calc(var(--base) * 7.5);
  padding: calc(var(--base) * 0.08);
  outline: none;
  border: calc(var(--base) * 0.01) solid transparent;
  border-radius: calc(var(--base) * 0.04);
  font: inherit;
  letter-spacing: inherit;
  color: inherit;
  background-color: white;
}
.inp:focus-visible {
  outline: calc(var(--base) * 0.01) solid black;
}

.com-con {
  width: calc(var(--base) * 7.5);
  height: calc(var(--base) * 3);
  max-width: 100%;
  max-height: calc(var(--base) * 5);
  padding: calc(var(--base) * 0.08);
  outline: none;
  border: calc(var(--base) * 0.01) solid transparent;
  border-radius: calc(var(--base) * 0.04);
  font: inherit;
  letter-spacing: inherit;
  color: inherit;
  background-color: white;
}
.com-con:focus-visible {
  outline: calc(var(--base) * 0.01) solid black;
}

.post-cont {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 64px;
}

.com-button {
  align-self: flex-start;
}

.add-com {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  margin-top: 16px;
}

.short-p {
  word-wrap: break-word;
  word-break: break-all;
}

.full-p {
  word-wrap: break-word;
  word-break: break-all;
}
</style>
