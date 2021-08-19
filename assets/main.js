$(document).ready(function () {
    $('#car-brand-input').click(function () {
        $('.menu').toggle();
    });

    $('.menu li').click(function () {
        $('.list-item').removeClass('active');
        $(this).addClass("active");
        let elem = $(this).text()
        document.getElementById('car-brand-input').value = elem
        // document.getElementById('car-brand-input').value.css("font-size", "72px")
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