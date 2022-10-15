$(document).ready(function() {

    $('.modal__close').on('click', function() {
        $('.overlay, #thanks').fadeOut('slow');
    });

    // Validate

    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                },
                email: {
                  required: "Пожалуйста, введите свою почту",
                  email: "Неправильно введен адрес почты"
                },
                phone: {
                    required: "Пожалуйста, введите свой номер",
                    email: "Неправильно введен номер"
                }
            }
        });
    };
    validateForms('#delivery-form');
    validateForms('#fly-form');

    // Forms


    $('form').submit(function(e) {
        e.preventDefault();
        if ($("input#name").val() && $("input#email").val() && $("input#phone").val()) {
            $.ajax({
                type: "POST",
                url: "mailer/smart.php",
                data: $(this).serialize()
            }).done(function() {
                $(this).find("input").val("");
                $('.overlay, #thanks').fadeIn('slow');
    
                $('form').trigger('reset');
            });
            return false;
        } else if ($("input#name2").val() && $("input#phone2").val() && $("input#email2").val()) {
            $.ajax({
                type: "POST",
                url: "mailer/smart.php",
                data: $(this).serialize()
            }).done(function() {
                $(this).find("input").val("");
                $('.overlay, #thanks').fadeIn('slow');
    
                $('form').trigger('reset');
            });
            return false;
        } else {
            console.error("Ошибка!")
        }
    });

    // Slider

    $('.carousel__inner').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        initialSlide: 2,
        variableWidth: true,
        speed: 1000,
        responsive: [
            {
              breakpoint: 993,
              settings: {
                arrows: false,
                centerMode: false,
                slidesToShow: 1,
                variableWidth: false,
                dots: true
              }
            }
          ]
    });
});