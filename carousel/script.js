let currentSlide = 0;

function startSlider() {
  let imageCount = document.querySelectorAll(".carousel .images img");

  if (imageCount.length === 0) {
    imageCount = document.querySelectorAll(".carousel .images img");
    images.style.transform = `translateX(0px)`;
    return;
  }

  let images = document.querySelector(".carousel .images ul");
  images.style.transform = `translateX(-${currentSlide * 750}px)`;

  if (currentSlide === imageCount.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
}

setInterval(() => {
  startSlider();
}, 1500);