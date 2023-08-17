import { ref, computed } from "vue";

export const usePostData = () => {
  const postData = {
    title: ref(""),
    shortDescription: ref(""),
    fullDescription: ref(""),
  };

  const isCorrectPostData = computed(
    () =>
      Boolean(postData.title.value) &&
      Boolean(postData.shortDescription.value) &&
      postData.title.value.length <= 50 &&
      postData.shortDescription.value.length <= 100 &&
      postData.fullDescription.value.length <= 255
  );

  return { postData, isCorrectPostData };
};
