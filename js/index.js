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
    createSlides(articles);
  } catch (error) {
    console.log(error);
  }
}

fetchArticles();

function createSlides(articles) {
  articles.forEach(function (article) {
    if (
      article.slug === "product-1" ||
      article.slug === "product-2" ||
      article.slug === "product-3"
    ) {
      articlesContainerOne.innerHTML += `<div>
      <img src="${article._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}" class="carousel-image" alt="${article.slug}">
      <h3>${article.title.rendered}</h3>
      <p><span>Author:</span> ${article._embedded.author[0].name}</p>
      <p><span>Published:</span> ${article.date}</p>
      <p>${article.excerpt.rendered}</p>
      <a href="">Read more</a>
   </div>`;
    } else if (
      article.slug === "product-4" ||
      article.slug === "product-5" ||
      article.slug === "product-6"
    ) {
      articlesContainerTwo.innerHTML += `<div>
      <img src="${article._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}" class="carousel-image" alt="${article.slug}">
      <h3>${article.title.rendered}</h3>
      <p><span>Author:</span> ${article._embedded.author[0].name}</p>
      <p><span>Published:</span> ${article.date}</p>
      <p>${article.excerpt.rendered}</p>
      <a href="">Read more</a>
   </div>`;
    } else if (
      article.slug === "product-7" ||
      article.slug === "product-8" ||
      article.slug === "product-9"
    ) {
      articlesContainerThree.innerHTML += `<div>
      <img src="${article._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}" class="carousel-image" alt="${article.slug}">
      <h3>${article.title.rendered}</h3>
      <p><span>Author:</span> ${article._embedded.author[0].name}</p>
      <p><span>Published:</span> ${article.date}</p>
      <p>${article.excerpt.rendered}</p>
      <a href="">Read more</a>
   </div>`;
    } else if (
      article.slug === "product-10" ||
      article.slug === "product-11" ||
      article.slug === "product-12"
    ) {
      articlesContainerFour.innerHTML += `<div>
      <img src="${article._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}" class="carousel-image" alt="${article.slug}">
      <h3>${article.title.rendered}</h3>
      <p><span>Author:</span> ${article._embedded.author[0].name}</p>
      <p><span>Published:</span> ${article.date}</p>
      <p>${article.excerpt.rendered}</p>
      <a href="">Read more</a>
   </div>`;
    }
  });
}
// } else {
// function createSlides(articles) {
//   articles.forEach(function (article) {
//     if (article.slug === "product-1") {
//       articlesContainerOne.innerHTML += `<div>
//       <img src="${article.images[0].src}" class="carousel-image" alt="${article.slug}">
//       <h3>${article.name}</h3>
//       <p>${article.description}</p>
//    </div>`;
//     } else if (article.slug === "product-2") {
//       articlesContainerTwo.innerHTML += `<div>
//       <img src="${article.images[0].src}" class="carousel-image" alt="${article.slug}">
//       <h3>${article.name}</h3>
//       <p>${article.description}</p>
//    </div>`;
//     } else if (article.slug === "product-3") {
//       articlesContainerThree.innerHTML += `<div>
//       <img src="${article.images[0].src}" class="carousel-image" alt="${article.slug}">
//       <h3>${article.name}</h3>
//       <p>${article.description}</p>
//    </div>`;
//     } else if (article.slug === "product-4") {
//       articlesContainerFour.innerHTML += `<div>
//       <img src="${article.images[0].src}" class="carousel-image" alt="${article.slug}">
//       <h3>${article.name}</h3>
//       <p>${article.description}</p>
//    </div>`;
//     } else if (article.slug === "product-5") {
//       articlesContainerFive.innerHTML += `<div>
//       <img src="${article.images[0].src}" class="carousel-image" alt="${article.slug}">
//       <h3>${article.name}</h3>
//       <p>${article.description}</p>
//    </div>`;
//     } else if (article.slug === "product-6") {
//       articlesContainerSix.innerHTML += `<div>
//       <img src="${article.images[0].src}" class="carousel-image" alt="${article.slug}">
//       <h3>${article.name}</h3>
//       <p>${article.description}</p>
//    </div>`;
//     }
//   });
// }
//   }
// }
