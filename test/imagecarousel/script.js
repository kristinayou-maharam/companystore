document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("carousel");
    const leftArrow = document.getElementById("leftArrow");
    const rightArrow = document.getElementById("rightArrow");

    let currentIndex = 0;

    leftArrow.addEventListener("click", function () {
        navigateCarousel(-1);
    });

    rightArrow.addEventListener("click", function () {
        navigateCarousel(1);
    });

    carousel.addEventListener("mouseenter", function () {
        leftArrow.style.opacity = 1;
        rightArrow.style.opacity = 1;
    });

    carousel.addEventListener("mouseleave", function () {
        leftArrow.style.opacity = 0;
        rightArrow.style.opacity = 0;
    });

    function navigateCarousel(direction) {
        currentIndex += direction;

        if (currentIndex < 0) {
            currentIndex = carousel.children.length - 1;
        } else if (currentIndex >= carousel.children.length) {
            currentIndex = 0;
        }

        const transformValue = -currentIndex * 100 + "%";
        carousel.style.transform = "translateX(" + transformValue + ")";
    }
});
