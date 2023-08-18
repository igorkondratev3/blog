import { ref, computed } from "vue";
import { getDate } from "@/helpers/common.js";

export const usePostData = (postId) => {
  let id = postId;
  const posts = JSON.parse(localStorage.getItem("posts"));

  const postData = {
    post: ref(structuredClone(posts[id])),

    deletePost(router) {
      posts.splice(id, 1);
      localStorage.setItem("posts", JSON.stringify(posts));
      router.push("/");
    },
    editPost() {
      this.post.value.date = getDate();
      posts.splice(id, 1);
      posts.push(structuredClone(this.post.value));
      localStorage.setItem("posts", JSON.stringify(posts));
      id = posts.length - 1;
      editMode.value = false;
    },
    deleteComment(commentIndex) {
      postData.post.value.comments.splice(commentIndex, 1);
      posts[id].comments.splice(commentIndex, 1);
      localStorage.setItem("posts", JSON.stringify(posts));
    },
    addComment(comment) {
      postData.post.value.comments.push(comment);
      posts[id].comments.push(comment);
      localStorage.setItem("posts", JSON.stringify(posts));
    },
  };

  const isCorrectPostData = computed(
    () =>
      Boolean(postData.post.value.title.trim()) &&
      Boolean(postData.post.value.shortDescription.trim()) &&
      postData.post.value.title.length <= 50 &&
      postData.post.value.shortDescription.length <= 100 &&
      postData.post.value.fullDescription.length <= 255
  );

  const editMode = ref(false);

  return { postData, isCorrectPostData, editMode };
};
