import { getDate } from "@/helpers/common.js";

export const getComment = (commentData) => {
  const comment = {
    userName: commentData.userName.value,
    userEmail: commentData.userEmail.value,
    comment: commentData.comment.value,
    date: getDate(),
  };
  commentData.reset();
  return comment;
};
