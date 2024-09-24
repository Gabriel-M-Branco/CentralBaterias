$(document).ready(function () {
    $(".links2").click(function (event) {
        event.preventDefault();
        var target = $(this).data("target");

        var isMobile = window.matchMedia("(max-width: 768px)").matches;

        var offset;
        if (isMobile) {
            offset = 95;
        } else {
            offset = 135;
        }

        $('html, body').animate({
            scrollTop: $(target).offset().top - offset
        }, 100);
    });
});