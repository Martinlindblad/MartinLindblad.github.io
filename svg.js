// $(document).ready(function() {
//     $('#lager_1').
// })
$(window).on("scroll", function() {
    var scrollPos = $(window).scrollTop();
    if (scrollPos <= 40) {
        $("svg").fadeIn();
    } else {
        $("svg").fadeOut();
    }
});