"strict mode";

const btnUpdate = document.querySelector(".update-comment");
const btnDelete = document.querySelector(".delete-comment");

// function to update a comment
const updateComment = async (e) => {
  e.preventDefault();

  const comment = document.querySelector(".comment-input").value;
  const commentId = document.querySelector(".comment-form").dataset.commentid;
  const postId = document.querySelector(".comment-form").dataset.postid;

  if (comment) {
    const commentUpdate = await fetch(`/comment/${commentId}`, {
      method: "PUT",
      body: JSON.stringify({ comment }),
      headers: { "Content-Type": "application/json" },
    });
    if (commentUpdate.ok) {
      document.location.replace(`/comment/post/${postId}`);
    } else {
      alert("Failed to update comment.");
    }
  }
};

// function to delete a comment
const deleteComment = async (e) => {
  e.preventDefault();
  const commentId = document.querySelector(".comment-form").dataset.commentid;
  const postId = document.querySelector(".comment-form").dataset.postid;

  const comment = await fetch(`/comment/${commentId}`, {
    method: "DELETE",
    body: "",
    headers: { "Content-Type": "application/json" },
  });
  if (comment.ok) {
    document.location.replace(`/comment/post/${postId}`);
  } else {
    alert("Failed to delete post.");
  }
};

// add event listener to update and delte comment
btnUpdate.addEventListener("click", updateComment);
btnDelete.addEventListener("click", deleteComment);
