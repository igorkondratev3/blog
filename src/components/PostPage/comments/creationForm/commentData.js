import { ref, computed } from "vue";

export const useCommentData = () => {
  const commentData = {
    userName: ref(""),
    userEmail: ref(""),
    comment: ref(""),
    reset() {
      this.userName.value = "";
      this.userEmail.value = "";
      this.comment.value = "";
    },
    emailValidate() {
      const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      isCorrectEmail.value =
        !this.userEmail.value || regexEmail.test(this.userEmail.value);
      return isCorrectEmail.value;
    },
  };
  const isCorrectEmail = ref(true);

  const isCorrectCommentData = computed(
    () =>
      commentData.userName.value.trim().length > 0 &&
      commentData.userName.value.length <= 50 &&
      commentData.userEmail.value.length <= 50 &&
      commentData.comment.value.trim().length > 0 &&
      commentData.comment.value.length <= 255
  );

  return { commentData, isCorrectCommentData, isCorrectEmail };
};
