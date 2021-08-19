$(document).ready(function (){
    $('#car-brand-input').click(function (){
        $('.menu').toggle();
    });

    $('.menu li').click(function (){
        let elem = $(this).text()
        elem = $('#car-brand-input').val()
    })

    //button
    $('.submit-button').click(function (){
        $('.modal-overlay').show();
        $('.modal1').show();
    })
    $('.close-btn').click(function (){
        $('.modal-overlay').hide();
        $('.modal-item').hide();
    })

});