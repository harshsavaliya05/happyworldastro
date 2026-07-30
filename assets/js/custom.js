$(document).ready(function () {
    // login slider
    $('.as_login_slider').slick({
        dots: true,
        arrows: false,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    // banner slider
    $('.as_banner_slider').slick({
        dots: false,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev as_btn"><span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="8" height="15" viewBox="0 0 8 15"> <image xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAPCAMAAADu1H4BAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAaVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AAAD8pYtkAAAAIXRSTlMA1ea/6671JJ/9LZA7gUx28linaftidVeLPJczoSy1+sniUnu2AAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAE1JREFUCNcly0USwDAMBEE77DA4jPP/T6Zk6dJzWBkTzkZqTBJMyXKxwJViBbXYQCt29EMYwqifE37WWmDV2mDXOnCn1oW/tR5eDfPZHwl7BIGPaP/tAAAAAElFTkSuQmCC" width="8" height="15"/> </svg></span></button>',
        nextArrow: '<button type="button" class="slick-next as_btn"><span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="8" height="15" viewBox="0 0 8 15"> <image xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAPCAMAAADu1H4BAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAflBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AAADvEKCAAAAAKHRSTlMAwukcx+QNCdLUAwjfyRbuuyX4qzDhmWw27Iwt/p73uREP2svRBLXYnrw30wAAAAFiS0dEAIgFHUgAAAAJcEhZcwAALiMAAC4jAXilP3YAAABVSURBVAjXJctVEsAwCEXRpC6pu6epvf2vsBPg554ZQEjHFTQe/IAQRogTUqqQ8TIvULKqGg2r7dCzBoA6TphtlxUbfe04bLWCtD0NLjq8YR7C+2nqDzu8BZoG2fHJAAAAAElFTkSuQmCC" width="8" height="15"/> </svg></span></button>'
    });

    // product slider
    $('.as_product_slider').slick({
        arrows: false,
        infinite: true,
        speed: 800,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                }
            },
        ]

    });

    // overview slider
    $('.as_overview_slider').slick({
        infinite: true,
        speed: 800,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: '<button type="button" class="slick-prev as_btn"><span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="12" height="16" viewBox="0 0 12 16"> <path d="M12.003,15.996 L-0.000,7.997 L12.002,-0.001 L10.062,7.997 L12.003,15.996 ZM10.102,2.762 L2.246,7.997 L10.102,13.233 L8.832,7.997 L10.102,2.762 ZM3.824,7.997 L8.256,5.043 L7.539,7.997 L8.256,10.951 L3.824,7.997 Z" class="cls-1"/> </svg></span> Prev</button>',
        nextArrow: '<button type="button" class="slick-next as_btn">next <span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="8" height="12" viewBox="0 0 8 12"><path d="M8.000,5.998 L-0.002,11.997 L1.292,5.998 L-0.002,-0.001 L8.000,5.998 ZM1.265,9.924 L6.502,5.998 L1.265,2.071 L2.112,5.998 L1.265,9.924 ZM5.451,5.998 L2.496,8.213 L2.974,5.998 L2.496,3.783 L5.451,5.998 Z" class="cls-1"/> </svg></span></button>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    arrows: false
                }
            },
        ]
    });
    //  shop single slider
    $('.as_shopsingle_for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        speed: 800,
        arrows: false,
        fade: true,
        asNavFor: '.as_shopsingle_nav'
    });
    $('.as_shopsingle_nav').slick({
        slidesToShow: 3,
        arrows: false,
        slidesToScroll: 1,
        asNavFor: '.as_shopsingle_for',
        dots: false,
        focusOnSelect: true
    });
    // customer slider
    $('.as_customer_for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 800,
        dots: false,
        arrows: false,
        fade: true,
        asNavFor: '.as_customer_nav'
    });
    $('.as_customer_nav').slick({
        slidesToShow: 6,
        arrows: false,
        slidesToScroll: 1,
        asNavFor: '.as_customer_for',
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });
    // card slider
    $('.as_card_slider').slick({
        infinite: true,
        speed: 800,
        dots: false,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    // datepicker
    $('.as_datepicker').datepicker({
        language: 'en',
        minDate: new Date()
    });



    // countTo
    // $('.as_number>span>span').countTo();

    // search popup
    $('.as_search').on('click', function () {
        $(this).parent().find('.as_search_boxpopup').addClass('popup_open');
    })
    $('.as_cancel').on('click', function () {
        $(this).parent().removeClass('popup_open');
    })

    // menu toggle
    $(document).on('click', '.as_toggle', function (e) {
        e.preventDefault();
        $('.as_custom_drawer').addClass('open');
        $('html, body').addClass('menu_open');
    });

    // Dynamic Custom Navigation Drawer Generation (matching mockup design)
    if (!$('.as_custom_drawer').length) {
        // Dynamic Backdrop Overlay
        $('body').append('<div class="as_drawer_overlay"></div>');

        var drawerHtml =
            '<div class="as_custom_drawer">' +
            '<span class="as_drawer_close">' +
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#f37335" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>' +
            '</span>' +
            '<div class="as_drawer_logo">' +
            '<a href="index.html"><img src="assets/images/Happyworls.webp" alt="Logo"></a>' +
            '</div>' +
            '<div class="as_drawer_contact">' +
            '<a href="tel:+919997333292">' +
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>' +
            '<span>+91 9997333292</span>' +
            '</a>' +
            '<a href="mailto:harpreetmay04@gmail.com">' +
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>' +
            '<span>harpreetmay04@gmail.com</span>' +
            '</a>' +
            '</div>' +
            '<div class="as_drawer_divider"><span>✦</span></div>' +
            '<ul class="as_drawer_menu">' +
            '<li>' +
            '<a href="index.html" class="home_link">' +
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>' +
            '<span>Home</span>' +
            '</a>' +
            '</li>' +
            '<li>' +
            '<a href="about.html" class="about_link">' +
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>' +
            '<span>About Us</span>' +
            '</a>' +
            '</li>' +
            '<li>' +
            '<a href="service.html" class="services_link">' +
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>' +
            '<span>Services</span>' +
            '</a>' +
            '</li>' +
            '<li>' +
            '<a href="blog.html" class="blog_link">' +
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>' +
            '<span>Blog</span>' +
            '</a>' +
            '</li>' +
            '<li>' +
            '<a href="contact.html" class="contact_link">' +
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>' +
            '<span>Contact Us</span>' +
            '</a>' +
            '</li>' +
            '</ul>' +
            '<div class="as_drawer_divider"><span>✦</span></div>' +
            '<div class="as_drawer_socials">' +
            '<a href="https://www.facebook.com" target="_blank" class="as_drawer_social_icon" aria-label="Facebook">' +
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>' +
            '</a>' +
            '<a href="https://www.instagram.com/happyworldastro?utm_source=qr&igsh=MWk1OGwwaHA1bzd6NQ%3D%3D" target="_blank" class="as_drawer_social_icon" aria-label="Instagram">' +
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>' +
            '</a>' +
            '<a href="https://api.whatsapp.com/send?phone=919997333292" target="_blank" class="as_drawer_social_icon" aria-label="WhatsApp">' +
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/></svg>' +
            '</a>' +
            '</div>' +
            '</div>';
        $('body').append(drawerHtml);
    }

    // Set active link inside custom drawer
    var currentPath = window.location.pathname.split('/').pop() || 'index.html';
    $('.as_custom_drawer .as_drawer_menu a').removeClass('active');
    if (currentPath.indexOf('about') !== -1) $('.as_custom_drawer .as_drawer_menu .about_link').addClass('active');
    else if (currentPath.indexOf('service') !== -1) $('.as_custom_drawer .as_drawer_menu .services_link').addClass('active');
    else if (currentPath.indexOf('blog') !== -1) $('.as_custom_drawer .as_drawer_menu .blog_link').addClass('active');
    else if (currentPath.indexOf('contact') !== -1) $('.as_custom_drawer .as_drawer_menu .contact_link').addClass('active');
    else $('.as_custom_drawer .as_drawer_menu .home_link').addClass('active');

    // Drawer events
    $(document).on('click', '.as_drawer_close, .as_drawer_overlay', function (e) {
        e.preventDefault();
        $('.as_custom_drawer').removeClass('open');
        $('html, body').removeClass('menu_open');
    });

    $(document).on('click', function (e) {
        if ($('body').hasClass('menu_open')) {
            if (!$(e.target).closest('.as_custom_drawer, .as_toggle').length) {
                $('.as_custom_drawer').removeClass('open');
                $('html, body').removeClass('menu_open');
            }
        }
    });

    // Block touch swipe gestures on background content when mobile menu is active to prevent page shifting
    document.addEventListener('touchmove', function (e) {
        if (document.body.classList.contains('menu_open')) {
            if (!e.target.closest('.as_custom_drawer')) {
                e.preventDefault();
            }
        }
    }, { passive: false });

    // Block mouse wheel scrolling on background content when mobile menu is active
    document.addEventListener('wheel', function (e) {
        if (document.body.classList.contains('menu_open')) {
            if (!e.target.closest('.as_custom_drawer')) {
                e.preventDefault();
            }
        }
    }, { passive: false });

    // Block keyboard scrolling (Space, PageUp, PageDown, End, Home, Arrows) when mobile menu is active
    document.addEventListener('keydown', function (e) {
        if (document.body.classList.contains('menu_open')) {
            var keys = [32, 33, 34, 35, 36, 37, 38, 39, 40];
            if (keys.indexOf(e.keyCode) > -1) {
                if (!e.target.closest('.as_custom_drawer')) {
                    e.preventDefault();
                }
            }
        }
    });



    // cart box
    $('.as_cart_wrapper').on('click', function () {
        $(this).parent().toggleClass('cart_open');
    })

    // login popup
    $('.as_signup').on('click', function () {
        $(this).closest('.modal-body').find('.as_login_box').removeClass('active');
        $(this).closest('.modal-body').find('.as_signup_box').addClass('active');
        $(this).closest('.modal-content').find('.modal-title').text('Sign Up');
    })
    $('.as_login').on('click', function () {
        $(this).closest('.modal-body').find('.as_login_box').addClass('active');
        $(this).closest('.modal-body').find('.as_signup_box').removeClass('active');
        $(this).closest('.modal-content').find('.modal-title').text('Login');
    })

    if ($('.as_select_box').length) {
        // Dynamic dropdown populator for Zodiac Sign Finder
        $('select[data-placeholder="Date"]').each(function () {
            var $select = $(this);
            $select.empty();
            $select.append('<option value="">Date</option>');
            for (var i = 1; i <= 31; i++) {
                $select.append('<option value="' + i + '">' + i + '</option>');
            }
        });

        $('select[data-placeholder="Month"]').each(function () {
            var $select = $(this);
            $select.empty();
            $select.append('<option value="">Month</option>');
            var months = [
                { val: 1, name: 'Jan' },
                { val: 2, name: 'Feb' },
                { val: 3, name: 'Mar' },
                { val: 4, name: 'Apr' },
                { val: 5, name: 'May' },
                { val: 6, name: 'Jun' },
                { val: 7, name: 'Jul' },
                { val: 8, name: 'Aug' },
                { val: 9, name: 'Sep' },
                { val: 10, name: 'Oct' },
                { val: 11, name: 'Nov' },
                { val: 12, name: 'Dec' }
            ];
            months.forEach(function (m) {
                $select.append('<option value="' + m.val + '">' + m.name + '</option>');
            });
        });

        $('select[data-placeholder="Year"]').each(function () {
            var $select = $(this);
            $select.empty();
            $select.append('<option value="">Year</option>');
            var currentYear = new Date().getFullYear();
            for (var y = currentYear; y >= 1900; y--) {
                $select.append('<option value="' + y + '">' + y + '</option>');
            }
        });

        $(".as_select_box select").each(function () {
            var placeholderText = $(this).attr('data-placeholder') || 'Select';
            $(this).select2({
                placeholder: placeholderText,
                allowClear: true,
                dropdownParent: $(this).parent()
            });
        });
    }

    // Zodiac calculation data
    var zodiacSignsData = {
        "Aries": {
            hindi: "Mesh",
            element: "Fire",
            color: "Red",
            number: "9",
            planet: "Mars",
            keywords: "Leadership • Courage • Passion",
            icon: "h1.svg"
        },
        "Taurus": {
            hindi: "Vrishabh",
            element: "Earth",
            color: "Green",
            number: "6",
            planet: "Venus",
            keywords: "Stability • Patience • Loyalty",
            icon: "h2.svg"
        },
        "Gemini": {
            hindi: "Mithun",
            element: "Air",
            color: "Yellow",
            number: "5",
            planet: "Mercury",
            keywords: "Communication • Intelligence • Curiosity",
            icon: "h3.svg"
        },
        "Cancer": {
            hindi: "Kark",
            element: "Water",
            color: "White",
            number: "2",
            planet: "Moon",
            keywords: "Compassion • Family • Intuition",
            icon: "h4.svg"
        },
        "Leo": {
            hindi: "Simha",
            element: "Fire",
            color: "Gold / Orange",
            number: "1",
            planet: "Sun",
            keywords: "Confidence • Creativity • Leadership",
            icon: "h5.svg"
        },
        "Virgo": {
            hindi: "Kanya",
            element: "Earth",
            color: "Green",
            number: "5",
            planet: "Mercury",
            keywords: "Perfection • Discipline • Practicality",
            icon: "h6.svg"
        },
        "Libra": {
            hindi: "Tula",
            element: "Air",
            color: "Sky Blue / Pink",
            number: "6",
            planet: "Venus",
            keywords: "Balance • Harmony • Diplomacy",
            icon: "h7.svg"
        },
        "Scorpio": {
            hindi: "Vrishchik",
            element: "Water",
            color: "Maroon",
            number: "9",
            planet: "Mars",
            keywords: "Passion • Mystery • Determination",
            icon: "h8.svg"
        },
        "Sagittarius": {
            hindi: "Dhanu",
            element: "Fire",
            color: "Purple",
            number: "3",
            planet: "Jupiter",
            keywords: "Adventure • Wisdom • Optimism",
            icon: "h9.svg"
        },
        "Capricorn": {
            hindi: "Makar",
            element: "Earth",
            color: "Black / Dark Blue",
            number: "8",
            planet: "Saturn",
            keywords: "Discipline • Ambition • Success",
            icon: "h10.svg"
        },
        "Aquarius": {
            hindi: "Kumbh",
            element: "Air",
            color: "Blue",
            number: "4",
            planet: "Saturn",
            keywords: "Innovation • Freedom • Vision",
            icon: "h11.svg"
        },
        "Pisces": {
            hindi: "Meen",
            element: "Water",
            color: "Yellow",
            number: "3",
            planet: "Jupiter",
            keywords: "Compassion • Imagination • Spirituality",
            icon: "h12.svg"
        }
    };

    function getZodiacSign(day, month) {
        day = parseInt(day);
        month = parseInt(month);
        if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "Aries";
        if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return "Taurus";
        if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) return "Gemini";
        if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) return "Cancer";
        if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return "Leo";
        if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return "Virgo";
        if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) return "Libra";
        if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) return "Scorpio";
        if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) return "Sagittarius";
        if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) return "Capricorn";
        if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return "Aquarius";
        if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) return "Pisces";
        return null;
    }

    $(document).on('click', '.as_find_sign_btn', function (e) {
        e.preventDefault();
        var $form = $(this).closest('.as_sign_form');
        var day = $form.find('select[data-placeholder="Date"]').val();
        var month = $form.find('select[data-placeholder="Month"]').val();
        var year = $form.find('select[data-placeholder="Year"]').val();

        if (!day || !month || !year) {
            alert('Please select your Date, Month, and Year of birth.');
            return;
        }

        var sign = getZodiacSign(day, month);
        if (sign && zodiacSignsData[sign]) {
            var data = zodiacSignsData[sign];
            showZodiacResultModal(sign, data, day, month, year);
            
            // Clear the form fields
            $form.find('select').val('').trigger('change');
        }
    });

    function showZodiacResultModal(sign, data, day, month, year) {
        // Remove existing modal if any
        $('.as_zodiac_modal_overlay').remove();

        var monthNames = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var formattedDate = day + " " + monthNames[parseInt(month)] + " " + year;

        var modalHtml = `
            <div class="as_zodiac_modal_overlay">
                <div class="as_zodiac_modal">
                    <span class="as_zodiac_close">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </span>
                    <div class="as_zodiac_icon_wrap">
                        <img src="assets/images/svg/horoscope/${data.icon}" alt="${sign}">
                    </div>
                    <h2 class="as_zodiac_title">${sign} (${data.hindi})</h2>
                    <p class="as_zodiac_subtitle">Your birth date: ${formattedDate}</p>
                    
                    <div class="as_zodiac_details">
                        <div class="as_zodiac_row">
                            <span class="as_zodiac_label">Element</span>
                            <span class="as_zodiac_val">${data.element}</span>
                        </div>
                        <div class="as_zodiac_row">
                            <span class="as_zodiac_label">Lucky Color</span>
                            <span class="as_zodiac_val">${data.color}</span>
                        </div>
                        <div class="as_zodiac_row">
                            <span class="as_zodiac_label">Lucky Number</span>
                            <span class="as_zodiac_val">${data.number}</span>
                        </div>
                        <div class="as_zodiac_row">
                            <span class="as_zodiac_label">Ruling Planet</span>
                            <span class="as_zodiac_val">${data.planet}</span>
                        </div>
                    </div>
                    
                    <div class="as_zodiac_keywords">
                        ${data.keywords}
                    </div>
                    
                    <button class="as_zodiac_ok_btn">Awesome!</button>
                </div>
            </div>
        `;

        $('body').append(modalHtml);

        // Animate in
        setTimeout(function () {
            $('.as_zodiac_modal_overlay').addClass('active');
        }, 50);

        // Close handlers
        $(document).on('click', '.as_zodiac_close, .as_zodiac_ok_btn', function () {
            var $overlay = $('.as_zodiac_modal_overlay');
            $overlay.removeClass('active');
            setTimeout(function () {
                $overlay.remove();
            }, 300);
        });

        // Close on escape key
        $(document).on('keydown.zodiac', function (e) {
            if (e.key === 'Escape') {
                var $overlay = $('.as_zodiac_modal_overlay');
                $overlay.removeClass('active');
                setTimeout(function () {
                    $overlay.remove();
                }, 300);
                $(document).off('keydown.zodiac');
            }
        });

        // Close on clicking overlay background
        $('.as_zodiac_modal_overlay').on('click', function (e) {
            if ($(e.target).hasClass('as_zodiac_modal_overlay')) {
                var $overlay = $('.as_zodiac_modal_overlay');
                $overlay.removeClass('active');
                setTimeout(function () {
                    $overlay.remove();
                }, 300);
            }
        });
    }

    // Auto-fill service select dropdown from URL query parameters (e.g. ?service=Tarot%20Card%20Reading)
    function autoFillService() {
        var urlParams = new URLSearchParams(window.location.search);
        var serviceParam = urlParams.get('service');
        if (serviceParam) {
            var $serviceSelect = $('select[name="service"]');
            if ($serviceSelect.length) {
                var matchedValue = "";
                var searchStr = serviceParam.toLowerCase().trim();
                $serviceSelect.find('option').each(function () {
                    var optVal = ($(this).val() || "").toLowerCase().trim();
                    var optText = ($(this).text() || "").toLowerCase().trim();

                    if (optVal === searchStr || optText === searchStr) {
                        matchedValue = $(this).val();
                        return false;
                    }
                    if (optVal.indexOf(searchStr) !== -1 || optText.indexOf(searchStr) !== -1) {
                        matchedValue = $(this).val();
                        return false;
                    }
                    if (searchStr.indexOf(optVal) !== -1 || searchStr.indexOf(optText) !== -1) {
                        if (optVal.length > 2) {
                            matchedValue = $(this).val();
                            return false;
                        }
                    }
                });
                if (matchedValue) {
                    $serviceSelect.val(matchedValue).trigger('change');
                } else {
                    $serviceSelect.val(serviceParam).trigger('change');
                }
            }
        }
    }
    autoFillService();
    setTimeout(autoFillService, 150);
    // circle
    if ($('.as_progressbar').length) {
        $(".as_progressbar.p1").circularProgress({
            color: '#ff7010',
            starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
            percent: 0, // percent starts from
            percentage: true,
        }).circularProgress('animate', 45, 5000);
        $(".as_progressbar.p2").circularProgress({
            color: '#ff7010',
            starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
            percent: 0, // percent starts from
            percentage: true,
        }).circularProgress('animate', 94, 5000);
        $(".as_progressbar.p3").circularProgress({
            color: '#ff7010',
            starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
            percent: 0, // percent starts from
            percentage: true,
        }).circularProgress('animate', 84, 5000);
        $(".as_progressbar.p4").circularProgress({
            color: '#ff7010',
            starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
            percent: 0, // percent starts from
            percentage: true,
        }).circularProgress('animate', 64, 5000);
        $(".as_progressbar.p5").circularProgress({
            color: '#ff7010',
            starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
            percent: 0, // percent starts from
            percentage: true,
        }).circularProgress('animate', 76, 5000);
    }

    // step
    $(document).on('click', '.checkout_wrapper_box .next', function () {
        var targetNum = $(this).attr('data-step');
        $(this).closest('.checkout_wrapper_box').find('.step').css('display', 'none');
        $(this).closest('.checkout_wrapper_box').find('[data-target="' + targetNum + '"]').css('display', 'block');
        $(this).closest('.checkout_wrapper_box').find('[data-active="' + targetNum + '"]').addClass('active');
        // $(this).cloasest('.checkout_wrapper_box').find('data-target="'+targetNum+'"').css('display','block');
    })

    // number increase
    $('.quantity .plus').on('click', function () {
        var num = parseInt($('.quantity').find('input').val()) + 1;
        $(this).closest('.quantity').find('input').val(num);
    })
    $('.quantity .minus').on('click', function () {
        var num = parseInt($('.quantity').find('input').val()) - 1;
        $(this).closest('.quantity').find('input').val(num);
    })

    // Contact Form Validation and WhatsApp Redirection
    $('#first_name, #last_name, #subject').on('keydown input', function (e) {
        var val = $(this).val();
        if (/\d/.test(val)) {
            $(this).val(val.replace(/\d/g, ''));
        }
    });

    $('#contact_form').on('submit', function (e) {
        e.preventDefault();

        $('.error-msg').text('');
        $('.form-control').css('border-color', '');

        var firstName = $('#first_name').val().trim();
        var lastName = $('#last_name').val().trim();
        var email = $('#email').val().trim();
        var subject = $('#subject').val().trim();
        var message = $('#message').val().trim();

        var isValid = true;
        var nameRegex = /^[a-zA-Z\s]+$/;
        var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!firstName) {
            $('#first_name_err').text('Please enter your Name.');
            $('#first_name').css('border-color', '#ff3333');
            isValid = false;
        } else if (!nameRegex.test(firstName)) {
            $('#first_name_err').text('Numbers or special characters are not allowed in Name.');
            $('#first_name').css('border-color', '#ff3333');
            isValid = false;
        }

        if (!lastName) {
            $('#last_name_err').text('Please enter your Last Name.');
            $('#last_name').css('border-color', '#ff3333');
            isValid = false;
        } else if (!nameRegex.test(lastName)) {
            $('#last_name_err').text('Numbers or special characters are not allowed in Last Name.');
            $('#last_name').css('border-color', '#ff3333');
            isValid = false;
        }

        if (!email) {
            $('#email_err').text('Please enter your Email Address.');
            $('#email').css('border-color', '#ff3333');
            isValid = false;
        } else if (!emailRegex.test(email)) {
            $('#email_err').text('Please enter a valid Email Address (e.g. name@gmail.com).');
            $('#email').css('border-color', '#ff3333');
            isValid = false;
        }

        if (!subject) {
            $('#subject_err').text('Please enter Subject.');
            $('#subject').css('border-color', '#ff3333');
            isValid = false;
        } else if (!nameRegex.test(subject)) {
            $('#subject_err').text('Numbers or special characters are not allowed in Subject.');
            $('#subject').css('border-color', '#ff3333');
            isValid = false;
        }

        if (!message) {
            $('#message_err').text('Please enter your Message.');
            $('#message').css('border-color', '#ff3333');
            isValid = false;
        }

        if (isValid) {
            var whatsappNumber = "919997333292";
            var text = "Hello,\n\n" +
                "I am reaching out via the Astrology website contact form.\n\n" +
                "Contact Details:\n" +
                "- Name: " + firstName + " " + lastName + "\n" +
                "- Email: " + email + "\n" +
                "- Subject: " + subject + "\n\n" +
                "Message:\n" + message + "\n\n" +
                "Thank you.";

            var whatsappUrl = "https://api.whatsapp.com/send?phone=" + whatsappNumber + "&text=" + encodeURIComponent(text);
            window.open(whatsappUrl, '_blank');
        }
    });

    // Appointment Form Validation
    function showAppointmentError($el, msg) {
        if ($el.is('select') && $el.next('.select2-container').length) {
            $el.next('.select2-container').find('.select2-selection').css('border-color', '#ff3333');
        } else {
            if ($el.closest('.form-control').length) {
                $el.closest('.form-control').css('border-color', '#ff3333');
            } else {
                $el.css('border-color', '#ff3333');
            }
        }
        var $err = $('<div class="error-msg" style="color: #ff3333; font-size: 13px; text-align: left; margin-top: 5px;"></div>').text(msg);
        $el.closest('.form-group').append($err);
    }

    function clearAppointmentErrors($form) {
        $form.find('.error-msg').remove();
        $form.find('.form-control').css('border-color', '');
        $form.find('.select2-container .select2-selection').css('border-color', '');
    }

    // Live input restrictions for Name (no numbers)
    $('form.as_appointment_form').not('#contact_form').find('input[name="name"]').on('input keydown', function () {
        var val = $(this).val();
        if (/\d/.test(val)) {
            $(this).val(val.replace(/\d/g, ''));
        }
    });

    // Live input restrictions for Phone (digits only, max 10)
    $('form.as_appointment_form').not('#contact_form').find('input[name="phone"]').on('input keydown', function () {
        var val = $(this).val();
        $(this).val(val.replace(/\D/g, '').substring(0, 10));
    });

    // Live input restrictions for Time (auto-insert colon immediately after 2 digits, max 4 digits)
    var isBackspace = false;
    $('form.as_appointment_form').not('#contact_form').find('input[name="time"]').on('keydown', function (e) {
        isBackspace = (e.key === 'Backspace' || e.keyCode === 8);
    });

    $('form.as_appointment_form').not('#contact_form').find('input[name="time"]').on('input', function () {
        var val = $(this).val().replace(/[^0-9]/g, '');
        if (val.length > 4) {
            val = val.substring(0, 4);
        }

        if (isBackspace && val.length === 2) {
            $(this).val(val);
            return;
        }

        if (val.length >= 2) {
            $(this).val(val.substring(0, 2) + ' : ' + val.substring(2));
        } else {
            $(this).val(val);
        }
    });

    // Handle AM/PM button toggle
    $(document).on('click', '.as_ampm_btn', function () {
        var $parent = $(this).closest('.form-group');
        $parent.find('.as_ampm_btn').removeClass('active').css({
            'background': '#333333',
            'color': '#bbbbbb'
        });
        $(this).addClass('active').css({
            'background': 'var(--secondary-color)',
            'color': '#ffffff'
        });
        $parent.find('input[name="ampm"]').val($(this).data('value'));
    });

    $('form.as_appointment_form').not('#contact_form').on('submit', function (e) {
        e.preventDefault();
        var $form = $(this);
        clearAppointmentErrors($form);

        var isValid = true;
        var nameRegex = /^[a-zA-Z\s]+$/;
        var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        var nameInput = $form.find('input[name="name"]');
        var name = nameInput.val().trim();

        var dateInput = $form.find('input[name="date"]');
        var date = dateInput.val().trim();

        var phoneInput = $form.find('input[name="phone"]');
        var phone = phoneInput.val().trim();

        var emailInput = $form.find('input[name="email"]');
        var email = emailInput.val().trim();

        var timeInput = $form.find('input[name="time"]');
        var time = timeInput.val().trim();

        var serviceSelect = $form.find('select[name="service"]');
        var service = serviceSelect.val();

        var messageTextarea = $form.find('textarea[name="message"]');
        var message = messageTextarea.val().trim();

        if (!name) {
            showAppointmentError(nameInput, 'Name is required.');
            isValid = false;
        } else if (!nameRegex.test(name)) {
            showAppointmentError(nameInput, 'Numbers or special characters are not allowed in Name.');
            isValid = false;
        }

        if (!date) {
            showAppointmentError(dateInput, 'Booking date is required.');
            isValid = false;
        }

        if (!phone) {
            showAppointmentError(phoneInput, 'Phone number is required.');
            isValid = false;
        } else if (phone.length !== 10) {
            showAppointmentError(phoneInput, 'Phone number must be exactly 10 digits.');
            isValid = false;
        }

        if (!email) {
            showAppointmentError(emailInput, 'Email is required.');
            isValid = false;
        } else if (!emailRegex.test(email)) {
            showAppointmentError(emailInput, 'Please enter a valid email address (e.g. name@gmail.com).');
            isValid = false;
        }

        if (!time) {
            showAppointmentError(timeInput, 'Booking time is required.');
            isValid = false;
        } else {
            var timeClean = time.replace(/\s/g, '');
            var timeParts = timeClean.split(':');
            var hours = parseInt(timeParts[0], 10);
            var minutes = timeParts[1] ? parseInt(timeParts[1], 10) : NaN;

            if (isNaN(hours) || isNaN(minutes) || hours < 1 || hours > 12 || minutes < 0 || minutes > 59) {
                showAppointmentError(timeInput, 'Please enter time in HH : MM format (hours 01-12, minutes 00-59).');
                isValid = false;
            } else if (date) {
                var datepickerInstance = dateInput.data('datepicker');
                var selectedDate = datepickerInstance ? datepickerInstance.selectedDates[0] : null;

                if (selectedDate) {
                    var ampm = $form.find('input[name="ampm"]').val() || 'AM';
                    var compHours = hours;
                    if (ampm === 'PM' && hours < 12) {
                        compHours += 12;
                    } else if (ampm === 'AM' && hours === 12) {
                        compHours = 0;
                    }

                    var now = new Date();
                    var selectedDateTime = new Date(
                        selectedDate.getFullYear(),
                        selectedDate.getMonth(),
                        selectedDate.getDate(),
                        compHours,
                        minutes,
                        0, 0
                    );

                    if (selectedDateTime < now) {
                        showAppointmentError(timeInput, 'Selected time has already passed. Please choose a future time.');
                        isValid = false;
                    }
                }
            }
        }

        if (!service) {
            showAppointmentError(serviceSelect, 'Please select a service.');
            isValid = false;
        }

        if (!message) {
            showAppointmentError(messageTextarea, 'Message is required.');
            isValid = false;
        }

        if (isValid) {
            var whatsappNumber = "919997333292";
            var ampm = $form.find('input[name="ampm"]').val() || 'AM';

            var text = "Hello Herpreet,\n\n" +
                "I would like to book an appointment for an astrology consultation. Here are my booking details:\n\n" +
                "--- BOOKING DETAILS ---\n\n" +
                "Name: " + name + "\n" +
                "Email: " + email + "\n" +
                "Phone Number: " + phone + "\n" +
                "Selected Service: " + service + "\n" +
                "Appointment Date: " + date + "\n" +
                "Appointment Time: " + time + " " + ampm + "\n\n" +
                "Message:\n" + message + "\n\n" +
                "-----------------------\n" +
                "Thank you!";

            var whatsappUrl = "https://api.whatsapp.com/send?phone=" + whatsappNumber + "&text=" + encodeURIComponent(text);
            window.open(whatsappUrl, '_blank');

            $form[0].reset();
            if ($.fn.select2) {
                $form.find('select').val('').trigger('change');
            }
            // Reset AM/PM selector state to default (AM)
            $form.find('.as_ampm_btn').removeClass('active').css({
                'background': '#333333',
                'color': '#bbbbbb'
            });
            $form.find('.as_ampm_btn[data-value="AM"]').addClass('active').css({
                'background': 'var(--secondary-color)',
                'color': '#ffffff'
            });
        }
    });

    // Close Select2 dropdown on window scroll
    $(window).on('scroll', function () {
        if ($.fn.select2 && $('.as_select_box select').length) {
            $('.as_select_box select').select2('close');
        }
    });

})
$(window).on('load', function () {
    $('.as_loader').addClass('hide')
});