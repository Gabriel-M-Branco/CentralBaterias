$(document).ready(function () {
    let currentIndex = 0;
    let direction = 1;
    const items = $('.carrossel-items img');
    const totalItems = items.length;

    function showNextItem() {
        currentIndex += direction;

        if (currentIndex >= totalItems) {
            currentIndex = totalItems - 2;
            direction = -1;
        }

        if (currentIndex < 0) {
            currentIndex = 1;
            direction = 1;
        }

        const offset = -currentIndex * 200;
        $('.carrossel-items').css('transform', `translateX(${offset}px)`);
    }

    setInterval(showNextItem, 1000);
});

