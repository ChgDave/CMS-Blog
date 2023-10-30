"strict mode";

const btnNewComment = document.querySelector(".new-comment");
const list = document.querySelector(".comment-list");
const commentForm = document.querySelector(".comment-form");
const btnSubmit = document.querySelector(".submit-comment");
const post = document.querySelector(".card");

// function to show the comment form
const newComment = () => {
  list.classList.add("hidden");
  commentForm.classList.remove("hidden");
  btnNewComment.classList.add("hidden");
};
// function for sumbit comment
const submitComment = async (e) => {
  e.preventDefault();
  const comment = document.querySelector(".comment-input").value;
  const post_id = document.querySelector(".card").dataset.postid;

  if (comment) {
    const post = await fetch(`/comment/`, {
      method: "POST",
      body: JSON.stringify({ comment, post_id }),
      headers: { "Content-Type": "application/json" },
    });
    if (post.ok) {
      list.classList.remove("hidden");
      commentForm.classList.add("hidden");
      btnNewComment.classList.remove("hidden");
      console.log("created new comment");
      document.location.replace(`/comment/post/${post_id}`);
    } else {
      alert("Failed to post.");
    }
  }
};

// add event listener to the button
btnNewComment.addEventListener("click", newComment);
btnSubmit.addEventListener("click", submitComment);
