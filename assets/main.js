$(document).ready(function () {
    $('.select-input, .select-btn').focus(function () {
        $(this).siblings('.menu').toggle()
        $('.menu li').click(function () {
            $(this).siblings('.list-item').removeClass('active');
            $(this).addClass("active");
            let elem = $(this).text()
            $(this).parent().siblings('.select-input').val(elem)
            $('.menu').hide();
        })
    });


    // $('.select-input, .select-btn').focusout(function () {
    //     $('.menu').hide()
    // });
    //button
    $('.submit-button').click(function () {
        $('.modal-overlay').show();
        $('.modal1').show();
        $('body').css('overflow', 'hidden');
    })
    $('.close-btn').click(function () {
        $('body').css('overflow', 'visible');
        $('.modal-overlay').hide();
        $('.modal-item').hide();
    })

  $('#mobile-nav').on('click', function(){
      $('.mobile-menu').toggle('slide')
      if( $(this).children('img').attr('src') == './img/times.svg'){
          $(this).children('img').attr('src', './img/bars.svg')
      }
      else{
          $(this).children('img').attr('src', './img/times.svg')
      }
      $('.li').on('click', function (){
          $(this).siblings('.subMenu-list').toggle()
          if( $(this).children('.menu-toggle').children('img').attr('src')=='./img/MobileAngle-down.svg'){
              $(this).children('.menu-toggle').children('img').attr('src', './img/MobileAngle-right.svg')
          }
          else{
              $(this).children('.menu-toggle').children('img').attr('src', './img/MobileAngle-down.svg')
          }
      })

      $('.close-btn, .mobile-menu-close-btn').on('click', function (){
          $('.mobile-menu').hide('slide')
      })
      if (window.matchMedia('(max-width: 769px)').matches) {
          $('.bars').children('img').attr('src', './img/bars.svg')
      }
  })



});