$(function () {
    $('.ham').on('click', function () {
        $('.modal').addClass('open');
    });

    $(".close").on("click", function () {
        $(".modal").removeClass("open");
    });

    $('.btn').on('click', function () {
        $('.resi').addClass('open');
    });

    $(".close").on("click", function () {
        $(".resi").removeClass("open");
    });

    $(".submit").on("click", function () {
        $(".resi").removeClass("open");
    });

});