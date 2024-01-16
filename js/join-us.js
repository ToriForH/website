const slides = [
    '<div class="join-us__carousel-photo-container"><img class="join-us__carousel-photo" src="img/woman-in-shoulder-stand-pose.png" alt="woman make shoulder stand pose while another woman help her holding legs"></div>',
    '<div class="join-us__carousel-photo-container"><img class="join-us__carousel-photo" src="img/woman-hold-hands-between-her-scapulas.png" alt="woman sitting on the floor and join her hands berween her woman-hold-hands-between-her-scapulas"></div>',
    '<div class="join-us__carousel-photo-container"><img class="join-us__carousel-photo" src="img/group-of-women-in-triangle-pose.png" alt="three women perform triangle pose"></div>',
];

let currentSlideIndex = 0;

function renderSlide() {
    const slideContainer = document.querySelector('.join-us__carousel-slide');
    slideContainer.innerHTML = slides[currentSlideIndex];
    if(window.matchMedia('(min-width: 768px)').matches) {
        const secondSlide = currentSlideIndex === slides.length - 1 ? 0 : currentSlideIndex + 1;
        slideContainer.innerHTML += slides[secondSlide];
    }
}

function nextSlide() {
    if(currentSlideIndex === slides.length - 1) {
        currentSlideIndex = 0;
    } else {
        currentSlideIndex++;
    }
    renderSlide();
}

function prevSlide() {
    if(currentSlideIndex === 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex--;
    }
    renderSlide();
}

renderSlide();

setInterval(nextSlide, 3000);

const nextButton = document.querySelector('.join-us__button.button-next');
nextButton.addEventListener('click', nextSlide);

const prevButton = document.querySelector('.join-us__button.button-prev');
prevButton.addEventListener('click', prevSlide);

window.addEventListener('resize', renderSlide);