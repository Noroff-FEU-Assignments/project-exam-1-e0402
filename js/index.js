const productsUrl = `https://schoolproject.tech/flowerpower/wp-json/wc/v3/products/?consumer_key=ck_6c90a14e6f8635c6ec35e78ebd8f73b23a0647cc&consumer_secret=cs_f1de37e9ba6d73daacf712e2536c593462ddce89&featured=false`;
const productsContainerOne = document.querySelector(".test-one");
const productsContainerTwo = document.querySelector(".test-two");
const productsContainerThree = document.querySelector(".test-three");
const productsContainerFour = document.querySelector(".test-four");
const productsContainerFive = document.querySelector(".test-five");
const productsContainerSix = document.querySelector(".test-six");

async function fetchProducts() {
  try {
    const response = await fetch(productsUrl);
    const products = await response.json();

    console.log(products);
    createProducts(products);
  } catch (error) {
    console.log(error);
  }
}

fetchProducts();

function createProducts(products) {
  products.forEach(function (product) {
    if (product.slug === "product-1") {
      productsContainerOne.innerHTML += `
      <img src="${product.images[0].src}" class="carousel-image" alt="${product.slug}">
  `;
    } else if (product.slug === "product-2") {
      productsContainerTwo.innerHTML += `
        <img src="${product.images[0].src}" class="carousel-image" alt="${product.slug}">
      `;
    } else if (product.slug === "product-3") {
      productsContainerThree.innerHTML += `
        <img src="${product.images[0].src}" class="carousel-image" alt="${product.slug}">
      `;
    } else if (product.slug === "product-4") {
      productsContainerFour.innerHTML += `
        <img src="${product.images[0].src}" class="carousel-image" alt="${product.slug}">
      `;
    } else if (product.slug === "product-5") {
      productsContainerFive.innerHTML += `
        <img src="${product.images[0].src}" class="carousel-image" alt="${product.slug}">
      `;
    } else if (product.slug === "product-6") {
      productsContainerSix.innerHTML += `
        <img src="${product.images[0].src}" class="carousel-image" alt="${product.slug}">
      `;
    }
  });
}
