"strict mode";

const btnNewPost = document.querySelector(".new-post");
const list = document.querySelector(".post-list");
const postForm = document.querySelector(".post-form");
const btnSubmit = document.querySelector(".submit-post");

const newPost = () => {
  list.classList.add("hidden");
  postForm.classList.remove("hidden");
  btnNewPost.classList.add("hidden");
};

const submitPost = async (e) => {
  e.preventDefault();
  const title = document.querySelector(".title").value;
  const content = document.querySelector(".content").value;

  if (title && content) {
    const post = await fetch(`/post/`, {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });
    if (post.ok) {
      list.classList.remove("hidden");
      postForm.classList.add("hidden");
      btnNewPost.classList.remove("hidden");
      document.location.replace("/post");
    } else {
      alert("Failed to post.");
    }
  }
};

btnNewPost.addEventListener("click", newPost);
btnSubmit.addEventListener("click", submitPost);
