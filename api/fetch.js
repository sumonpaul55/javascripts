// fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then(res => res.json())
// .then(json => console.log(json))

function loadData() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPost(data));
}
// get the element where you want to add the new elemnet
function displayPost(posts) {
  const postContainer = document.getElementById("post-container");
  for (let post of posts) {
    console.log(post);
    const div = document.createElement("div");
    div.classList.add("post");
    div.innerHTML = `
        <h4>User-${post.id}</h4>
        <h5>Post: title ${post.title}</h5>
        <p>Post Description ${post.body}</p>
    `;
    postContainer.appendChild(div);
  }
}

loadData();
