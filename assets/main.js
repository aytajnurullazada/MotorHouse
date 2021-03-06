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

    $(document).on('click','#mobile-nav', function () {
        $('mobile-menu').css('overflow', 'auto')
        $('.mobile-menu').toggle('slide')
        if ($(this).children('img').attr('src') == './img/times.svg') {
            $('body').css('overflow', 'auto')
            $(this).children('img').attr('src', './img/bars.svg')
        } else {
            $('body').css('overflow', 'hidden')
            $(this).children('img').attr('src', './img/times.svg')
        }
        $(document).on('click', '.li', function () {
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

    $('.sign-in').on('click', () =>     {
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
                        <h1>Motor House xo?? g??lmisiniz.</h1>
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

                    <a class="register" href="#">Qeydiyyatdan ke??in</a>
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
            $(this).siblings('.loginPsw').attr('type', 'password')
            $(this).children('img').attr('src', './img/eye.svg')
        } else {
            $(this).siblings('.loginPsw').attr('type', 'text')
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
                     <span>Mesaj sizin epo??tan??za g??nd??ril??c??k</span>
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
                    <span>Parolu xat??rlad??n??z?</span>

                    <a style="font-size: 18px" class="rememberPsw" href="#">Daxil ol</a>
                </div>
                <div class="login-btn">
                    <button class="login-button sendEmail">G??nd??r</button>
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
                        <h1 style="margin-bottom: 32px; line-height: 32px">Epo??tan??za g??l??n kodu t??stiql??yin</h1>
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
                    <span>Mailiniz g??lm??di?</span>

                    <a style="font-size: 18px" class="sendAgain" href="#">T??krar g??nd??r</a>
                </div>  
                <div class="login-btn">
                    <button class="login-button confirm newPassword ">T??sdiql??</button>
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
                        <h1 style="margin-bottom: 0">Yeni parol yarad??n</h1>
                    </div>
                    <div style="line-height: 24px" class="message">
                     <span>Yeni ??ifr?? yaradark??n minimum 8 simbol daxil edin.
                      Minimum bir b??y??k h??rf v?? bir r??q??m daxil edilm??lidir</span>
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
                        <span style="display: none">Minimum 8 simboldan istifad?? edin</span>
                        </div>
                    </div>
                    <div style="position: relative" class="error col-lg-12">
                        <input id="inputPswError2"  class="loginPsw" type="password" placeholder="Parolu t??stiql??">
                    </div>

                </div>
                
                <div class="login-btn">
                    <button class="login-button">Parolu yenil??</button>
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
                        <h1>Motor House xo?? g??lmisiniz.</h1>
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

                    <a class="register" href="#">Qeydiyyatdan ke??in</a>
                </div>
            </div>
        `)
    })

    $(document).on('click', '#ferdiMobile', () => {
        $('#ferdiMenu').html(`
        <div class="ferdiHeader d-flex align-items-center">
            <a class="backToMobileMenu">
            <img src="./img/chevron-left.svg" alt="">
            </a>

            <span>F??rdi</span>
        </div>
        <ul class="ferdiList">
         <li>
         <a href="#">D??vri t??mir</a>
         </li>
         <li>
         <a href="#">H??r??k??tli hiss??l??rin diaqnostikas??</a>
         </li>
         <li>
         <a href="#">Diaqnostika</a>
         </li>
         <li>
         <a href="#">Elektrik diaqnostika</a>
         </li>
         <li>
         <a href="#">Mu??h??rrik i??l??ri</a>
         </li>
         <li>
         <a href="#">Su??r??tl??r qutusu u??zr?? i??l??r</a>
         </li>
         <li>
         <a href="#">??iling??r i??l??ri</a>
         </li>
         <li>
         <a href="#">D??mir??i i??l??ri</a>
         </li>
         <li>
         <a href="#">T??nziml??nm??/balans</a>
         </li>
         <li>
         <a href="#">T??mir/R??ngl??nm??</a>
         </li>
         <li>
         <a href="#">Kosmetik i??l??r</a>
         </li>
         <li>
         <a href="#">Avtoyuma</a>
         </li>
        </ul>
        `)
    })

    $(document).on('click', '.backToMobileMenu', ()=> {
        $('#ferdiMenu').html(`
        <div class="menu">
                    <ul class="mobile-menu-list">
                        <li class="mobile-menu-list-item">
                            <div class="li d-flex justify-content-between">
                                <span>Xidm??tl??r</span>
                                <div class="menu-toggle">
                                    <img src="./img/MobileAngle-right.svg" alt="">
                                </div>
                            </div>
                            <ul class="subMenu-list">
                                <li class="subMenu-list-item d-flex justify-content-between">
                                    <a style="width: 100%;" id="ferdiMobile" href="#">F??rdi</a>
                                    <img src="./img/MobileAngle-right.svg" alt="">
                                </li>
                                <li class="subMenu-list-item">
                                    <a href="#">Korparativ</a>
                                </li>
                                <li class="subMenu-list-item">
                                    <a href="#">S????orta hallar??</a>
                                </li>
                            </ul>
                        </li>
                        <li class="mobile-menu-list-item">
                            <a href="avtoAmbulans.html">
                                Avto Ambulans
                            </a>
                        </li>
                        <li class="mobile-menu-list-item">
                            <div class="li d-flex justify-content-between">
                                <span>Avto Market</span>
                                <div class="menu-toggle">
                                    <img src="./img/MobileAngle-right.svg" alt="">
                                </div>
                            </div>
                            <ul class="subMenu-list">
                                <li class="subMenu-list-item">
                                    <a href="#"></a>
                                </li>

                            </ul>
                        </li>
                        <li class="mobile-menu-list-item">
                            <a href="elektrikAvtomobilleri.html">
                                Elektrik Avtomobill??ri
                            </a>
                        </li>
                        <li class="mobile-menu-list-item">
                            <a href="sualCavab.html">
                                Suallar/Cavablar
                            </a>
                        </li>
                        <li class="mobile-menu-list-item">
                            <a href="about.html">
                                Motor house haqq??nda
                            </a>
                        </li>

                    </ul>
                </div>
                <div class="line">
                </div>
                <div class="login-button d-flex justify-content-center">
                    <a class="mobile-btn sign-in" href="#">
                        <img src="./img/sign-in.svg" alt="">
                        Daxil ol
                    </a>
                </div>
        `)
    })

    $('#demo').datetimepicker({
        inline:true,
    });




});