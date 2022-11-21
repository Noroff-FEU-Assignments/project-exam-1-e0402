// document.addEventListener("DOMContentLoaded", () => {
//   let resizer = new ResizeObserver(handleRezise);
//   resizer.observe(document.querySelector(".container"));
// });

// function handleRezise(entries)
// console.log("resized called");
// let div = entries[0].target;
// if (entries[0].contentRect.width > 1366) {

// }

const articlesUrl = `https://schoolproject.tech/flowerpower/wp-json/wc/v3/products/?consumer_key=ck_6c90a14e6f8635c6ec35e78ebd8f73b23a0647cc&consumer_secret=cs_f1de37e9ba6d73daacf712e2536c593462ddce89&featured=false`;
const articlesContainerOne = document.querySelector(".articles-container-one");
const articlesContainerTwo = document.querySelector(".articles-container-two");
// const articlesContainerThree = document.querySelector(".test-three");
// const articlesContainerFour = document.querySelector(".test-four");
// const articlesContainerFive = document.querySelector(".test-five");
// const articlesContainerSix = document.querySelector(".test-six");

// document.addEventListener("DOMContentLoaded", jsMediaQuery);

// function jsMediaQuery() {
//   let MediaQuery = window.matchMedia("(min-width: 1366px)");

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

// if (MediaQuery.matches) {
function createSlides(articles) {
  // const thirdChild = document.getElementById("third-child");
  // const fourthChild = document.getElementById("fourth-child");
  // const fifthChild = document.getElementById("fifth-child");
  // const sixthChild = document.getElementById("sixth-child");

  // thirdChild.parentNode.removeChild(thirdChild);
  // fourthChild.parentNode.removeChild(fourthChild);
  // fifthChild.parentNode.removeChild(fifthChild);
  // sixthChild.parentNode.removeChild(sixthChild);

  articles.forEach(function (article) {
    if (
      article.slug === "product-1" ||
      article.slug === "product-2" ||
      article.slug === "product-3"
    ) {
      articlesContainerOne.innerHTML += `<div>
          <img src="${article.images[0].src}" class="carousel-image" alt="${article.slug}">
          <h3>${article.name}</h3>
          <p>${article.description}</p>
       </div>`;
    } else if (
      article.slug === "product-4" ||
      article.slug === "product-5" ||
      article.slug === "product-6"
    ) {
      articlesContainerTwo.innerHTML += `<div>
              <img src="${article.images[0].src}" class="carousel-image" alt="${article.slug}">
              <h3>${article.name}</h3>
              <p>${article.description}</p>
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
