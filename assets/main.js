$(document).ready(function () {
    $('.select-input, .select-btn').click(function () {
       $(this).siblings('.menu').toggle()
    });

    $('.menu li').click(function () {
        $(this).siblings('.list-item').removeClass('active');
        $(this).addClass("active");
        let elem = $(this).text()
        $(this).parent().siblings('.select-input').val(elem)
        $('.menu').hide();
    })

    //button
    $('.submit-button').click(function () {
        $('.modal-overlay').show();
        $('.modal1').show();
    })
    $('.close-btn').click(function () {
        $('.modal-overlay').hide();
        $('.modal-item').hide();
    })

});