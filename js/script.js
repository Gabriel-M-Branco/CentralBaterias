$(document).ready(function () {
    $(".links2").click(function (event) {
        event.preventDefault();
        var target = $(this).data("target");
        var offset = 95;

        $('html, body').animate({
            scrollTop: $(target).offset().top - offset
        }, 100);
    });
});