const articlesUrl = `https://schoolproject.tech/flowerpower/wp-json/wc/v3/products/?consumer_key=ck_6c90a14e6f8635c6ec35e78ebd8f73b23a0647cc&consumer_secret=cs_f1de37e9ba6d73daacf712e2536c593462ddce89&featured=false`;
const articlesContainer = document.querySelector(".carousel-track");
const buttonsContainer = document.querySelector(".carousel-nav");

async function fetchArticles() {
  try {
    const response = await fetch(articlesUrl);
    const articles = await response.json();

    console.log(articles);
    createArticles(articles);
    init(articles);
  } catch (error) {
    console.log(error);
  }
}

fetchArticles();

function createArticles(articles) {
  articles.forEach(function (article) {
    articlesContainer.innerHTML = "";
    if (article.slug === "product-1") {
      articlesContainer.innerHTML += `<li class"active-slide">
        <img src="${article.images[0].src}" class="carousel-image" alt="${article.slug}">
        <h3>${article.name}</h3>
        <p>${article.description}</p>
     </li>`;

      buttonsContainer.innerHTML += `<button class="carousel-indicator active-slide"></button>`;
    } else {
      articlesContainer.innerHTML += `<li>
        <img src="${article.images[0].src}" class="carousel-image" alt="${article.slug}">
        <h3>${article.name}</h3>
        <p>${article.description}</p>
     </li>`;

      buttonsContainer.innerHTML += `<button class="carousel-indicator"></button>`;
    }
  });
}

function init() {
  const carouselTrack = document.querySelector(".carousel-track");
  const carouselSlides = Array.from(carouselTrack.children);
  const rightButton = document.querySelector(".carousel-button--right");
  const leftButton = document.querySelector(".carousel-button--left");
  const navigationDots = document.querySelector(".carousel-nav");
  const dots = Array.from(navigationDots.children);

  const slideWith = carouselSlides[0].getBoundingClientRect().width;

  // Positions the carousel slides next to eachother
  // carouselSlides[0].style.left = slideWith * 0 + "px";
  // carouselSlides[1].style.left = slideWith * 1 + "px";
  // carouselSlides[2].style.left = slideWith * 2 + "px";
  //Etc...

  const determineSlidePosition = (slide, index) => {
    slide.style.left = slideWith * index + "px";
  };

  carouselSlides.forEach(determineSlidePosition);

  const moveToDifferentSlide = (carouselTrack, activeSlide, targetSlide) => {
    carouselTrack.style.transform =
      "translateX(-" + targetSlide.style.left + ")";
    activeSlide.classList.remove("active-slide");
    targetSlide.classList.add("active-slide");
  };

  const updateDotsState = (activeDot, targetDot) => {
    activeDot.classList.remove("active-slide");
    targetDot.classList.add("active-slide");
  };

  const hideAndShowArrows = (
    carouselSlides,
    leftButton,
    rightButton,
    targetIndex
  ) => {
    if (targetIndex === 0) {
      leftButton.classList.add("is-hidden");
      rightButton.classList.remove("is-hidden");
    } else if (targetIndex === carouselSlides.length - 1) {
      leftButton.classList.remove("is-hidden");
      rightButton.classList.add("is-hidden");
    } else {
      leftButton.classList.remove("is-hidden");
      rightButton.classList.remove("is-hidden");
    }
  };

  // When the left button is clicked, the carousel slides is moved to the left
  leftButton.addEventListener("click", (e) => {
    const activeSlide = carouselTrack.querySelector(".active-slide");
    const previousSlide = activeSlide.previousElementSibling;
    const activeDot = navigationDots.querySelector(".active-slide");
    const previousDot = activeDot.previousElementSibling;
    const previousIndex = carouselSlides.findIndex(
      (slide) => slide === previousSlide
    );

    moveToDifferentSlide(carouselTrack, activeSlide, previousSlide);
    updateDotsState(activeDot, previousDot);
    hideAndShowArrows(carouselSlides, leftButton, rightButton, previousIndex);
  });

  // When the right button is clicked, the carousel slides is moved to the right
  rightButton.addEventListener("click", (e) => {
    const activeSlide = carouselTrack.querySelector(".active-slide");
    const nextSlide = activeSlide.nextElementSibling;
    const activeDot = navigationDots.querySelector(".active-slide");
    const nextDot = activeDot.nextElementSibling;
    const nextIndex = carouselSlides.findIndex((slide) => slide === nextSlide);

    moveToDifferentSlide(carouselTrack, activeSlide, nextSlide);
    updateDotsState(activeDot, nextDot);
    hideAndShowArrows(carouselSlides, leftButton, rightButton, nextIndex);
  });

  // When the nav idicators are clicked, the carousel shows to the corresponding slide
  navigationDots.addEventListener("click", (e) => {
    // Determining the indicator that was clicked
    const targetDot = e.target.closest("button");

    if (!targetDot) return;

    const activeSlide = carouselTrack.querySelector(".active-slide");
    const activeDot = navigationDots.querySelector(".active-slide");
    const targetIndex = dots.findIndex((dot) => dot === targetDot);
    const targetSlide = carouselSlides[targetIndex];

    moveToDifferentSlide(carouselTrack, activeSlide, targetSlide);
    updateDotsState(activeDot, targetDot);
    hideAndShowArrows(carouselSlides, leftButton, rightButton, targetIndex);
  });
}
