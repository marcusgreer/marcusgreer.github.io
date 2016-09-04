$(document).ready(function () {
    $(document).on("mouseenter","div.container", function() {
        $('div.waves').fadeOut();
    });
    $(document).on("mouseleave","div.container", function() {
        $('div.waves').fadeIn();
    });
});