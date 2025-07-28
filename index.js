//banner

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("slider");
  const slides = slider.children;
  const totalSlides = slides.length;
  let currentIndex = 0;

  window.slideleft = function () {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    scrollToCurrentSlide();
  };

  window.slideright = function () {
    currentIndex = (currentIndex + 1) % totalSlides;
    scrollToCurrentSlide();
  };

  function scrollToCurrentSlide() {
    const slideWidth = slides[0].clientWidth;
    slider.scrollTo({
      left: slideWidth * currentIndex,
      behavior: "smooth",
    });
  }
});



// offertag

document.getElementById("closeoff").addEventListener("click", function () {
    const offerBar = document.getElementById("offerbar");
    offerBar.classList.add("opacity-0");
    setTimeout(() => {
      offerBar.style.display = "none";
    }, 300); // matches duration
  });

// side_navrbar

const sidenav = document.getElementById("sidenav");
const menuicon = document.getElementById("menuicon");
const closenav = document.getElementById("closenav");

menuicon.addEventListener("click", function () {
  sidenav.style.right = 0;
});

closenav.addEventListener("click", function () {
  sidenav.style.right = "-50%";
});

// favorite_icon

document.querySelectorAll(".favorite-icon").forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.classList.toggle("text-red-500"); 
    icon.classList.toggle("fa-solid"); 
    icon.classList.toggle("fa-regular"); 
  });
});