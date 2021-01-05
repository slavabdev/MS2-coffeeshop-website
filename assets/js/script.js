let scroll = new SmoothScroll('a[href*="#"]', {speed: 600});

 AOS.init();

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

    });
