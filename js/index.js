const articlesUrl = `https://artrospective.com/Artrospective/wp-json/wp/v2/posts?_embed&per_page=12`;
const articlesContainerOne = document.querySelector(".articles-container-one");
const articlesContainerTwo = document.querySelector(".articles-container-two");
const articlesContainerThree = document.querySelector(
  ".articles-container-three"
);
const articlesContainerFour = document.querySelector(
  ".articles-container-four"
);

async function fetchArticles() {
  try {
    const response = await fetch(articlesUrl);
    const articles = await response.json();

    console.log(articles);

    articlesContainerOne.innerHTML = "";
    articlesContainerTwo.innerHTML = "";
    articlesContainerThree.innerHTML = "";
    articlesContainerFour.innerHTML = "";

    createSlides(articles);
  } catch (error) {
    console.log(error);
  }
}

fetchArticles();

function createSlides(articles) {
  articles.forEach(function (article, index) {
    if (index === 0 || index === 1 || index === 2) {
      articlesContainerOne.innerHTML += `<div class="articles-styling">
      <img src="${article._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}" class="carousel-image" alt="${article._embedded["wp:featuredmedia"][0].alt_text}">
      <h3>${article.title.rendered}</h3>
      <p class="small-text"><span>Author:</span> ${article._embedded.author[0].name}</p>
      <p class="small-text"><span>Published:</span> ${article.date}</p>
      <p>${article.excerpt.rendered}</p>
      <a class="read-more-button" href="full-article.html?id=${article.id}">Read more</a>
   </div>`;
    } else if (index === 3 || index === 4 || index === 5) {
      articlesContainerTwo.innerHTML += `<div class="articles-styling">
      <img src="${article._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}" class="carousel-image" alt="${article._embedded["wp:featuredmedia"][0].alt_text}">
      <h3>${article.title.rendered}</h3>
      <p class="small-text"><span>Author:</span> ${article._embedded.author[0].name}</p>
      <p class="small-text"><span>Published:</span> ${article.date}</p>
      <p>${article.excerpt.rendered}</p>
      <a class="read-more-button" href="full-article.html?id=${article.id}">Read more</a>
   </div>`;
    } else if (index === 6 || index === 7 || index === 8) {
      articlesContainerThree.innerHTML += `<div class="articles-styling">
      <img src="${article._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}" class="carousel-image" alt="${article._embedded["wp:featuredmedia"][0].alt_text}">
      <h3>${article.title.rendered}</h3>
      <p class="small-text"><span>Author:</span> ${article._embedded.author[0].name}</p>
      <p class="small-text"><span>Published:</span> ${article.date}</p>
      <p>${article.excerpt.rendered}</p>
      <a class="read-more-button" href="full-article.html?id=${article.id}">Read more</a>
   </div>`;
    } else if (index === 9 || index === 10 || index === 11) {
      articlesContainerFour.innerHTML += `<div class="articles-styling">
      <img src="${article._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}" class="carousel-image" alt="${article._embedded["wp:featuredmedia"][0].alt_text}">
      <h3>${article.title.rendered}</h3>
      <p class="small-text"><span>Author:</span> ${article._embedded.author[0].name}</p>
      <p class="small-text"><span>Published:</span> ${article.date}</p>
      <p>${article.excerpt.rendered}</p>
      <a class="read-more-button" href="full-article.html?id=${article.id}">Read more</a>
   </div>`;
    }
  });
}
