/*========== TRANSFORMA A BARRA DE NAVEGAÇÃO EM TRANSPARENTE OU SOLIDA COM BASE NA SITUAÇÃO ==========*/
$(document).ready(function () { //when document(DOM) loads completely
    checkScroll(); //check if page is scrolled
    $(window).scroll(checkScroll); //get scroll position of window
});

function checkScroll() { //check if page is scrolled
if ($(window).scrollTop() >= 300) { //if window is scrolled 300px or more
    $('.navbar').addClass('solid'); //add class 'solid' to element with class 'navbar'
} else { //if page is not scrolled 300px from top
    $('.navbar').removeClass('solid'); //remove class 'solid' from navbar element
}
}


/*========== DEIXA A NAVBAR COM COR SOLIDA CASO ELA TENHA DESCIDO MAIS DE 300PX ==========*/
$('.navbar-toggler').click(function () { //when navbar-toggler is clicked
    if ($(window).scrollTop() <= 300) { //if window scrolled 300px or less from top
    $("nav.navbar").toggleClass("solid-toggle"); //add the solid class to navbar
    }
});


/*==========FECHA O MENU MOBILE E DESLISA SUAVEMENTE PARA A SESSAO SELECIONADA NO MENU ==========*/
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('.navbar-toggler').addClass('collapsed');
    $('#navbarResponsive').removeClass('show');

    setTimeout(function () {
        $('nav.navbar').removeClass('solid-toggle');
    }, 300);

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});

/*========== SETA PARA BAIXO ==========*/
$(document).ready(function () {
    $(window).scroll(function () {
        $('.arrow').css('opacity', 1 - $(window).scrollTop() / 250);
    });
});

/*========== SLIDER DOS CARDS DOS PRATOS ==========*/
$(document).ready(function(){ //when document(DOM) loads completely
    $('#slider1').owlCarousel({ //owlCarousel settings
        autoplay: true, //set to false to turn off autoplay and only use nav
        autoplayHoverPause: true, //set to false to prevent pausing on hover
        loop: true, //set to false to stop carousel after all slides shown
        autoplayTimeout: 8000, //time between transitions
        smartSpeed: 1200, //transition speed
        dotsSpeed: 1000, //transition speed when using dots/buttons
        responsive : { //set number of items shown per screen width
            0 : {
                items: 1 //0px width and up display 1 item
            },
            768 : {
                items: 2 //768px width and up display 2 items
            },
            992 : {
                items: 3 //992px width and up display 3 items
            }
        }
    });
  });
  $(document).ready(function(){ //when document(DOM) loads completely
    $('#slider2').owlCarousel({ //owlCarousel settings
        autoplay: true, //set to false to turn off autoplay and only use nav
        autoplayHoverPause: true, //set to false to prevent pausing on hover
        loop: true, //set to false to stop carousel after all slides shown
        autoplayTimeout: 8000, //time between transitions
        smartSpeed: 1200, //transition speed
        dotsSpeed: 1000, //transition speed when using dots/buttons
        responsive : { //set number of items shown per screen width
            0 : {
                items: 1 //0px width and up display 1 item
            },
            768 : {
                items: 2 //768px width and up display 2 items
            },
            992 : {
                items: 3 //992px width and up display 3 items
            }
        }
    });
  });
  $(document).ready(function(){ //when document(DOM) loads completely
    $('#slider3').owlCarousel({ //owlCarousel settings
        autoplay: true, //set to false to turn off autoplay and only use nav
        autoplayHoverPause: true, //set to false to prevent pausing on hover
        loop: true, //set to false to stop carousel after all slides shown
        autoplayTimeout: 8000, //time between transitions
        smartSpeed: 1200, //transition speed
        dotsSpeed: 1000, //transition speed when using dots/buttons
        responsive : { //set number of items shown per screen width
            0 : {
                items: 1 //0px width and up display 1 item
            },
            768 : {
                items: 2 //768px width and up display 2 items
            },
            992 : {
                items: 3 //992px width and up display 3 items
            }
        }
    });
  });
  $(document).ready(function(){ //when document(DOM) loads completely
    $('#slider4').owlCarousel({ //owlCarousel settings
        autoplay: true, //set to false to turn off autoplay and only use nav
        autoplayHoverPause: true, //set to false to prevent pausing on hover
        loop: true, //set to false to stop carousel after all slides shown
        autoplayTimeout: 8000, //time between transitions
        smartSpeed: 1200, //transition speed
        dotsSpeed: 1000, //transition speed when using dots/buttons
        responsive : { //set number of items shown per screen width
            0 : {
                items: 1 //0px width and up display 1 item
            },
            768 : {
                items: 2 //768px width and up display 2 items
            },
            992 : {
                items: 3 //992px width and up display 3 items
            }
        }
    });
  });

  /*========== MAKE ALL ANIMATION "FADEINUP" ON MOBILE ==========*/
$(document).ready(function () {
    if ($(window).width() < 768) {
        $('div').attr('data-animation', 'fadeInUp');
    }
});

/*========== WAYPOINTS ANIMATION DELAY ==========*/
//Original Resource: https://www.oxygenna.com/tutorials/scroll-animations-using-waypoints-js-animate-css
$(function () { // a self calling function
    function onScrollInit(items, trigger) { // a custom made function
        items.each(function () { //for every element in items run function
            var osElement = $(this), //set osElement to the current
                osAnimationClass = osElement.attr('data-animation'), //get value of attribute data-animation type
                osAnimationDelay = osElement.attr('data-delay'); //get value of attribute data-delay time
  
            osElement.css({ //change css of element
                '-webkit-animation-delay': osAnimationDelay, //for safari browsers
                '-moz-animation-delay': osAnimationDelay, //for mozilla browsers
                'animation-delay': osAnimationDelay //normal
            });
  
            var osTrigger = (trigger) ? trigger : osElement; //if trigger is present, set it to osTrigger. Else set osElement to osTrigger
  
            osTrigger.waypoint(function () { //scroll upwards and downwards
                osElement.addClass('animated').addClass(osAnimationClass); //add animated and the data-animation class to the element.
            }, {
                    triggerOnce: true, //only once this animation should happen
                    offset: '70%' // animation should happen when the element is 70% below from the top of the browser window
                });
        });
    }
  
    onScrollInit($('.os-animation')); //function call with only items
    onScrollInit($('.staggered-animation'), $('.staggered-animation-container')); //function call with items and trigger
  });

  /*========== SLIDER DOS PARCEIROS ==========*/
$(document).ready(function(){ //when document(DOM) loads completely
    $('#clients-carousel').owlCarousel({ //owlCarousel settings
        autoplay: true, //set to false to turn off autoplay and only use nav
        autoplayHoverPause: true, //set to false to prevent pausing on hover
        loop: true, //set to false to stop carousel after all slides shown
        autoplayTimeout: 8000, //time between transitions
        smartSpeed: 1600, //transition speed
        dotsSpeed: 1000, //transition speed when using dots/buttons
        responsive : { //set number of items shown per screen width
            0 : {
                items: 1 //0px width and up display 1 item
            },
            768 : {
                items: 2 //768px width and up display 2 items
            }
        }
    });
  });