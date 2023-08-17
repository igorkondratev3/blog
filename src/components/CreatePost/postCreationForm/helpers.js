import { getDate } from "@/helpers/common.js";

export const createPost = (postData, router) => {
  const post = {
    title: postData.title.value,
    shortDescription: postData.shortDescription.value,
    fullDescription: postData.fullDescription.value,
    date: getDate(),
    comments: [],
  };

  let posts = JSON.parse(localStorage.getItem("posts"));
  posts ? posts.push(post) : (posts = [post]);
  localStorage.setItem("posts", JSON.stringify(posts));
  router.push("/");
};
