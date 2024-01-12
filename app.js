var window;

$(function () {

    window = $(window);

    $('.bt-soporte, .bt-search').click(function () {
        $('body').addClass('overlay-open');
        $('html').addClass('overflowhidden');
        $(this).parent().addClass('active');
    });
    $('.bt-close-overlay').click(function () {
        $('body').removeClass('overlay-open');
        $('html').removeClass('overflowhidden');
        $(this).parent().parent().parent().removeClass('active');
    })

    $('.j-bt-registro, .j-bt-cerrar, .overlay-menu-cliente').click(function () {
        $('.overlay-menu-cliente').toggleClass('visible');
    });
    $('.overlay-menu-cliente').click(function () {
        $(this).removeClass('visible');
    });

    //////////// RESPONSIVE IMAGES
    if (typeof (picturefill) === "function") {
        picturefill();
    }

    ///// MENU MOBILE
    var overlayVisto = false;
    $('.masthead .icon-config').on('click', function () {
        $('body').toggleClass('open-mobile-menu')
            .removeClass('open-mobile-buscador')
            .removeClass('open-mobile-main-menu')
            .removeClass('open-mobile-mimovistar')
        $(".menu-minisite ul").css("display", "none")
        $(".bt-menu-minisite").html("menú")
    });


    $('.masthead .j-icon-search').on('click', function () {
        $('body').toggleClass('open-mobile-buscador')
            .removeClass('open-mobile-menu')
            .removeClass('open-mobile-main-menu')
            .removeClass('open-mobile-mimovistar')
        $(".menu-minisite ul").css("display", "none")
        $(".bt-menu-minisite").html("menú")
    });

    $('.icon-search').on('click', function () {
        $('body').removeClass('open-mobile-menu')
            .removeClass('open-mobile-main-menu');
    });

    $(".main-menu-mobile .with-submenu").each(function () {
        $(".submenu", this).toggleClass("open-submenu")
    })


    $('.masthead .j-icon-mimovistar').on('click', function () {
        $('body').toggleClass('open-mobile-mimovistar')
            .removeClass('open-mobile-main-menu')
            .removeClass('open-mobile-menu')
            .removeClass('open-mobile-buscador');
    });

    var $menuSelectorClientes = $(".menu-config.selectorclientes li");
    $menuSelectorClientes.eq(0).find("a").on("click", function (e) {
        var winW = parseFloat($(window).width());
        if (winW < 983) {
            // En móvil el primer elemento (particulares) sólo despliega no enlaza
            $menuSelectorClientes.slice(1).fadeToggle();
            $(".masthead").toggleClass("menu-opened");
            e.preventDefault();
        }
    });
    $('.masthead .j-icon-menu').on('click', function () {
        $('body').toggleClass('open-mobile-main-menu')
            .removeClass('open-mobile-menu')
            .removeClass('open-mobile-buscador')
            .removeClass('open-mobile-mimovistar');
        $(".menu-minisite ul").css("display", "none")
        $(".bt-menu-minisite").html("menú")
    });
    //// MENÚS ACTIVOS HEADER

    $('.masthead .with-submenu .level-1').on('click', function (e) {
        e.preventDefault();
        var parent = $(this).parents('.with-submenu');

        $('.masthead .with-submenu').not(parent).removeClass('is-active');
        parent.toggleClass('is-active');
    });

    $('.masthead .back-button').on('click', function (e) {
        e.preventDefault();
        var parent = $(this).parents('.with-submenu')
        parent.removeClass('is-active');
    });



    //// MENÚS ACTIVOS GUIDE

    $('#semana .with-submenu .level-1').on('click', function (e) {
        e.preventDefault();
        var parent = $(this).parents('.with-submenu');

        $('#semana .with-submenu').not(parent).removeClass('is-active');
        parent.toggleClass('is-active');

    });

    //// MENU ZONA DE CLIENTES

    $('.zc-menu-opener').on('click', function () {

        if (overlayVisto == false) {
            overlayVisto = true;
            $('body').append('<div class="body-overlay zc-overlay"></div>');
        } else {
            $('.body-overlay').remove();
            overlayVisto = false;
        }
    });

    // retirar menu al pulsar en el overlay

    $(document).on('click', '.zc-overlay', function () {
        var parent = $(".zc-menu-opener").parents('.js-toggle');
        parent.toggleClass('is-active');
        $('.body-overlay').remove();
        overlayVisto = false;
    });

    //// SEARCH FORM

    $('.masthead .search-form').on('submit', function (e) {

        var input = $(this).find('input:name=q');
        var textSearch = input.val();

        if (textSearch.length > 0) {
            result = textSearch.replace(/\\|&|\"|>|</g, ' ');
            input.val(result);
            // enviar formulario
        } else {
            e.preventDefault();
            $(".search-form input").focus()
        }

    });


    //// HEADER FIXED


    //// LOAD CALENDAR

    if ($('.calendario').length > 0 && $(".legacy").length <= 0) {
        $("#fecha").pickadate();
    }

    if ($('.js-horizonal-slide-sixths').length > 0) {
        $('.js-horizonal-slide-sixths').slick({
            infinite: false,
            slidesToShow: 5,
            slidesToScroll: 4,
            prevArrow: '<button type="button" class="slick-prev"><img src="/assets/images/movistar-plus/flecha-azules.png"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="/assets/images/movistar-plus/flecha-azules-der.png"></button>',
            responsive: [{
                breakpoint: 1000,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true
                }
            }
            ],
            onBeforeChange: function (slider) {

            },
            onAfterChange: function (slider) {
                var parent = $(slider.$slider),
                    next = parent.find('.slick-next'),
                    prev = parent.find('.slick-prev')

                if (next.hasClass('slick-disabled')) {
                    parent.addClass('next-disabled');
                } else {
                    parent.removeClass('next-disabled');
                }

                if (prev.hasClass('slick-disabled')) {
                    parent.addClass('prev-disabled');
                } else {
                    parent.removeClass('prev-disabled');
                }
            }
        });
    };

    //// HERO SLIDE

    $('.hero-slide').each(function (e) {
        $(this).slick({
            infinite: false,
            adaptiveHeight: true,
            fade: true,
            speed: 1600,
            prevArrow: '<button type="button" class="slick-prev"><img src="/assets/images/movistar-plus/flecha-azules.png"/></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="/assets/images/movistar-plus/flecha-azules-der.png"/></button>',
            asNavFor: '.hero-content-slide'
        });
    });

    $('.hero-content-slide').each(function (e) {
        $(this).slick({
            infinite: false,
            adaptiveHeight: true,
            fade: true,
            speed: 1600,
            arrows: false,
            asNavFor: '.hero-slide'
        });
    });

    //// LIGHTBOX

    // Lightbox type image
    if (jQuery().magnificPopup) {
        $('.js-lightbox-image').magnificPopup({
            type: 'image',
            closeMarkup: '<button title="%title%" class="mfp-close"></button>'
        });
    };

    // Lightbox type inline
    if (jQuery().magnificPopup) {
        $('.js-lightbox-inline').magnificPopup({
            type: 'inline',
            alignTop: true,
            overflowY: 'scroll',
            closeMarkup: '<button title="%title%" class="mfp-close"></button>'
        });
    }

    // EQUALIZE HEIGHT
    //Actualmente sin uso
    if ($('.equalize').length > 0) {
        $('.equalize img').on("load", function () {
            equalizeHeights();
        });
    }

    // JS TOGGLE

    if ($('.js-toggle').length > 0) {
        $('.js-toggle-open').on('click', function (e) {
            e.preventDefault();
            var parent = $(this).parents('.js-toggle');
            parent.toggleClass('is-active');
            // Slide resize
            if ($('.channels-horizonal-slide').length > 0) {
                $('.channels-horizonal-slide').resize();
            }
        });
    }

    // JS TABS

    $(document).on('click', '.js-tabs-nav a', function (e) {
        e.preventDefault();

        var parent = $(this).parents('.js-tabs'),
            navElement = $(this).parents('li'),
            textElement = $(this).text();
        tab = parent.find('.js-tab-content .js-tab'),
            index = navElement.index();
        navElement.addClass("is-active").siblings('li').removeClass("is-active");
        tab.eq(index).addClass("is-active").siblings().removeClass("is-active");

        if (parent.is('.js-tabs-dropdown')) {
            parent.find('.js-tabs-open-dropdown .text').text(textElement);
        }
    });

    if ($('.js-tabs-first-all').length > 0) {
        $('.js-tabs-nav a').on('click', function (e) {
            e.preventDefault();

            var parent = $(this).parents('.js-tabs-first-all'),
                navElement = $(this).parents('li'),
                textElement = $(this).text();
            tab = $('.js-tab-content .js-tabs'),
                index = navElement.index() - 1;

            navElement.addClass("is-active").siblings('li').removeClass("is-active");
            tab.hide();
            $(tab[index]).show();

            if (index == -1) {
                tab.show();
            }
            if (parent.is('.js-tabs-dropdown')) {
                parent.find('.js-tabs-open-dropdown .text').text(textElement);
            }

        });
    }


    // JS TABS DROPDOWN
    if ($('.js-tabs-dropdown').length > 0) {
        $('.js-tabs-open-dropdown').on('click', function (e) {
            e.preventDefault();

            var parent = $(this).parents('.js-tabs')
            parent.toggleClass('open-dropdown');
        });
    }
    if ($('.js-tabs-dropdown').length > 0) {
        $('.js-tabs-open-dropdown').on('click', function (e) {
            e.preventDefault();

            var parent = $(this).parents('.js-tabs-first-all')
            parent.toggleClass('open-dropdown');
        });

        $('.js-tabs-nav a').on('click', function (e) {
            e.preventDefault();

            var parent = $('.js-tabs-first-all')
            parent.toggleClass('open-dropdown');
        });
    }

    // JS TABS TOGGLE

    if ($('.js-tabs-toggle').length > 0) {
        $('.js-tabs-nav a').on('click', function (e) {
            e.preventDefault();

            var parent = $(this).parents('.js-tabs-toggle'),
                navElement = $(this).parents('li'),
                tab = parent.find('.js-tab-content .js-tab'),
                index = navElement.index();

            navElement.toggleClass("is-active").siblings('li').removeClass("is-active");
            tab.eq(index).toggleClass("is-active").siblings().removeClass("is-active");

        });
    }

    // SHOW MORE

    $(".show-more").click(function () {
        var $this = $(this);
        $this.text($this.text() == "Cerrar" ? "Ver más" : "Cerrar");
        $(".text").toggleClass("show-more-height");
    });

    /// AREA CLIENTES FORMS

    $('.data-action button').click(function (e) {
        e.preventDefault();
        if ($('.data-opened').length) {
            return;
        }
        var parent = $(this).parents('.data-field'),
            thisButton = $(this).parent(),
            otherButtons = parent.siblings().find('.btn'),
            content = parent.find('.data-content'),
            info = parent.find('.data-info'),
            editArea = parent.find('.data-modify');

        parent.addClass("data-opened");
        content.addClass("open");
        otherButtons.addClass("disabled");
        thisButton.hide();
        info.hide();
        editArea.show();
    });

    $('.data-cancel').click(function (e) {
        e.preventDefault();
        var parent = $(this).parents('.data-field'),
            editButton = parent.find('.data-action'),
            otherButtons = parent.siblings().find('.btn'),
            content = parent.find('.data-content'),
            info = parent.find('.data-info'),
            editArea = parent.find('.data-modify');

        parent.removeClass("data-opened");
        content.removeClass("open");
        otherButtons.removeClass("disabled");
        editButton.show();
        info.show();
        editArea.hide();
    });

    //FORMS VALIDATE
    if ($('.zc-header').length > 0) {
        if ($('form').length > 0) {
            $('.validate-form').parsley({
                errorsWrapper: '<div class="error-wrapper"></div>',
                errorTemplate: '<p class="error box-pixel"></p>'
            });
        }
    }

    // DETECT YOUTUBE VIDEO
    //Utilizado solo para aperturas de portadas y  portadillas
    if ($('.video-frame').length > 0) {

        if ($(".hero-video").width() > 999) {
            loadYoutubePlayers();
        } else {
            $('.hero-video img').on('click', function (e) {
                e.preventDefault();
                if ($('.video-frame').length > 0) {
                    loadYoutubePlayers();
                }
            });
        }
    }

    // VIDEO HEIGHT
    if ($('.video-frame').length > 0) {
        resizeVideo();
    }

});

//// RESIZE
if (!detectMobile()) {
    $(window).on('resize', function () {

        if ($('.equalize').length > 0) {
            equalizeHeights();
        }

        if ($('.video-frame').length > 0) {
            resizeVideo();
        }

    });
}

//// YOUTUBE
//Utilizado solo para aperturas de portada y portadillas
function loadYoutubePlayers() {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

function onYouTubeIframeAPIReady() {

    window.playerCollection = [];

    $.each($('.video-frame'), function (index, value) {

        var videoIdYt = $(value).attr("data-videoid");
        var videoId = $(value).attr("id");
        var player = new YT.Player(videoId, {
            height: '486',
            width: '864',
            videoId: videoIdYt,
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            },
            playerVars: {
                'showinfo': 0,
                'iv_load_policy': 3,
                'color': 'white',
                'fs': 1,
                'rel': 0,
                'autoplay': 1,
                'vq': 'hd720',
                'wmode': 'transparent'
            }
        });

        playerCollection.push(player);
    });
}

function onPlayerReady(event) {
    var videoObj = event.target;
    videoObj.playVideo();
    videoObj.setVolume(0);
    $(".mute-button").bind("click", function (e) {
        if (videoObj.getVolume() == 100) {
            videoObj.setVolume(0);
            $(".mute-button").attr("data-ismute", "true");
        } else {
            videoObj.setVolume(100);
            $(".mute-button").attr("data-ismute", "false");
        }
    });

}

function onPlayerStateChange(event) {
    if (event.data == 0) {
        // end video : repeat
        event.target.seekTo(0);
    } else if (event.data == 1) {
        // scale video on load
        resizeVideo();
    }
}

function stopVideo() {
    player.stopVideo();
}

function muteAllVideos() {

    $(window.playerCollection).each(function (index, aux) {
        aux.setVolume(0);
    });

}

function resizeVideo() {
    var videoWidth = $(".hero").width();
    var videoHeight = $(".hero").height();

    var auxHeight = Math.round(videoWidth);
    var auxWidth = videoWidth;

    $(".video-frame").css("height", auxHeight);
    $(".video-frame").css("width", auxWidth);

    var topVideo = (auxHeight - videoHeight) / 2;
    $(".video-frame").css("top", -topVideo + 15);
    var videoScale = videoWidth * 0.56;
    if (videoScale > 700)
        videoScale = 700;
}

function detectMobile() {
    return ('ontouchstart' in document.documentElement);
}


// JS CALENDARIO

if ($('#date').length > 0) {
    fechaCal = new Date()
    anoActual = fechaCal.getFullYear()
    mesActual = fechaCal.getMonth() + 1
    diaActual = fechaCal.getDate()

    fechaHoy = anoActual + "-" + mesActual + "-" + diaActual;

    $('#date').DatePicker({
        flat: true,
        date: fechaHoy,
        current: fechaHoy,
        calendars: 1,
        starts: 1
    });

    function dayofyear(d) { // d is a Date object
        var yn = d.getFullYear();
        var mn = d.getMonth();
        var dn = d.getDate();
        var d1 = new Date(yn, 0, 1, 12, 0, 0); // noon on Jan. 1
        var d2 = new Date(yn, mn, dn, 12, 0, 0); // noon on input date
        var ddiff = Math.round((d2 - d1) / 864e5);
        return ddiff + 1;
    }
    numMes = new Array("none", "ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE")

    function calculaNumMes(mes) {
        for (k = 0; k < numMes.length; k++) {
            if (mes == numMes[k]) {
                mesNum = k;
                break;
            }
        }
        var a = new Date(mesNum + " " + diaNum + ", " + anoNum);
        var b = dayofyear(a);
        numDiaAnoSel = b;
    }
    var a = new Date(mesActual + " " + diaActual + ", " + anoActual);
    var b = dayofyear(a);
    numDiaAnoHoy = b;
    numMes = new Array("none", "ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE")
    mescargado = $(".datepickerMonth span").text().substring(0, $(".datepickerMonth span").text().indexOf(" "))
    for (k = 0; k < numMes.length; k++) {
        if (mescargado.toUpperCase() == numMes[k]) {
            mescargado = k;
            break;
        }
    }
    anocargado = $(".datepickerMonth span").text().substring($(".datepickerMonth span").text().lastIndexOf(" ") + 1, $(".datepickerMonth span").text().length)
    $(".datepickerDays td a span").each(function (e) {
        diacargado = $(this).html();
        var a = new Date(mescargado + " " + diacargado + ", " + anocargado);
        var b = dayofyear(a);
        numDiaCargado = b;
        if (parseFloat(numDiaCargado) > parseFloat(numDiaAnoHoy)) {
            if (parseFloat(anoActual) <= parseFloat(anocargado)) {
                $(this).parent().parent().addClass("datepickerSup")
            }
        }
        if (parseFloat(anoActual) < parseFloat(anocargado)) {
            $(this).parent().parent().addClass("datepickerSup")
        }
    })
}

/////////////////// SUBMENÚ MINISITE
$(window).load(function () {
    if ($("ul.pills").length > 0) {
        $("ul.pills").addClass("loaded");
    }
    var destH = parseFloat($(".dest-minisite img").css("height")) + 140;
    var winH = parseFloat($(window).height());
    var winW = parseFloat($(window).width());
    var destW = parseFloat($(".dest-minisite img").css("width"));
    var centerX = (winW / 2) - (destW / 2)
    var countUp = 0;
    var countDown = 0;
    var aspectRatio = winW / winH;
    var imgOK = $(".dest-minisite source").attr("srcset")

    if (winH <= 1600) {
        if (winW >= 985) {
            $(".cont-dest-minisite").css("margin-top", parseFloat($(".dest-minisite").height()))
        } else {
            $(".cont-dest-minisite").css("margin-top", parseFloat($(".dest-minisite").height()) - 220)
        }


        $(window).on("resize", function () {
            var winH = parseFloat($(window).height());
            var winW = parseFloat($(window).width());
            var aspectRatio = winW / winH;
            if (aspectRatio >= 1.2 && aspectRatio <= 1.5) {
                $(".dest-minisite source").attr("srcset", $(".dest-minisite img").attr("srcset"))
                $(".dest-minisite img.img-dest-minisite").css("height", "auto")
                $(".dest-minisite img.img-dest-minisite").css("min-width", "100%")
                $(".dest-minisite img.img-dest-minisite").css("min-height", "none")
            } else {
                $(".dest-minisite source").attr("srcset", imgOK)
                $(".dest-minisite img.img-dest-minisite").css("height", "100%")
                $(".dest-minisite img.img-dest-minisite").css("min-width", "none")
                $(".dest-minisite img.img-dest-minisite").css("min-height", "100%")
            }

            destW = parseFloat($(".dest-minisite img").css("width"));
            centerX = (winW / 2) - (destW / 2)
            if (winW >= 985) {
                $(".menu-minisite .ppal-mini").each(function (e) {
                    if ($(this).hasClass("active")) {
                        $(".content-minisite").css("padding-top", "70px")
                    }
                });

                $(".content-minisite").css("margin-top", parseFloat($(window).height()) - 190)
                $(".cont-dest-minisite").css("margin-top", parseFloat($(".dest-minisite").height()))

            } else {
                $(".content-minisite").css("margin-top", parseFloat($(".dest-minisite").height()) + 100)
                $(".cont-dest-minisite").css("margin-top", parseFloat($(".dest-minisite").height()) - 320)
            }
        })
        var limScroll;
        var lastScrollTop = 0,
            delta = 5;
        $(window).scroll(function (event) {
            if ($('.menu-minisite-home').length > 0) {
                limSroll = $(this).scrollTop()
                if (limSroll > parseFloat($(".dest-minisite").css("height")) + 150) {
                    var st = $(this).scrollTop();

                    if (Math.abs(lastScrollTop - st) <= delta)
                        return;

                    if (st > lastScrollTop) {
                        if (countUp == 0) {
                            scrollUp(countUp)
                        }
                    } else {
                        if ($(window).scrollTop() == 0) {
                            $(".menu-minisite").removeClass('is-fixed')
                            $(".dest-minisite img").removeClass("novista")
                            $(".cont-dest-minisite").css("display", "block")
                            countDown = 0
                            countUp = 0
                        } else {
                            if (countDown == 0) {
                                scrollDown(countDown)
                            }
                        }
                    }
                    lastScrollTop = st;
                } else {
                    if ($(window).width() > 1000) {
                        if ($("html").scrollTop() > 100) {
                            $("body").removeClass("hooked-menu");
                            $("body").removeClass("header-reduced");
                        } else {
                            if ($("html").scrollTop() < 50) {
                                $("body").removeClass("hooked-menu");
                                $("body").removeClass("header-reduced");
                            }
                        }
                    }
                    $(".dest-minisite img").removeClass("novista")
                    $(".cont-dest-minisite").css("display", "block")
                    countDown = 0
                    countUp = 0
                }
            } else {
                limSroll = $(this).scrollTop()
                if (limSroll > 0) {
                    var st = $(this).scrollTop();

                    if (Math.abs(lastScrollTop - st) <= delta)
                        return;

                    if (st > lastScrollTop) {
                        if (countUp == 0) {
                            scrollUp(countUp)
                        }
                    } else {
                        if ($(window).scrollTop() == 0) {
                            countDown = 0
                            countUp = 0
                        } else {
                            if (countDown == 0) {
                                scrollDown(countDown)
                            }
                        }
                    }
                    lastScrollTop = st;
                } else {
                    $("body").removeClass("hooked-menu");
                    $("body").removeClass("medium");
                    $("body").removeClass("header-reduced");
                    countDown = 0
                    countUp = 0
                }
            }
        });
    }
})


$(document).ready(function () {
    if ($('.is-fixed-int').length > 0) {
        var destH = parseFloat($(".dest-minisite img").css("height")) + 140;
        var winH = parseFloat($(window).height());
        var winW = parseFloat($(window).width());
        var countUp = 0;
        var countDown = 0;
        if (winW >= 985 && winH <= 1600) {
            // detect available wheel event
            var mousewheelevt = "onwheel" in document.createElement("div") ? "wheel" : // Modern browsers support "wheel"
                document.onmousewheel !== undefined ? "mousewheel" : // Webkit and IE support at least "mousewheel"
                    "DOMMouseScroll"; // let's assume that remaining browsers are older Firefox
            $('body').bind(mousewheelevt, function (e) {

                var evt = window.event || e //equalize event object
                evt = evt.originalEvent ? evt.originalEvent : evt; //convert to originalEvent if possible
                var delta = evt.deltaY ? -evt.deltaY : evt.detail ? evt.detail * (-40) : evt.wheelDelta; //check for detail first, because it is used by Opera and FF
            });
        }

        if (winW >= 985) {
            $(".content-minisite").css("margin-top", "100px")
            $(".menu-minisite .ppal-mini").each(function (e) {
                if ($(this).hasClass("active")) {
                    $(".content-minisite").css("padding-top", "70px")
                }
            });
        } else {
            $(".content-minisite").css("margin-top", "55px")
        }
        $(window).on("resize", function () {
            winW = parseFloat($(window).width());
            if (winW >= 985) {
                $(".menu-minisite .ppal-mini").each(function (e) {
                    if ($(this).hasClass("active")) {
                        $(".content-minisite").css("padding-top", "70px")
                    }
                });
                $(".content-minisite").css("margin-top", "100px")
                $(".menu-minisite ul").css("display", "block")
            } else {
                $(".menu-minisite ul").css("display", "none")
                $(".content-minisite").css("margin-top", "55px")
            }
        })
    }
})
if ($('.menu-minisite').length > 0) {
    $(".bt-menu-minisite").on("click", function (e) {
        e.preventDefault();
        $(".submenu-minisite-cont").hide();

        if ($(".menu-minisite ul").css("display") == "block") {
            $(".menu-minisite ul").css("display", "none")
            $(this).html("menú")
        } else {
            $(".menu-minisite ul").css("display", "block")
            $(this).html("cerrar")
        }
    })
    $(window).resize(function () {
        var winH = parseFloat($(window).height());
        var winW = parseFloat($(window).width());

        if (winW >= 985) {
            $(".menu-minisite .ppal-mini").each(function (e) {
                if ($(this).hasClass("active")) {
                    $(".content-minisite").css("padding-top", "70px")
                }
            });

        }
    })

    $(".wrapper-sub-mini").each(function (e) {
        if ($(this).css("display") == "none") {
            $(".submenu-minisite-cont").hide();
        }
    })
    if ($(this).siblings(".wrapper-sub-mini").css("display") == "none") {

    }
    $(".menu-minisite ul li .bt-apdo-mini").on("click", function () {
        $(".menu-minisite ul li").removeClass("selected")
        $(this).parent().addClass("selected")

        if ($(this).siblings(".wrapper-sub-mini").css("display") == "none") {
            if ($(".bt-menu-minisite").css("display") == "none") {
                $(".submenu-minisite-cont").show()
            }
            $(".wrapper-sub-mini").hide();
            $(this).siblings(".wrapper-sub-mini").show()
        } else {
            $(this).siblings(".wrapper-sub-mini").hide();
            $(".submenu-minisite-cont").hide();
        }
    })
    $(".menu-minisite .ppal-mini").each(function (e) {
        if ($(this).hasClass("active")) {
            $(".submenu-minisite-cont").show();
        }
    })
}
var position = $(window).scrollTop();

// should start at 0

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > position) {

        if ($(window).width() > 991) {
            if ($("html").scrollTop() > 190) {
                $("body").addClass("hooked-menu");
            }
        } else {
            if ($("html").scrollTop() > 0) {
                $("body").addClass("hooked-menu");
            }
        }
        $(".dest-minisite img").addClass("novista")
        $("body").removeClass("medium");
    } else {
        $(".menu-minisite-home").removeClass('is-fixed')
        if ($("html").scrollTop() > 70) {
            $("body").addClass("medium");
        }
        if ($("html").scrollTop() == 0) {
            $("body").removeClass("hooked-menu");
            $("body").removeClass("header-reduced");
            $("body").removeClass("medium");
        }
        $(".dest-minisite img").addClass("novista")
        $(".cont-dest-minisite").css("display", "none")
    }
    position = scroll;
});

function scrollUp(countUp) {
    $(".menu-minisite-home").addClass('is-fixed');
    countUp++
}

function scrollDown(countDown) {
    countDown++
}


//////// EE Ver más

if ($('.ee-info-2').length > 0) {
    var altoInfoEE = 0;
    $(".ee-info-2 .text p").each(function (e) {
        altoInfoEE += parseFloat($(this).css("height"))
    })
    if (altoInfoEE <= parseFloat($(".ee-info-2 .text").css("height"))) {
        $(".ee-info-2 .show-more").css("display", "none")
    } else {
        $(".ee-info-2 .show-more").css("display", "block")
    }
}

// DRAG TABLA DEPORTE
if ($('.table-clasi').length > 0) {

    $('.table-clasi').each(function (e) {
        numColGral = $('.col-gral', this).size()
        $('.cont-col-gral').slick({
            infinite: false,
            slidesToShow: numColGral,
            slidesToScroll: numColGral,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
            ],
            onBeforeChange: function (slider) {

            },
            onAfterChange: function (slider) {
                var next = parent.find('.slick-next'),
                    prev = parent.find('.slick-prev');
                $(".table-clasi .slick-prev, .table-clasi .slick-next").hide();
            }
        });
    })
};

// DRAG TABLA FAQS
if ($('.tabla-faqs').length > 0) {

    $('.tabla-faqs').each(function (e) {
        numColGral = $('.col-gral', this).size()
        $('.cont-col-gral').slick({
            infinite: false,
            slidesToShow: numColGral,
            slidesToScroll: numColGral,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 2
                }
            }
            ],
            onBeforeChange: function (slider) {

            },
            onAfterChange: function (slider) {
                var next = parent.find('.slick-next'),
                    prev = parent.find('.slick-prev');
                $(".tabla-faqs .slick-prev, .tabla-faqs .slick-next").hide();
            }
        });
    })
};

//// CARRUSEL ZONA CLIENTE
if ($('.js-horizonal-slide-sixths').length > 0 && $('.zc-module-slider').length > 0) {
    $('.js-horizonal-slide-sixths, .cont-col-gral').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 3,
        prevArrow: '<button type="button" class="slick-prev"><img src="/assets/images/movistar-plus/flecha-azules.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="/assets/images/movistar-plus/flecha-azules-der.png"></button>',
        responsive: [{
            breakpoint: 1000,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ],
        onBeforeChange: function (slider) {

        },
        onAfterChange: function (slider) {
            var parent = $(slider.$slider),
                next = parent.find('.slick-next'),
                prev = parent.find('.slick-prev')

            if (next.hasClass('slick-disabled')) {
                parent.addClass('next-disabled');
            } else {
                parent.removeClass('next-disabled');
            }

            if (prev.hasClass('slick-disabled')) {
                parent.addClass('prev-disabled');
            } else {
                parent.removeClass('prev-disabled');
            }
        }
    });
};

$('.submenu .heading').on('click', function () {
    if ($('body').hasClass('open-mobile-main-menu')) {
        $(this).siblings('ul').toggle();
    }
});

if ($(".bt-mas-vg").length > 0) {
    $(".bt-mas-vg").on("click", function () {
        if ($(".share-content").css("display") == "none") {
            $(".share-content").css("display", "block")
            $(".bt-mas-vg span").html("Cerrar")
        } else {
            $(".share-content").css("display", "none")
            $(".bt-mas-vg span").html("Más...")
        }
    })
}

if ($(".faq-content").length > 0) {
    $(".faq").removeClass("faq-open")
    $(".show-faqs").on("click", function () {
        $(".cont-li").css("background", "#ffffff")
        $(".cont-faqs").hide()
        $(".show-faqs").show()
        $(".hide-faqs").hide()
        $(this).parent().parent().parent().parent().css("background", "#eeeeee")
        $(this).parent().parent().parent().parent().find(".cont-faqs").show()
        $(this).parent().parent().parent().parent().find(".hide-faqs").show()
        $(this).hide()
    })
    $(".hide-faqs").on("click", function () {
        $(".show-faqs").show()
        $(this).parent().parent().parent().parent().css("background", "#ffffff")
        $(this).parent().parent().parent().parent().find(".cont-faqs").hide()
        $(this).parent().parent().parent().parent().find(".show-faqs").show()
        $(this).hide()
    })
}

////////////////////////////////////////

if ($("video").length > 0) {
    var videoover = false;
    $(".share-video").on("mouseover", function () {
        videoover = true;
    })
    $(".share-video").on("mouseout", function () {
        videoover = false;
    })

    $("video").on("mouseover", function (e) {
        if (videoover == false && $('video').get(0).currentTime != 0) {
            $(".share-video").fadeIn("fast")
            $(".new-title").fadeIn("fast")
        }
    })
    $("video").on("mouseout", function (e) {
        setTimeout("ocultaBt()", 100)
    })

    function ocultaBt() {
        if (videoover == false && $('video').get(0).currentTime != 0) {
            $(".share-video").fadeOut("fast")
            $(".new-title").fadeOut("fast")
        }
    }
    $('video').get(0).onended = function (e) {
        $(".share-video").fadeIn("fast")
        $(".new-title").fadeIn("fast")
    };
}

/* CARRUSEL FOOTER */

$(document).ready(function () {

    if (jQuery().magnificPopup) {
        $('.redes-footer').magnificPopup({
            type: 'ajax',
            alignTop: true,
            overflowY: 'scroll',
            closeMarkup: '<button title="%title%" class="mfp-close">x</button>',
            ajax: {
                settings: {
                    type: 'GET',
                    contentType: "html/text; charset=utf-8",
                    datatype: "html",
                    data: $.param({ 'xhr': '1' }),
                }
            }
        });
    }

    // Más info para móvil, a la altura de .js-more-info se crea un botón .js-more-info-toggle.bt-cerrar
    // que oculta/muestra el .js-more-info, a la vez que cambia su literal Más info/Cerrar
    $(".js-more-info").each(function () {
        var BotonVer = "Más info";
        var BotonOcultar = "Cerrar";
        var textoBoton = $(this).filter(":hidden").length > 0 ? BotonVer : BotonOcultar;

        var $moreText = $(this)
            .after("<a href='#' class='js-more-info-toggle bt-cerrar'>" + textoBoton + "</a>");
        var $toggleButton = $(this).siblings(".js-more-info-toggle");
        $toggleButton.on("click", function (e) {
            if ($moreText.filter(":hidden").length > 0) {
                $moreText.show();
                $toggleButton.text(BotonOcultar);
            } else {
                $moreText.hide();
                $toggleButton.text(BotonVer);
            }
            e.preventDefault();
        });
    });
})


/* NUEVA GUÍA 2017*/
var genero = [];
var canales = [];
$(document).ready(function () {
    if (typeof (Storage) !== "undefined") {
        Storage.prototype.setObj = function (key, obj) {
            return this.setItem(key, JSON.stringify(obj))
        };
        Storage.prototype.getObj = function (key) {
            return JSON.parse(this.getItem(key))
        }
    }

    //Inicializamos filtros de géneros y canales
    var genero = sessionStorage.getObj('genero');
    if (!genero) {
        genero = [];
    }

    var canales = sessionStorage.getObj('canales');
    if (!canales) {
        canales = [];
    }

    genero.forEach(function (element, index, array) {
        if ($('.pag-guia-movil .j_cont-filtros li.field.g_' + element + '>a').hasClass('checked') == false) {
            $('.pag-guia-movil .j_cont-filtros li.field.g_' + element + '>a').click();
        }
        if ($('.pag-guia .j_cont-filtros input#g_' + element).prop('checked') == false) {
            $('.pag-guia .j_cont-filtros input#g_' + element).click();
        }
    })

    canales.forEach(function (element, index, array) {
        if ($('.pag-guia .j_cont-filtros input#canal_' + element).prop('checked') == false) {
            $('.pag-guia .j_cont-filtros input#canal_' + element).click();
        }
    })
    $('.pag-guia-movil .j_cont-filtros li>a.buscar').click();
    $('.pag-guia .j_cont-filtros.genero .acciones .filtrar').click();
    $('.pag-guia .j_cont-filtros.canales .acciones .filtrar').first().click();
});

$('.container_box').on('click', 'a.j_ficha', function (e) {
    e.preventDefault();
    objTarget = $(e.delegateTarget);

    ficha = objTarget.find(".ficha");

    activo = objTarget.parent().find(".ficha:visible");

    st = $(document).scrollTop();

    if (ficha.length > 0) {
        activo.hide();
        ficha.show();
    } else {
        var pAction = $(this).attr("href");
        $.ajax({
            url: pAction,
            type: 'get',
            data: { 'view': 'ajax' },
            success: function (pHtml) {
                activo.hide();
                objTarget.append('<div class="ficha">' + pHtml + '</div>');
            },
            error: function () {
                window.location.href = pAction; //Error en el ajax, redirigimos a la ficha.
            }
        });

        $(this).data('clicked', true);
    }
    if ($(activo).length > 0 && $(activo).offset().top < objTarget.offset().top) {
        $("html, body").animate({ scrollTop: st - $(activo).height() }, 0);
    }
})

/* CHECKBOX FORMS*/
$(".ordenar .j-ordenar-dial").on("click", function () {
    $('.ordenar a').removeClass('active');
    $(this).addClass('active');
    var $wrapper = $('.j-lista-canales');

    $wrapper.find('div').sort(function (a, b) {
        dif = +a.dataset.dial - +b.dataset.dial;
        if (dif == 0) {
            return a.dataset.nombre.toUpperCase() >= b.dataset.nombre.toUpperCase() ? 1 : -1;
        } else {
            return dif;
        }
    })
        .appendTo($wrapper);
})

$(".ordenar .j-ordenar-az").on("click", function () {
    $('.ordenar a').removeClass('active');
    $(this).addClass('active');
    var $wrapper = $('.j-lista-canales');

    $wrapper.find('div').sort(function (a, b) {
        return a.dataset.nombre.toUpperCase() >= b.dataset.nombre.toUpperCase() ? 1 : -1;
    })
        .appendTo($wrapper);
})


$("#fondo_semana_bot #semana_bot ul.filtros li a.bt-filtro.canales").on("click", function (event) {
    event.preventDefault();
    $(this).toggleClass("active");
    $(".j_cont-filtros.canales").toggleClass("active");
    $(".j_cont-filtros.genero").removeClass("active");
    $(".bt-filtro.genero").removeClass("active");
})

$("#fondo_semana_bot #semana_bot ul.filtros li a.bt-filtro.genero").on("click", function (event) {
    event.preventDefault();
    $(this).toggleClass("active");
    $(".j_cont-filtros.genero").toggleClass("active");
    $(".j_cont-filtros.canales").removeClass("active");
    $(".bt-filtro.canales").removeClass("active");
})

$('#form-search-guide').on('submit', function (event) {

    if ($(this).parent('li.buscador').hasClass('active')) {
        if ($(this).find('input').val() === '') {
            event.preventDefault();
        }
    } else {
        event.preventDefault();
        $(".input-buscador").focus();
        $(this).parent('li.buscador').addClass('active');
    }
})


/*
 * Zona filtros
 */

$('.j_cont-filtros')
    .on('click', '.cancelar', function (event) {
        event.preventDefault();
        if ($(event.delegateTarget).hasClass('canales')) {
            $('.bt-filtro.canales').click();
        } else {
            $('.bt-filtro.genero').click();
        }
    }).on('change', 'input:checkbox', function (event) {
        $(this).closest('.field').toggleClass('active', $(this).prop('checked'));
        $(this).parent().toggleClass('checked_checkbox', $(this).prop('checked'));

        $(event.delegateTarget).find('.button-mini.filtrar').toggleClass('active', $(event.delegateTarget).find('input:checkbox:checked').length !== 0);
    });

$(".j_cont-filtros.genero .filtrar").on("click", function (event) {
    event.preventDefault(); // cancel the actual submit

    $(".j_cont-filtros").removeClass("active");
    $(".bt-filtro").removeClass("active");

    if ($('.j_cont-filtros.genero input:checkbox:checked').length == 0) {
        $('.tag-filtros').triggerHandler('tf:removeall', 'genero');
        sessionStorage.setObj('genero', []);
    } else {
        if (typeof (Storage) !== "undefined") {
            $('.j_cont-filtros.genero input:checkbox').each(function (index, value) {
                codigo = value.value;
                activo = value.checked;
                var genero = sessionStorage.getObj('genero');
                if (!genero) {
                    genero = [];
                }

                var i = genero.indexOf(codigo);

                if (!activo) {
                    if (i != -1) {
                        genero.splice(i, 1);
                    }

                    $('#parrilla').removeClass('g_' + codigo);
                } else {
                    if (i == -1) {
                        genero.push(codigo);
                    }
                    $('.pag-guia-movil .main-guide, #parrilla').addClass('g_' + codigo);
                }
                sessionStorage.setObj('genero', genero);
            });
        } else {
            //No hay sessionStorage
        }

        f = $('.j_cont-filtros.genero input:checkbox:checked').map(function () {
            return [{ "codigo": this.value, 'nombre': $(this).closest('.field').find('label').text(), 'tipo': 'genero' }];
        }).get();

        $('.tag-filtros').triggerHandler('tf:removeall', 'genero');
        $('.tag-filtros').triggerHandler('tf:add', [f]);
    }
});

$(".j_cont-filtros.canales .filtrar").on("click", function (event) {
    event.preventDefault();

    $(".j_cont-filtros").removeClass("active");
    $(".bt-filtro").removeClass("active");

    if ($('.j_cont-filtros.canales input:checkbox:checked').length == 0) {
        $('.main-guide').trigger('mg:change', []);
        $('.tag-filtros').triggerHandler('tf:removeall', 'canal');
        sessionStorage.setObj('canales', []);
    } else {
        f = $('.j_cont-filtros.canales input:checkbox:checked').map(function () {
            return [{ "codigo": this.value, 'nombre': $(this).closest('.field').find('label').text(), 'tipo': 'canal' }];
        }).get();

        $('.main-guide').trigger('mg:change', [f]);

        $('.tag-filtros').triggerHandler('tf:removeall', 'canal');
        $('.tag-filtros').triggerHandler('tf:add', [f]);

        if (typeof (Storage) !== "undefined") {
            $('.j_cont-filtros.canales input:checkbox').each(function (index, value) {
                codigo = value.value;
                eliminar = value.checked;
                var canales = sessionStorage.getObj('canales');
                if (!canales) {
                    canales = [];
                }

                var i = canales.indexOf(codigo);

                if (!eliminar) {
                    if (i != -1) {
                        canales.splice(i, 1);
                    }
                } else {
                    if (i == -1) {
                        canales.push(codigo);
                    }
                    $('.pag-guia-movil .main-guide').addClass('canal_' + codigo);
                }
                sessionStorage.setObj('canales', canales);
            });
        } else {
            //No hay sessionStorage
        }

        setTimeout(function () {
            window.myScrollB.refresh();
        }, 100);
    }
})


/*
 * Zona filtros
 */

$('.tag-filtros')
    .on('tf:change', function () {
        filtros = $(this).find('.bt-filtro');
        if (filtros.length > 2) {
            $("body").addClass("header-filtros");
            generos = filtros.filter(function () {
                return $(this).data('tipo') == 'genero';
            });
            $("body").toggleClass("header-filtros-genero", generos.length > 0);
        } else {
            $("body").removeClass("header-filtros").removeClass('header-filtros-genero');
        }
    })
    .on('tf:add', function (evento, elementos) {
        $.each(elementos, function (index, value) {
            c = $('.tag-filtros .bt-filtro').first().clone(true);

            if (value.tipo == 'canal') {
                c.attr('data-codigo', value.codigo).data('tipo', value.tipo).addClass('c_' + value.codigo).prepend(value.nombre).removeClass('hide');
            } else {
                c.attr('data-codigo', value.codigo).data('tipo', value.tipo).addClass('g_' + value.codigo).prepend(value.nombre).removeClass('hide');
            }
            $('.tag-filtros .bt-filtro.todos').before(c);
        });
        $('.tag-filtros').trigger('tf:change');
    })
    .on('tf:removeall', function (evento, tipo) {
        $('.tag-filtros .bt-filtro').filter(function () {
            return $(this).data("tipo") == tipo;
        }).remove();
        $('.tag-filtros').trigger('tf:change');
    })
    .on('tf:remove', function (evento, codigo) {
        $('.tag-filtros .bt-filtro').filter(function () {
            return $(this).attr('data-codigo') == codigo;
        }).remove();
        $('.tag-filtros').trigger('tf:change');
    })

/*
 * Zona guía
 */
$('.main-guide').on('mg:change', function (event, elementos) {
    if (undefined == elementos || elementos.length == 0) {
        $('#canales li, .container_fila').show();
    } else {
        $('#canales li, .container_fila').hide();

        $.each(elementos, function (index, elemento) {
            $("#canales li[data-cod='" + elemento.codigo + "']").first().show();
            $(".container_fila[data-cod='" + elemento.codigo + "']").first().show();
        });
    }
});

$(".bt-cerrar-filtro").on("click", function () {
    codigo = $(this).parent().attr('data-codigo');
    if ($(this).parent().data("tipo") == 'genero') {
        $('.j_cont-filtros.genero input:checkbox#g_' + codigo).click(); //.parent().removeClass('checked_checkbox');
        $(".j_cont-filtros.genero .filtrar").click();

        $('.j-guia-movil .j_cont-filtros li.g_' + codigo + '>a').click(); //.parent().removeClass('checked_checkbox');
        $(".j-guia-movil .j_cont-filtros .filtrar").click();
        $('#parrilla').removeClass('g_' + codigo);
    } else {
        $('.j_cont-filtros.canales input:checkbox#canal_' + codigo).click(); //.parent().removeClass('checked_checkbox');
        $(".j_cont-filtros.canales .filtrar").click();
        $('#parrilla').removeClass('canal_' + codigo);
    }
})

$(".j-guia, .j-guia-movil").on("click", '.bt-cerrar-filtro-todo', function (event) {
    elecode = [];
    $(event.delegateTarget).find('.bt-filtro:visible').not('.todos').each(function () {
        elecode.push($(this).data('codigo'));
    });

    tamano = elecode.length;
    for (var i = 0; i < tamano; i++) {
        $(".bt-filtro.g_" + elecode[i]).find(".bt-cerrar-filtro").click();
        $(".bt-filtro.c_" + elecode[i]).find(".bt-cerrar-filtro").click();
    }
})


if ($(".pag-guia").length > 0 || $(".pag-guia-mov").length > 0) {
    $("#calendar").datepicker({
        maxDate: 6,
        minDate: -7
    });
    // Traducción al español
    $(function ($) {
        $.datepicker.regional['es'] = {
            closeText: 'Cerrar',
            prevText: '',
            nextText: '',
            currentText: 'Hoy',
            monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
            dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
            dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
            dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
            weekHeader: 'Sm',
            dateFormat: 'yy-mm-dd',
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ''
        };
        $.datepicker.setDefaults($.datepicker.regional['es']);
    });
    $("#calendar").datepicker({
        buttonText: "Selecciona fecha"
    })
      .on("change", function (e) {
            window.location.href = this.form.getAttribute("action") + "/" + this.value;
        });
    $(".calendar").on("click", function (e) {
        $("#calendar").datepicker('show');
        e.preventDefault();
    });

    $(window).on("scroll", function () {
        if ($("body").scrollTop() > parseFloat($(".j_cont-filtros.canales").css("height")) + 150 && $(".j_cont-filtros.canales").hasClass("active")) {
            $(".j_cont-filtros.canales").removeClass("active");
            $(".bt-filtro.canales").removeClass("active");
        }
        if ($("body").scrollTop() > parseFloat($(".j_cont-filtros.genero").css("height")) + 150 && $(".j_cont-filtros.genero").hasClass("active")) {
            $(".j_cont-filtros.genero").removeClass("active");
            $(".bt-filtro.genero").removeClass("active");
        }
    })

    $(".info-canal .filtros").on("click", function () {
        $(".j_cont-filtros").addClass("visible")
    })

    $('.pag-guia-movil .j_cont-filtros')
        .on('click', 'li.field>a', function (event) {
            event.preventDefault();
            $(this).toggleClass('selected');
        })
        .on('click', 'li>a.buscar', function (event) {
            event.preventDefault();
            $(event.delegateTarget).removeClass("visible");

            $(".pag-guia-movil .main-guide").removeClass(function (index, className) {
                return (className.match(/(^|\s)g_\S+/g) || []).join(' ');
            });

            if (typeof (Storage) !== "undefined") {
                $('.pag-guia-movil .j_cont-filtros li.field').each(function () {
                    codigo = $(this).attr('data-codigo');
                    eliminar = $(this).find('a').hasClass('selected');
                    var genero = sessionStorage.getObj('genero');

                    if (!genero) {
                        genero = [];
                    }

                    var i = genero.indexOf(codigo);

                    if (!eliminar) {
                        if (i != -1) {
                            genero.splice(i, 1);
                        }
                    } else {
                        if (i == -1) {
                            genero.push(codigo);
                        }
                        $('.pag-guia-movil .main-guide').addClass('g_' + codigo);
                    }
                    sessionStorage.setObj('genero', genero);
                });
            } else {
                //No hay sessionStorage
            }

            if ($(this).closest('ul').find('li a.selected').length > 0) {
                $("body").addClass("header-filtros").addClass('header-filtros-genero');
                f = $('.pag-guia-movil .j_cont-filtros .field:has(a.selected)').map(function () {
                    return [{ "codigo": $(this).attr('data-codigo'), 'nombre': $(this).find('a').text(), 'tipo': 'genero' }];
                }).get();

                $('.tag-filtros').triggerHandler('tf:removeall', 'genero');
                $('.tag-filtros').triggerHandler('tf:add', [f]);
            } else {
                $("body").removeClass("header-filtros").removeClass('header-filtros-genero');
                $(".pag-guia-movil .main-guide").removeClass(function (index, className) {
                    return (className.match(/(^|\s)g_\S+/g) || []).join(' ');
                });
                $('.tag-filtros').triggerHandler('tf:removeall', 'genero');
            }
        })

    $(".j_cont-filtros .header, .j_cont-filtros .buscar").on("click", function () {
        $(".j_cont-filtros").removeClass("visible");
    })
}

$(function () {
    if ($(window).width() < 1200) {
        $('ul.links-abc').slick({
            infinite: false,
            variableWidth: true,
            arrows: false,
            draggable: false,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    prevArrow: '#fle-izq-az',
                    nextArrow: '#fle-dcha-az',
                    arrows: true,
                    draggable: false,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    prevArrow: null,
                    nextArrow: null,
                    draggable: true,
                    slidesToScroll: 3
                }
            }
            ]
        })
    }

    if (typeof IScroll !== "undefined") {
        if ($('.semana-days').length > 0 && $(window).width() < 980) {
            var sliderDias = new IScroll('#semana', {
                eventPassthrough: true,
                scrollX: true,
                scrollY: false,
                preventDefault: false,
                disablePointer: true, // important to disable the pointer events that causes the issues
                disableTouch: false, // false if you want the slider to be usable with touch devices
                disableMouse: true // false if you want the slider to be usable with a mouse (desktop)
            });
        }
        if ($('.canales-mov').length > 0) {
            var myScroll = new IScroll('.canales-mov', {
                eventPassthrough: true,
                scrollX: true,
                scrollY: false,
                preventDefault: false,
                disablePointer: true, // important to disable the pointer events that causes the issues
                disableTouch: false, // false if you want the slider to be usable with touch devices
                disableMouse: false // false if you want the slider to be usable with a mouse (desktop)
            });
            myScroll.scrollToElement($('.canales-mov li.active').get(0));
        }
    }
});

//Parte de pdf
$('a.descarga-pdf').on('click', function (event) {
    event.preventDefault();

    $.magnificPopup.open({
        items: {
            src: $(this).attr('href')
        },
        type: 'ajax',
        overflowY: 'scroll', // as we know that popup content is tall we set scroll overflow by default to avoid jump
        ajax: {
            settings: {
                type: 'GET',
                contentType: "html/text; charset=utf-8",
                datatype: "html",
                data: $.param({ 'xhr': '1' }),
            }
        }
    });
});

// Autocompletado en buscador
if ($().autocomplete) {
    $('#form-search-guide input[type=search], #form-search-inline input[type=search]').autocomplete({
        source: "/servicios/autocompletado/",
        minLength: 3
    });
}

/* FIN NUEVA GUÍA 2017 */