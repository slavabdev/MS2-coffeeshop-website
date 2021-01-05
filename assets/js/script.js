let scroll = new SmoothScroll('a[href*="#"]', {speed: 600});

(function() {
        emailjs.init("user_NsuxEM10gzRq2ybgKv8AY");
        })();

        const promoForm = document.getElementById('promo_form');

function sendMail(promoForm) {
    $('#promo-btn').prop('disabled', true)
    emailjs.send("service_vd2bbtd", "promo10", {
        'from_name': promoForm.name.value,
        'to_email': promoForm.emailaddress.value

    }).then(function (response) {
        console.log('SUCCESS', response)
        alert('THANKS! YOU WILL GET YOUR PROMOCODE IN 5 MINUTES')
        $('#promo-btn').prop('disabled', false)
        promoForm.reset()
    }, function (error) {
        console.log('FAILED', error)
        $('#promo-btn').prop('disabled', false)
    });
    return false;
}


$(document).ready(function () {
    $('.header-burger').click(function (event) {
        $('.header-burger, .header-menu').toggleClass('active');
        $('body').toggleClass('lock')
    });

     /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert*/
(function ($) {
        $.fn.visible = function (partial) {

            var $t = $(this),
                $w = $(window),
                viewTop = $w.scrollTop(),
                viewBottom = viewTop + $w.height(),
                _top = $t.offset().top,
                _bottom = _top + $t.height(),
                compareTop = partial === true ? _bottom : _top,
                compareBottom = partial === true ? _top : _bottom;

            return((compareBottom <= viewBottom) && (compareTop >= viewTop));

        };

    })(jQuery);

    var win = $(window);
    var allMods = $(".slide-mod");
    allMods.each(function (i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("already-visible");
        }
    });

    win.scroll(function (event) {
        allMods.each(function (i, el) {
            var el = $(el);
            if (el.visible(true)) {
                el.addClass("come-in");
            }
        });
    });
});
