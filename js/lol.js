import article from "./articles-folder.js/articles.js";

let articlesToRender = createSlides(articles);

search.onkeyup = function () {
  const searchValue = event.target.value.trim().toLowerCase();

  const filteredArticles = articles.filter(function (article) {
    if (article.title.rendered.toLowerCase().startsWith(searchValue)) {
      return true;
    }
  });

  console.log(filteredArticles);

  articlesToRender = filteredArticles;

  createSlides(articles);
};

const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-button");
const searchValue = value.trim().toLowerCase();

function checkName(article) {
  if (
    article.title.rendered.toLowerCase().startsWith(searchValue) ===
    searchInput.value
  ) {
    return true;
  }
}

// const searchValue = event.target.value.trim().toLowerCase();

//   const filteredArticles = articles.filter(function (article) {
//     if (article.title.rendered.toLowerCase().startsWith(searchValue)) {
//       return true;
//     }
//   });
