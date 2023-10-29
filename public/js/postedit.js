"strict mode";

const btnUpdate = document.querySelector(".update-post");
const btnDelete = document.querySelector(".delete-post");

const updatePost = async (e) => {
  e.preventDefault();
  const title = document.querySelector(".title").value;
  const content = document.querySelector(".content").value;
  const postId = document.querySelector(".post-form").dataset.postid;
  if (title && content) {
    const post = await fetch(`/post/${postId}`, {
      method: "PUT",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });
    if (post.ok) {
      document.location.replace("/post");
    } else {
      alert("Failed to update post.");
    }
  }
};

const deletePost = async (e) => {
  e.preventDefault();
  const postId = document.querySelector(".post-form").dataset.postid;

  const post = await fetch(`/post/${postId}`, {
    method: "DELETE",
    body: "",
    headers: { "Content-Type": "application/json" },
  });
  if (post.ok) {
    document.location.replace("/post");
  } else {
    alert("Failed to delete post.");
  }
};

btnUpdate.addEventListener("click", updatePost);
btnDelete.addEventListener("click", deletePost);
