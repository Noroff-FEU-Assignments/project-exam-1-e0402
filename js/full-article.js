const articleContainer = document.querySelector(".article-container");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

const url = `https://artrospective.com/Artrospective/wp-json/wp/v2/posts/${id}?_embed`;
async function fetchArticle() {
  try {
    const response = await fetch(url);
    const article = await response.json();

    articleContainer.innerHTML = "";

    console.log(article);

    createHTML(article);
  } catch (error) {
    console.log(error);
  }
}

fetchArticle();

function createHTML(article) {
  articleContainer.innerHTML += `<div>
  <h1>${article.title.rendered}</h1>
  <p><span>Published:</span> ${article.date}</p>
  <p><span>Author:</span> ${article._embedded.author[0].name}</p>
  <p>${article.content.rendered}</p>
</div>`;
}
