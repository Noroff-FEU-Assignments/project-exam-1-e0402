const articlesUrl = `https://artrospective.com/Artrospective/wp-json/wp/v2/posts?_embed&per_page=10`;
const articlesContainer = document.querySelector(".articles-container");

async function fetchArticles() {
  try {
    const response = await fetch(articlesUrl);
    const articles = await response.json();

    console.log(articles);
    createSlides(articles);
    // handleCategoryButtons(products);
  } catch (error) {
    console.log(error);
  }
}

fetchArticles();

function createSlides(articles) {
  articles.forEach(function (article) {
    articlesContainer.innerHTML += `<div>
        <img src="${article._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}" class="carousel-image" alt="${article.slug}">
        <h3>${article.title.rendered}</h3>
        <p><span>Author:</span> ${article._embedded.author[0].name}</p>
        <p><span>Published:</span> ${article.date}</p>
        <p>${article.excerpt.rendered}</p>
        <a href="">Read more</a>
     </div>`;
  });
}

// function handleCategoryButtons(allProducts) {
//   const btns = document.querySelectorAll("button");

//   if (btns.length === 0) {
//     return console.log("No category buttons found");
//   }

//   for (let i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", (event) => {
//       const filter = event.target.dataset.filter;
//       const categoryTitle = document.querySelector(".category-title");

//       handleCategoryButtonClasses(event.target, btns);

//       categoryTitle.innerHTML = event.target.dataset.filter;

//       console.log(filter);
//       const filteredProducts = handleCategoryFiltering(allProducts, filter);

//       createProducts(filteredProducts);
//     });
//   }
// }

// function handleCategoryButtonClasses(clickedElement, allButtons) {
//   allButtons.forEach((btn) => btn.classList.remove("category_styling_two"));
//   clickedElement.classList.add("category_styling_two");
// }

// function handleCategoryFiltering(allProducts, filter) {
//   const filteredProducts = allProducts.filter(function (product) {
//     if (product.categories.some((category) => category.name === filter)) {
//       return true;
//     }
//   });

//   console.log(filteredProducts);

//   return filteredProducts;
// }
