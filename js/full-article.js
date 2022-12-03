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

    /*Image modal*/
    const contentImage = document.querySelector(".content-image figure");
    const contentParagraph = document.querySelector(
      ".content-image p:nth-child(1)"
    );
    const modalImage = document.querySelector(".hide-image");
    const main = document.querySelector("main");

    contentImage.addEventListener("click", function showModalImage() {
      modalImage.style.display = "block";
      contentImage.style.display = "none";
      contentParagraph.style.display = "none";
    });

    main.addEventListener("click", function closeModalImage(event) {
      if (event.target.closest(".hide-image")) {
        modalImage.style.display = "none";
        contentImage.style.display = "block";
        contentParagraph.style.display = "block";
      }
    });
  } catch (error) {
    console.log(error);
  }
}

fetchArticle();

function createHTML(article) {
  document.title = `ARTrospective | ${article.title.rendered}`;
  articleContainer.innerHTML += `<div class="content">
    <h1>${article.title.rendered}</h1>
    <p><span>Published:</span> ${article.date}</p>
    <p><span>Author:</span> ${article._embedded.author[0].name}</p>
  </div>
  <div>
    <img class="hide-image" src="${article._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}" class="carousel-image">
    <div class="content-image content-two">${article.content.rendered}</div>
  </div>`;
}
