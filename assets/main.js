$(document).ready(function () {
    $('.select-input, .select-btn').focus(function () {
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
        $('body').css('overflow','hidden');
    })
    $('.close-btn').click(function () {
        $('body').css('overflow','visible');
        $('.modal-overlay').hide();
        $('.modal-item').hide();
    })

});