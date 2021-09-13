$(document).ready(function () {
    $('.select-input, .select-btn').on('focus', function () {
        $(this).siblings('.menu').toggle()
        $('.menu li').click(function () {
            $(this).siblings('.list-item').removeClass('active');
            $(this).addClass("active");
            let elem = $(this).text()
            $(this).parent().siblings('.select-input').val(elem)
            $('.menu').hide();
        })
    });
    $('.select-input, .select-btn').on('focusout', function () {
        setTimeout(() => {
            $('.menu').hide();
        }, 100)
    })
    $(document).on('click', '.submit-button', function () {
        $('.modal-overlay').show();
        $('.modal1').show();
        $('.modal-overlay').css('height', $(document).height())
        console.log($(document).height())
        $('body').css('overflow', 'hidden');
    })

    $('.close-btn').on('click', () => {
        $('body').css('overflow', 'visible');
        $('.modal-overlay').hide();
        $('.modal-item').hide();
    })

    $('#mobile-nav').on('click', function () {
        $('mobile-menu').css('overflow', 'auto')
        $('.mobile-menu').toggle('slide')
        if ($(this).children('img').attr('src') == './img/times.svg') {
            $('body').css('overflow', 'auto')
            $(this).children('img').attr('src', './img/bars.svg')
        }
        else {
            $('body').css('overflow', 'hidden')
            $(this).children('img').attr('src', './img/times.svg')
        }
        $('.li').on('click', function () {
            $(this).siblings('.subMenu-list').toggle()
            if ($(this).children('.menu-toggle').children('img').attr('src') == './img/MobileAngle-down.svg') {
                $(this).children('.menu-toggle').children('img').attr('src', './img/MobileAngle-right.svg')
            } else {
                $(this).children('.menu-toggle').children('img').attr('src', './img/MobileAngle-down.svg')
            }
        })

        $('.close-btn, .mobile-menu-close-btn').on('click', function () {
            $('.mobile-menu').hide('slide')
        })
        if (window.matchMedia('(max-width: 769px)').matches) {
            $('.bars').children('img').attr('src', './img/bars.svg')
        }
    })

    $('.site-button').on('click', () => {

    })

    $('.closeModalBtn').on('click', () => {
        $('.modalOverlay').hide()
        $('body').css('overflow', 'auto')
    })

    $('.sign-in').on('click', () => {
        $('.loginModalOverlay').show()
    })

    $(document).on('click', '.register', () => {
        $('.loginModalOverlay').hide()
        $('.registerModalOverlay').show()

    })

    $(document).on('click', '.sign-in', () => {
        $('body').css('overflow', 'hidden')
        $('.modalOverlay').css('overflow', 'auto')
        $('.registerModalOverlay').hide()
        $('.loginModalOverlay').show()
        $('.loginModal').children('.container').html(`
        <div class="row">
                <div class="login-head">
                    <div class="logo">
                        <img src="./img/registerLogo.svg" alt="">
                    </div>
                    <div class="title">
                        <h1>Motor House xoş gəlmisiniz.</h1>
                    </div>
                </div>
                <div class="form">
                    <div class="col-lg-12">
                        <input type="email" placeholder="Email">
                    </div>
                    <div style="position: relative" class="col-lg-12">
                        <input class="loginPsw" type="password" placeholder="Parol">
                        <div class="seePswrd">
                            <img src="./img/eye.svg" alt="">
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="field-remember d-flex align-items-center">
                        <label class="customCheckbox">Yadda saxla
                            <input type="checkbox">
                            <span class="checkmark"></span>
                        </label>
                    </div>
                    <div class="psw-recover">
                        <span>Parolu unutmusunuz?</span>
                    </div>
                </div>
                <div class="login-btn">
                    <button class="login-button">Daxil ol</button>
                </div>
                <div class="filed-register d-flex">
                    <span>Adresiniz yoxdur? O zaman</span>

                    <a class="register" href="#">Qeydiyyatdan keçin</a>
                </div>
            </div>
        `)
    })

    $(document).on('click', '.mobile-btn', () => {
        $('.loginModalOverlay').show()
        $('.mobile-menu').hide('slide')
        $('.bars').children('img').attr('src', './img/bars.svg')
    })

    $(document).on('click', '.seePswrd', function () {
        if ($(this).children('img').attr('src') == './img/eye-slash.svg') {
            $('.loginPsw').attr('type', 'password')
            $(this).children('img').attr('src', './img/eye.svg')
        } else {
            $('.loginPsw').attr('type', 'text')
            $(this).children('img').attr('src', './img/eye-slash.svg')
        }
    })

    $(document).on('click', '.psw-recover', () => {
        $('.loginModal').children('.container').html(`
            <div class="row">
                <div class="login-head">
                    <div class="logo">
                        <img src="./img/registerLogo.svg" alt="">
                    </div>
                    <div class="title">
                        <h1 style="margin-bottom: 0">Parolu unutmusunuz?</h1>
                    </div>
                    <div class="message">
                     <span>Mesaj sizin epoçtanıza göndəriləcək</span>
                    </div>
                    <div class="image d-flex justify-content-center">
                    <img src=../img/Group21684.svg alt="">
                    </div>
                </div>
                <div class="form">
                    <div class="col-lg-12">
                        <input type="email" placeholder="Email">
                    </div>
                </div>
               <div class="filed-register d-flex align-items-center justify-content-center">
                    <span>Parolu xatırladınız?</span>

                    <a style="font-size: 18px" class="rememberPsw" href="#">Daxil ol</a>
                </div>
                <div class="login-btn">
                    <button class="login-button sendEmail">Göndər</button>
                </div>
                
            </div>
       `)
    })

    $(document).on('click', '.sendEmail', () => {
        $('.loginModal').children('.container').html(`
            <div class="row">
                <div class="login-head">
                    <div class="logo">
                        <img src="./img/registerLogo.svg" alt="">
                    </div>
                    <div class="title">
                        <h1 style="margin-bottom: 32px; line-height: 32px">Epoçtanıza gələn kodu təstiqləyin</h1>
                    </div>
                  
                    <div class="image d-flex justify-content-center">
                    <img src=../img/Group21684.svg alt="">
                    </div>
                </div>
                <div class="form">
                    <div style="position: relative" class="col-lg-12">
                        <input class="loginPsw" type="password" placeholder="Parol">
                        <div class="seePswrd">
                            <img src="./img/eye.svg" alt="">
                        </div>
                    </div>
                </div>
               <div class="filed-register d-flex align-items-center justify-content-center">
                    <span>Mailiniz gəlmədi?</span>

                    <a style="font-size: 18px" class="sendAgain" href="#">Təkrar göndər</a>
                </div>  
                <div class="login-btn">
                    <button class="login-button confirm newPassword ">Təsdiqlə</button>
                </div>
                
            </div>
       `)
    })

    $(document).on('click', '.newPassword', () => {
        $('.loginModal').children('.container').html(`
            <div class="row">
                <div class="login-head">
                    <div class="logo">
                        <img src="./img/registerLogo.svg" alt="">
                    </div>
                    <div class="title">
                        <h1 style="margin-bottom: 0">Yeni parol yaradın</h1>
                    </div>
                    <div style="line-height: 24px" class="message">
                     <span>Yeni şifrə yaradarkən minimum 8 simbol daxil edin.
                      Minimum bir böyük hərf və bir rəqəm daxil edilməlidir</span>
                    </div>
                    <div class="image d-flex justify-content-center">
                    <img src=../img/Group21684.svg alt="">
                    </div>
                </div>
                <div class="form">
                    <div style="position: relative" class="error col-lg-12">
                        <input id="inputPswError" class="loginPsw" type="password" placeholder="Parol">
                        <div class="seePswrd">
                            <img src="./img/eye.svg" alt="">
                        </div>
                        <div class="error-msg">
                        <span style="display: none">Minimum 8 simboldan istifadə edin</span>
                        </div>
                    </div>
                    <div style="position: relative" class="error col-lg-12">
                        <input id="inputPswError2"  class="loginPsw" type="password" placeholder="Parolu təstiqlə">
                        <div class="seePswrd">
                            <img src="./img/eye.svg" alt="">
                        </div>
                    </div>

                </div>
                
                <div class="login-btn">
                    <button class="login-button">Parolu yenilə</button>
                </div>
                
            </div>
       `)
    })

    $(document).on('click', '.rememberPsw', () => {
        $('.loginModal').children('.container').html(`
        <div class="row">
                <div class="login-head">
                    <div class="logo">
                        <img src="./img/registerLogo.svg" alt="">
                    </div>
                    <div class="title">
                        <h1>Motor House xoş gəlmisiniz.</h1>
                    </div>
                </div>
                <div class="form">
                    <div class="col-lg-12">
                        <input type="email" placeholder="Email">
                    </div>
                    <div style="position: relative" class="col-lg-12">
                        <input class="loginPsw" type="password" placeholder="Parol">
                        <div class="seePswrd">
                            <img src="./img/eye.svg" alt="">
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="field-remember d-flex align-items-center">
                        <label class="customCheckbox">Yadda saxla
                            <input type="checkbox">
                            <span class="checkmark"></span>
                        </label>
                    </div>
                    <div class="psw-recover">
                        <span>Parolu unutmusunuz?</span>
                    </div>
                </div>
                <div class="login-btn">
                    <button class="login-button">Daxil ol</button>
                </div>
                <div class="filed-register d-flex">
                    <span>Adresiniz yoxdur? O zaman</span>

                    <a class="register" href="#">Qeydiyyatdan keçin</a>
                </div>
            </div>
        `)
    })
});