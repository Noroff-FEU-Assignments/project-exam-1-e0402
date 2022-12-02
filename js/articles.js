const articlesUrl = `https://artrospective.com/Artrospective/wp-json/wp/v2/posts?_embed&wp:term`;
const articlesContainer = document.querySelector(".articles-container");

const perPage = document.querySelector(".more-articles-button");

const search = document.querySelector(".search-input");

async function fetchArticles(url) {
  try {
    const response = await fetch(url);
    const articles = await response.json();

    console.log(articles);
    createSlides(articles);
    handleCategoryButtons(articles);

    searchButton.onclick = function searchArticles() {
      const searchedArticles = articles.filter(checkName);
      createSlides(searchedArticles);
    };
  } catch (error) {
    console.log(error);
  }
}

fetchArticles(articlesUrl);

function createSlides(articles) {
  articlesContainer.innerHTML = "";

  articles.forEach(function (article) {
    articlesContainer.innerHTML += `<div>
        <img src="${article._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}" class="carousel-image" alt="${article.slug}">
        <h3>${article.title.rendered}</h3>
        <p><span>Author:</span> ${article._embedded.author[0].name}</p>
        <p><span>Published:</span> ${article.date}</p>
        <p>${article.excerpt.rendered}</p>
        <a href="full-article.html?id=${article.id}">Read more</a>
     </div>`;
  });
}

/*Category buttons*/

function handleCategoryButtons(allProducts) {
  const btns = document.querySelectorAll(".btn");

  if (btns.length === 0) {
    return console.log("There are no category buttons");
  }

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", (event) => {
      const filter = event.target.dataset.filter;

      handleCategoryButtonClasses(event.target, btns);

      console.log(filter);
      const filteredProducts = handleCategoryFiltering(allProducts, filter);

      createSlides(filteredProducts);
    });
  }
}

function handleCategoryButtonClasses(clickedElement, allButtons) {
  allButtons.forEach((btn) => btn.classList.remove("active-button"));
  clickedElement.classList.add("active-button");
}

function handleCategoryFiltering(allProducts, filter) {
  const filteredProducts = allProducts.filter(function (article) {
    if (article._embedded["wp:term"][0][0].name === filter) {
      return true;
    }
  });

  console.log(filteredProducts);

  return filteredProducts;
}

const latestButton = document.querySelector(".latest-button");

latestButton.onclick = function () {
  articlesContainer.innerHTML = "";
  fetchArticles(articlesUrl);
};

/*Search*/

const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-button");

function checkName(article) {
  return (
    article._embedded["wp:term"][0][0].name === searchInput.value ||
    article._embedded["wp:term"][0][0].name.toLowerCase() === searchInput.value
  );
}

/*Fetch more articles button*/

perPage.onclick = function () {
  const newUrl = articlesUrl + `&per_page=100`;
  articlesContainer.innerHTML = "";
  fetchArticles(newUrl);
};
