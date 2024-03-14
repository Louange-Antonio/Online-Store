const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".wrapper i");
const firstSlidesWidth = carousel.querySelector(".slides").offsetWidth;

let isDragging = false, startX, startScrollLeft;

// add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? -firstSlidesWidth : firstSlidesWidth
    })
   
});
const dragStart = (e) => {
     isDragging = true;
    carousel.classList.add("dragging");

// records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;

}

const dragging = (e) => {
    if(!isDragging) return; //If isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
   carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);


// script for drop down
const dropdown = document.querySelector('.dropdown');
const select = dropdown.querySelector('.select');
const caret = dropdown.querySelector('.caret');
const menu = dropdown.querySelector('.menu');
const options = dropdown.querySelectorAll('.menu li');
const selected = dropdown.querySelector('.selected');

select.addEventListener('mouseover', () => {
  select.classList.add('select-clicked');
  caret.classList.add('caret-rotate');
  menu.classList.add('menu-open');
});

select.addEventListener('mouseout', () => {
  select.classList.remove('select-clicked');
  caret.classList.remove('caret-rotate');
  menu.classList.remove('menu-open');
});

options.forEach(option => {
  option.addEventListener('click', () => {
    selected.innerText = option.innerText;

    select.classList.remove('select-clicked');
    caret.classList.remove('caret-rotate');
    menu.classList.remove('menu-open');

    options.forEach(option => {
      option.classList.remove('active');
    });
    option.classList.add('active');
  });
});

// Slideshow

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}