/* Validation form */
ValidationFormSelf("validation-newsletter");
ValidationFormSelf("validation-cart");
ValidationFormSelf("validation-user");
ValidationFormSelf("validation-contact");
/* Exists */
$.fn.exists = function(){
    return this.length;
};
BM_FRAMEWORK.HrefaLink = function () {
    $('a').each(function (index, element) {
        if (!$(this).attr('href') || $(this).attr('href') == '') {
            $(this).attr('href', CONFIG_BASE);
        }
    });
};
BM_FRAMEWORK.Lazys = function(){
    if($(".lazy").exists())
    {
        var lazyLoadInstance = new LazyLoad({
            elements_selector: ".lazy"
        });
    }
};
/* Paging ajax */
// if($(".paging-product").exists())
// {
//     loadPagingAjax("ajax/ajax_product.php?perpage=8",'.paging-product');
// }
/* Paging category ajax */
if($(".paging-product-category").exists())
{
    $(".paging-product-category").each(function(){
        var list = $(this).data("list");
        loadPagingAjax("ajax/ajax_product.php?perpage=10&idList="+list,'.paging-product-category-'+list);
    })
}
/* Paging category ajax list all */
// if($(".each-catalogy").exists())
// {
//     $('.each-catalogy').each(function(index, el) {
//         var list = $(this).data("list");
//         var type = $(this).data("type");
//         var dataReturn = $(this).data("return");
//         $(this).find('span:eq(0)').addClass('active');
//         loadPagingAjax("ajax/ajax_product.php?perpage="+PAGEINDEX+"&idList="+list+"&type="+type,'.paging-product-category-show'+dataReturn);        
//     });
//     $(document).on('click', '.get-product-category', function(event) {
//         var list = $(this).data("list");
//         var type = $(this).data("type");
//         var dataReturn = $(this).data("return");
//         $('.get-product-category').removeClass('active');
//         $(this).addClass('active');
//         loadPagingAjax("ajax/ajax_product.php?perpage="+PAGEINDEX+"&idList="+list+"&type="+type,'.paging-product-category-show'+dataReturn);
//     });
// }
/* Back to top */
BM_FRAMEWORK.BackToTop = function(){
    $(window).scroll(function(){
        if(!$('.scrollToTop').length) $("body").append('<div class="scrollToTop"><img src="'+GOTOP+'" alt="Go Top"/></div>');
        if($(this).scrollTop() > 100) $('.scrollToTop').fadeIn();
        else $('.scrollToTop').fadeOut();
    });
    $('body').on("click",".scrollToTop",function() {
        $('html, body').animate({scrollTop : 0},800);
        return false; 
    });
};
/* Alt images */
BM_FRAMEWORK.AltImages = function(){
    $('img').each(function(index, element) {
        if(!$(this).attr('alt') || $(this).attr('alt')=='')
        {
            $(this).attr('alt',WEBSITE_NAME);
        }
    });
};
/* Fix menu */
BM_FRAMEWORK.FixMenu = function(){
    $(window).scroll(function(){
        if($(window).scrollTop() >= $(".header").height()) $(".menu").addClass('fix-menu');
        else $(".menu").removeClass('fix-menu');
    });
    $(window).scroll(function(){
        if($(window).scrollTop() >= $(".header").height()) $(".header").addClass('fix-header');
        else $(".header").removeClass('fix-header');
    });
};
/* Tools */
BM_FRAMEWORK.Tools = function(){
    if($(".toolbar").exists())
    {
        $(".footer").css({marginBottom:$(".toolbar").innerHeight()});
    }
};
/* Popup */
BM_FRAMEWORK.Popup = function(){
    if($("#popup").exists())
    {
        $('#popup').modal('show');
    }
};
/* Wow */
BM_FRAMEWORK.WowAnimation = function(){
    new WOW().init();
};
/* Mmenu */
BM_FRAMEWORK.Mmenu = function(){
    if($("nav#menu").exists())
    {
        $('nav#menu').mmenu({
            'extensions': [
                'fx-panels-zoom',
                'pagedim-black',
                'theme-dark',
            ],
            'counters': true,
            'iconbar': {
            'add': true,
            'top': [
                '<a href=\'#/\'><i class=\'fa fa-home\'></i></a>',
                '<a href=\'#/\'><i class=\'fa fa-user\'></i></a>',
            ],
            'bottom': [
                '<a href=\'#/\'><i class=\'fa fa-twitter\'></i></a>',
                '<a href=\'#/\'><i class=\'fa fa-facebook\'></i></a>',
                '<a href=\'#/\'><i class=\'fa fa-linkedin\'></i></a>',
            ],
            },
        });
    }
};
/* Toc */
BM_FRAMEWORK.Toc = function(){
    if($(".toc-list").exists())
    {
        $(".toc-list").toc({
            content: "div#toc-content",
            headings: "h2,h3,h4"
        });
        if(!$(".toc-list li").length) $(".meta-toc").hide();
        $('.toc-list').find('a').click(function(){
            var x = $(this).attr('data-rel');
            goToByScroll(x);
        });
    }
};
/* Simply scroll */
BM_FRAMEWORK.SimplyScroll = function(){
    if($(".newshome-scroll ul").exists())
    {
        $(".newshome-scroll ul").simplyScroll({
            customClass: 'vert',
            orientation: 'vertical',
            // orientation: 'horizontal',
            auto: true,
            manualMode: 'auto',
            pauseOnHover: 1,
            speed: 1,
            loop: 0
        });
    }
};
/* Tabs */
BM_FRAMEWORK.Tabs = function(){
    if($(".ul-tabs-pro-detail").exists())
    {
        $(".ul-tabs-pro-detail li").click(function(){
            var tabs = $(this).data("tabs");
            $(".content-tabs-pro-detail, .ul-tabs-pro-detail li").removeClass("active");
            $(this).addClass("active");
            $("."+tabs).addClass("active");
        });
    }
};
/* Photobox */
BM_FRAMEWORK.Photobox = function(){
    if($(".album-gallery").exists())
    {
        $('.album-gallery').photobox('a',{thumbs:true,loop:false});
    }
};
/* Datetime picker */
BM_FRAMEWORK.DatetimePicker = function(){
    if($('#ngaysinh').exists())
    {
        $('#ngaysinh').datetimepicker({
            timepicker: false,
            format: 'd/m/Y',
            formatDate: 'd/m/Y',
            minDate: '01/01/1950',
            maxDate: TIMENOW
        });
    }
};
/* Search */
BM_FRAMEWORK.Search = function(){
    if($(".icon-search").exists())
    {
        $(".icon-search").click(function(){
            if($(this).hasClass('active'))
            {
                $(this).removeClass('active');
                $(".search-grid").stop(true,true).animate({opacity: "0",width: "0px"}, 200);   
            }
            else
            {
                $(this).addClass('active');                            
                $(".search-grid").stop(true,true).animate({opacity: "1",width: "230px"}, 200);
            }
            document.getElementById($(this).next().find("input").attr('id')).focus();
            $('.icon-search i').toggleClass('fa fa-search fa fa-times');
        });
    }
    if($(".icon-search1").exists())
    {
        $(".icon-search1").click(function(){
            if(!$(this).hasClass('active')){
                $(this).addClass('active');
                $('.search').addClass('active');
            }else{
                $(this).removeClass('active');
                $('.search').removeClass('active');
            }
        });
    }
};
/* Videos */
BM_FRAMEWORK.Videos = function(){
    /* Fancybox */
    // $('[data-fancybox="something"]').fancybox({
    //     // transitionEffect: "fade",
    //     // transitionEffect: "slide",
    //     // transitionEffect: "circular",
    //     // transitionEffect: "tube",
    //     // transitionEffect: "zoom-in-out",
    //     // transitionEffect: "rotate",
    //     transitionEffect: "fade",
    //     transitionDuration: 800,
    //     animationEffect: "fade",
    //     animationDuration: 800,
    //     slideShow: {
    //         autoStart: true,
    //         speed: 3000
    //     },
    //     arrows: true,
    //     infobar: false,
    //     toolbar: false,
    //     hash: false
    // });
    if($(".video").exists())
    {
        $('[data-fancybox="video"]').fancybox({
            transitionEffect: "fade",
            transitionDuration: 800,
            animationEffect: "fade",
            animationDuration: 800,
            arrows: true,
            infobar: false,
            toolbar: true,
            hash: false
        });
    }
};
/* Owl */
BM_FRAMEWORK.OwlPage = function(){
    if($(".owl-slideshow").exists())
    {
        $('.owl-slideshow').owlCarousel({
            items: 1,
            rewind: true,
            autoplay: true,
            loop: false,
            lazyLoad: false,
            mouseDrag: false,
            touchDrag: false,
            animateIn: 'animate__animated animate__fadeInLeft',
            animateOut: 'animate__animated animate__fadeOutRight',
            margin: 0,
            smartSpeed: 500,
            autoplaySpeed: 3500,
            nav: false,
            dots: false
        });
        $('.prev-slideshow').click(function() {
            $('.owl-slideshow').trigger('prev.owl.carousel');
        });
        $('.next-slideshow').click(function() {
            $('.owl-slideshow').trigger('next.owl.carousel');
        });
    }
    if($(".owl-brand").exists())
    {
        $('.owl-brand').owlCarousel({
            items: 7,
            rewind: true,
            autoplay: true,
            loop: false,
            lazyLoad: false,
            mouseDrag: true,
            touchDrag: true,
            margin: 10,
            smartSpeed: 250,
            autoplaySpeed: 1000,
            nav: false,
            dots: false,
            responsiveClass:true,
            responsiveRefreshRate: 200,
            responsive: {
                0: {
                    items: 7,
                    margin: 10
                }
            }
        });
        $('.prev-brand').click(function() {
            $('.owl-brand').trigger('prev.owl.carousel');
        });
        $('.next-brand').click(function() {
            $('.owl-brand').trigger('next.owl.carousel');
        });
    }
    if($(".owl-partner").exists())
    {
        $('.owl-partner').owlCarousel({
            items: 6,
            rewind: true,
            autoplay: true,
            loop: false,
            lazyLoad: false,
            mouseDrag: true,
            touchDrag: true,
            margin: 10,
            smartSpeed: 250,
            autoplaySpeed: 1000,
            nav: false,
            dots: false,
            responsiveClass:true,
            responsiveRefreshRate: 200,
            responsive: {
                0: {
                    items: 2,
                    margin: 10
                },
                600: {
                    items: 3,
                    margin: 10
                },
                880: {
                    items: 4,
                    margin: 10
                },
                960: {
                    items: 5,
                    margin: 10
                },
                1024: {
                    items:6,
                    margin: 10
                }
            }
        });
        $('.prev-partner').click(function() {
            $('.owl-partner').trigger('prev.owl.carousel');
        });
        $('.next-partner').click(function() {
            $('.owl-partner').trigger('next.owl.carousel');
        });
    }
};
/* Owl Data */
BM_FRAMEWORK.OwlData = function(obj){
    if(!isExist(obj)) return false;
    var xsm_items = obj.attr("data-xsm-items");
    var sm_items = obj.attr("data-sm-items");
    var md_items = obj.attr("data-md-items");
    var lg_items = obj.attr("data-lg-items");
    var xlg_items = obj.attr("data-xlg-items");
    var rewind = obj.attr("data-rewind");
    var autoplay = obj.attr("data-autoplay");
    var loop = obj.attr("data-loop");
    var lazyLoad = obj.attr("data-lazyload");
    var mouseDrag = obj.attr("data-mousedrag");
    var touchDrag = obj.attr("data-touchdrag");
    var animations = obj.attr("data-animations");
    var smartSpeed = obj.attr("data-smartspeed");
    var autoplaySpeed = obj.attr("data-autoplayspeed");
    var autoplayTimeout = obj.attr("data-autoplaytimeout");
    var dots = obj.attr("data-dots");
    var nav = obj.attr("data-nav");
    var navText = false;
    var navContainer = false;
    var responsive = {};
    var responsiveClass = true;
    var responsiveRefreshRate = 200;

    if(xsm_items != '') { xsm_items = xsm_items.split(":"); }
    if(sm_items != '') { sm_items = sm_items.split(":"); }
    if(md_items != '') { md_items = md_items.split(":"); }
    if(lg_items != '') { lg_items = lg_items.split(":"); }
    if(xlg_items != '') { xlg_items = xlg_items.split(":"); }
    if(rewind == 1) { rewind = true; } else { rewind = false; };
    if(autoplay == 1) { autoplay = true; } else { autoplay = false; };
    if(loop == 1) { loop = true; } else { loop = false; };
    if(lazyLoad == 1) { lazyLoad = true; } else { lazyLoad = false; };
    if(mouseDrag == 1) { mouseDrag = true; } else { mouseDrag = false; };
    if(animations != '') { animations = animations; } else { animations = false; };
    if(smartSpeed > 0) { smartSpeed = Number(smartSpeed); } else { smartSpeed = 800; };
    if(autoplaySpeed > 0) { autoplaySpeed = Number(autoplaySpeed); } else { autoplaySpeed = 800; };
    if(autoplayTimeout > 0) { autoplayTimeout = Number(autoplayTimeout); } else { autoplayTimeout = 5000; };
    if(dots == 1) { dots = true; } else { dots = false; };
    if(nav == 1)
    {
        nav = true;
        navText = obj.attr("data-navtext");
        navContainer = obj.attr("data-navcontainer");

        if(navText != '')
        {
            navText = (navText.indexOf("|") > 0) ? navText.split("|") : navText.split(":");
            navText = [navText[0],navText[1]];
        }

        if(navContainer != '')
        {
            navContainer = navContainer;
        }
    }
    else
    {
        nav = false;
    };

    responsive = {
        0: {
            items: Number(xsm_items[0]),
            margin: Number(xsm_items[1])
        },
        576: {
            items: Number(sm_items[0]),
            margin: Number(sm_items[1])
        },
        768: {
            items: Number(md_items[0]),
            margin: Number(md_items[1])
        },
        992: {
            items: Number(lg_items[0]),
            margin: Number(lg_items[1])
        },
        1200: {
            items: Number(xlg_items[0]),
            margin: Number(xlg_items[1])
        }
    };

    obj.owlCarousel({
        rewind: rewind,
        autoplay: autoplay,
        loop: loop,
        lazyLoad: lazyLoad,
        mouseDrag: mouseDrag,
        touchDrag: touchDrag,
        smartSpeed: smartSpeed,
        autoplaySpeed: autoplaySpeed,
        autoplayTimeout: autoplayTimeout,
        dots: dots,
        nav: nav,
        navText: navText,
        navContainer: navContainer,
        responsiveClass: responsiveClass,
        responsiveRefreshRate: responsiveRefreshRate,
        responsive: responsive
    });

    if(autoplay)
    {
        obj.on("translate.owl.carousel", function(event){
            obj.trigger('stop.owl.autoplay');
        });

        obj.on("translated.owl.carousel", function(event){
            obj.trigger('play.owl.autoplay',[autoplayTimeout]);
        });
    }

    if(animations && isExist(obj.find("[owl-item-animation]")))
    {
        var animation_now = '';
        var animation_count = 0;
        var animations_excuted = [];
        var animations_list = (animations.indexOf(",")) ? animations.split(",") : animations;

        obj.on("changed.owl.carousel", function(event){
            $(this).find(".owl-item.active").find("[owl-item-animation]").removeClass(animation_now);
        });

        obj.on("translate.owl.carousel", function(event){
            var item = event.item.index;

            if(Array.isArray(animations_list))
            {
                var animation_trim = animations_list[animation_count].trim();

                if(!animations_excuted.includes(animation_trim))
                {
                    animation_now = 'animate__animated ' + animation_trim;
                    animations_excuted.push(animation_trim);
                    animation_count++;
                }
                
                if(animations_excuted.length == animations_list.length)
                {
                    animation_count = 0;
                    animations_excuted = [];
                }
            }
            else
            {
                animation_now = 'animate__animated ' + animations_list.trim();
            }
            $(this).find('.owl-item').eq(item).find('[owl-item-animation]').addClass(animation_now);
        });
    }
};

/* Owl Page */
BM_FRAMEWORK.OwlPage = function(){
    if(isExist($(".owl-page")))
    {
        $(".owl-page").each(function(){
            BM_FRAMEWORK.OwlData($(this));
        });
    }
};
/*Slick slider*/
BM_FRAMEWORK.slickPage = function(){
    if(isExist($(".slick-news")))
    {
        $('.slick-news').slick({
            infinite: true,
            slidesToShow: 3,
            autoplay:true,
            slidesToScroll: 1,
            vertical:true,
            arrows:false
        });
    }
}
/* Owl pro detail */
BM_FRAMEWORK.OwlProDetail = function(){
    if($(".owl-thumb-pro").exists())
    {
        $('.owl-thumb-pro').owlCarousel({
            items: 4,
            lazyLoad: false,
            mouseDrag: true,
            touchDrag: true,
            margin: 10,
            smartSpeed: 250,
            nav: false,
            dots: false
        });
        $('.prev-thumb-pro').click(function() {
            $('.owl-thumb-pro').trigger('prev.owl.carousel');
        });
        $('.next-thumb-pro').click(function() {
            $('.owl-thumb-pro').trigger('next.owl.carousel');
        });
    }
};
/* Cart */
BM_FRAMEWORK.Cart = function(){
    $("body").on("click",".addcart",function(){
        var mau = ($(".color-pro-detail input:checked").val()) ? $(".color-pro-detail input:checked").val() : 0;
        var size = ($(".size-pro-detail input:checked").val()) ? $(".size-pro-detail input:checked").val() : 0;
        var id = $(this).data("id");
        var action = $(this).data("action");
        var quantity = ($(".qty-pro").val()) ? $(".qty-pro").val() : 1;
        if(id)
        {
            $.ajax({
                url:'ajax/ajax_cart.php',
                type: "POST",
                dataType: 'json',
                async: false,
                data: {cmd:'add-cart',id:id,mau:mau,size:size,quantity:quantity},
                success: function(result){
                    if(action=='addnow')
                    {
                        $('.count-cart').html(result.max);
                        $.ajax({
                            url:'ajax/ajax_cart.php',
                            type: "POST",
                            dataType: 'html',
                            async: false,
                            data: {cmd:'popup-cart'},
                            success: function(result){
                                $("#popup-cart .modal-body").html(result);
                                $('#popup-cart').modal('show');
                            }
                        });
                    }
                    else if(action=='buynow')
                    {
                        window.location = CONFIG_BASE + "gio-hang";
                    }
                }
            });
        }
    });
    $("body").on("click",".del-procart",function(){
        if(confirm(LANG['delete_product_from_cart']))
        {
            var code = $(this).data("code");
            var ship = $(".price-ship").val();
            $.ajax({
                type: "POST",
                url:'ajax/ajax_cart.php',
                dataType: 'json',
                data: {cmd:'delete-cart',code:code,ship:ship},
                success: function(result){
                    $('.count-cart').html(result.max);
                    if(result.max)
                    {
                        $('.price-temp').val(result.temp);
                        $('.load-price-temp').html(result.tempText);
                        $('.price-total').val(result.total);
                        $('.load-price-total').html(result.totalText);
                        $(".procart-"+code).remove();
                    }
                    else
                    {
                        $(".wrap-cart").html('<a href="san-pham" class="empty-cart text-decoration-none"><i class="fa fa-cart-arrow-down"></i><p>'+LANG['no_products_in_cart']+'</p><span>Sản phẩm</span></a>');
                    }
                }
            });
        }
    });
    $("body").on("click",".counter-procart",function(){
        var $button = $(this);
        var input = $button.parent().find("input");
        var id = input.data('pid');
        var code = input.data('code');
        var oldValue = $button.parent().find("input").val();
        if($button.text() == "+") quantity = parseFloat(oldValue) + 1;
        else if(oldValue > 1) quantity = parseFloat(oldValue) - 1;
        $button.parent().find("input").val(quantity);
        update_cart(id,code,quantity);
    });
    $("body").on("change","input.quantity-procat",function(){
        var quantity = $(this).val();
        var id = $(this).data("pid");
        var code = $(this).data("code");
        update_cart(id,code,quantity);
    });
    if($(".select-city-cart").exists())
    {
        $(".select-city-cart").change(function(){
            var id = $(this).val();
            load_district(id);
            load_ship();
        });
    }
    if($(".select-district-cart").exists())
    {
        $(".select-district-cart").change(function(){
            var id = $(this).val();
            load_wards(id);
            load_ship();
        });
    }
    if($(".select-wards-cart").exists())
    {
        $(".select-wards-cart").change(function(){
            var id = $(this).val();
            load_ship(id);
        });
    }
    if($(".payments-label").exists())
    {
        $(".payments-label").click(function(){
            var payments = $(this).data("payments");
            $(".payments-cart .payments-label, .payments-info").removeClass("active");
            $(this).addClass("active");
            $(".payments-info-"+payments).addClass("active");
        });
    }
    if($(".color-pro-detail").exists())
    {
        $(".color-pro-detail").click(function(){
            $(".color-pro-detail").removeClass("active");
            $(this).addClass("active");
            var id_mau=$("input[name=color-pro-detail]:checked").val();
            var idpro=$(this).data('idpro');
            $.ajax({
                url:'ajax/ajax_color.php',
                type: "POST",
                dataType: 'html',
                data: {id_mau:id_mau,idpro:idpro},
                success: function(result){
                    if(result!='')
                    {
                        $('.left-pro-detail').html(result);
                        MagicZoom.refresh("Zoom-1");
                        BM_FRAMEWORK.OwlProDetail();
                    }
                }
            });
        });
    }
    if($('.checkgiamgia').exists()){
        $(".using_discount").click(function(event) {
            var code = $(this).parents('.form-cart').find('#magiamgia').val();
            var phone = $(this).parents('.form-cart').find('#dienthoai').val();
            var email = $(this).parents('.form-cart').find('#email').val();
            var ship = $(this).parents('.form-cart').find('.price-ship').val();
            var wards = $(this).parents('.form-cart').find('#wards').val();
            

            if(phone==''){
                $('.form-cart').find('#dienthoai').focus();
                return false;
            }
            if(email==''){
                $('.form-cart').find('#email').focus();
                return false;
            }
            if(wards < 1){
                alert('Vui lòng chọn địa điểm giao hàng');
                return false;
            }
            load_discount(phone,email,code,ship);

        });
    }
    if($(".size-pro-detail").exists())
    {
        $(".size-pro-detail").click(function(){
            $(".size-pro-detail").removeClass("active");
            $(this).addClass("active");
        });
    }
    if($(".quantity-pro-detail span").exists())
    {
        $(".quantity-pro-detail span").click(function(){
            var $button = $(this);
            var oldValue = $button.parent().find("input").val();
            if($button.text() == "+")
            {
                var newVal = parseFloat(oldValue) + 1;
            }
            else
            {
                if(oldValue > 1) var newVal = parseFloat(oldValue) - 1;
                else var newVal = 1;
            }
            $button.parent().find("input").val(newVal);
        });
    }
};
/* Load dom html */
BM_FRAMEWORK.loadDomHtml = function(){
    if($(".list-album").exists())
    {
        $('.click-album').click(function(event) {
            $('.click-album').removeClass('active');
            var id = $(this).data('id-album');
            var name = $(this).data('id-name');
            $(this).addClass('active');
            $.ajax({
                type: "POST",
                url:'ajax/loadDom.php',
                dataType: 'html',
                data: {id:id,name:name},
                success: function(result){
                    $('.album-content').html(result);
                }
            });   
        });
        $('.click-album:eq(0)').trigger('click');
    }
};
BM_FRAMEWORK.menuFixedTop = function(){
    // $nav = $('#menu-box');
    // $(window).scroll(function () {
    //     var h_slider = 0;
    //     var h_header = parseInt($('.header').height());
    //     if ($(this).scrollTop() > 350) {
    //         $nav.addClass("fixed-open");
    //         $nav.find('.menu-click-list').removeClass('active');
    //         $nav.find('.list-btn-position').removeClass('show');
    //     } else {
    //         $nav.removeClass("fixed-open");
    //         $nav.find('.menu-click-list').removeClass('active');
    //         $nav.find('.list-btn-position').removeClass('show');
    //     }
    // });
    $nav1 = $('.menu-click-list');
    $nav2 = $('.list-btn-position');
    $(window).scroll(function () {
        var h_slider = 0;
        var h_header = parseInt($('.header').height());
        if ($(this).scrollTop() > h_header) {
            // $nav1.removeClass("active");
            // $nav2.removeClass("show");
        } else {
            // $nav1.removeClass("active");
            // $nav2.addClass("show");
        }
    });
    $('.menu-click-list').click(function(event) {
        if(!$(this).hasClass('active')){
            $(this).addClass('active');
            $nav2.addClass('show');
        }else{
            $(this).removeClass('active');
            $nav2.removeClass('show');            
        }
    });
    $('.hover-show-messenger').hover(function() {
        $('.descs-messenger').addClass('open');
    }, function() {
        $('.descs-messenger').removeClass('open');
    });
}
BM_FRAMEWORK.sliderAnimation = function(){
    $('#logo_perspective_black').logo_perspective({
      skin: 'black',
      width: 1160,
      responsive:true,
      imageWidth:717,
      imageHeight:433,
      border:true,
      borderColorON:'#ffffff',
      showTooltip:false,
      elementsHorizontalSpacing:141,
      elementsVerticalSpacing:40,
      autoPlay: true,
      numberOfVisibleItems:5
  });  
};
BM_FRAMEWORK.sliderSwiperShowText = function(){
    var Swipes = new Swiper('.swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
        },
        autoplay: { delay: 5000, },
    });
};
BM_FRAMEWORK.sliderSwiperActiveCenter = function(){
    $('.slick-video-index').slick({
        centerMode: true,
        centerPadding: '345.5px',
        slidesToShow: 1,
        arrows:true
    });
    $('[data-fancybox="video"]').fancybox({
        transitionEffect: "fade",
        transitionDuration: 800,
        animationEffect: "fade",
        animationDuration: 800,
        arrows: true,
        infobar: false,
        toolbar: true,
        hash: false
    });
};
BM_FRAMEWORK.googleTranlate = function(){
    $(".drop-down-control").click(function(e) {
        e.stopPropagation();
        $(this).toggleClass('active').siblings().removeClass('active');
        if ($(".drop-down-control.active").length) {
            $("body").addClass('overflow-hidden');
        } else {
            $("body").removeClass('overflow-hidden');
        }
    });
    $(".drop-down-language > a").click(function(event) {
        event.preventDefault();
        alert($(this).attr('data-value'));
        BM_FRAMEWORK.doGoogleLanguageTranslator($(this).attr('data-value'));
        var _readCookie = BM_FRAMEWORK.readCookie('googtrans');
        var text_lang = $(this).attr('data-text');
        var flag = $(this).attr('style');
        $(".lang").text(text_lang);
        $(".drop-down-text-language").attr('style', flag);
    });
    $("#cbo_lang").change(function(event) {
        event.preventDefault();
        BM_FRAMEWORK.doGoogleLanguageTranslator($(this).val());
        var _readCookie = BM_FRAMEWORK.readCookie('googtrans');
        var text_lang = $(this).find("option:selected").attr('data-text');
        var flag = $(this).find("option:selected").attr('style');
        $(".lang").text(text_lang);
        $(".drop-down-text-language").attr('style', flag);
    });
    $(window).load(function() {
        var _readCookie = BM_FRAMEWORK.readCookie('googtrans');
        var selected = (_readCookie !== undefined) ? _readCookie.split("/") : '';
        $(".drop-down-language  a").each(function(index, el) {
            var data_lang = $(this).attr('data-value').split("|");
            if (data_lang[1] == selected[2]) {
                var text_lang = $(this).attr('data-text');
                var flag = $(this).attr('style');
                $(".lang").text(text_lang);
                $(".drop-down-text-language").attr('style', flag);
                return false;
            }
        });
        $("#cbo_lang option").each(function(index, el) {
            var data_lang = $(this).val().split("|");
            if (data_lang[1] == selected[2]) {
                var text_lang = $(this).find('option:selected').attr('data-text');
                var flag = $(this).find('option:selected').attr('style');
                $(this).prop('selected', 'selected');
                $(".lang").text(text_lang);
                $(".drop-down-text-language").attr('style', flag);
                return false;
            }
        });
    });
}
BM_FRAMEWORK.readCookie = function(name) {
    var c = document.cookie.split('; '),
        cookies = {},
        i, C;
    for (i = c.length - 1; i >= 0; i--) {
        C = c[i].split('=');
        cookies[C[0]] = C[1];
    }
    console.log(cookies[name]);
    return cookies[name];
}
BM_FRAMEWORK.GTranslateFireEvent = function (a, b) {
    try {
        if (document.createEvent) {
            var c = document.createEvent("HTMLEvents");
            c.initEvent(b, true, true);
            a.dispatchEvent(c)
        } else {
            var c = document.createEventObject();
            a.fireEvent('on' + b, c)
        }
    } catch(e) {}
}
BM_FRAMEWORK.doGoogleLanguageTranslator = function (a) {
    if (a.value) a = a.value;
    if (a == '') return;
    var b = a.split('|')[1];
    var c;
    var d = document.getElementsByTagName('select');
    for (var i = 0; i < d.length; i++) if (d[i].className == 'goog-te-combo') c = d[i];
    if (document.getElementById('google_language_translator') == null || document.getElementById('google_language_translator').innerHTML.length == 0 || c.length == 0 || c.innerHTML.length == 0) {
        setTimeout(function () {
            BM_FRAMEWORK.doGoogleLanguageTranslator(a)
        },
        100)
    } else {
        c.value = b;
        BM_FRAMEWORK.GTranslateFireEvent(c, 'change');
        BM_FRAMEWORK.GTranslateFireEvent(c, 'change')
    }
};
BM_FRAMEWORK.checkStepProduct = function(){
    $(document).on('click', '.check-ok', function(event) {
        event.preventDefault();
        var id = $(this).data('idpro');
        var step = $(this).data('step');
        $.ajax({
            type: "POST",
            url:'ajax/checkProduct.php',
            dataType: 'html',
            data: {id:id,step:step},
            success: function(result){
                $('.check-form-content-return').html(result);
                $('.check-form-content span').removeClass('active');
                $('.check-form-content span:eq('+(step - 1)+')').addClass('active');
            }
        }); 
    });
    $(document).on('click', '.check-no', function(event) {
        location.href='check';
    });
    $('.get-data').removeClass('active');
    $('.slick-news-index .slick-current').find('.get-data').addClass('active');
    var photo = $('.slick-news-index .slick-current').find('.get-data').data('photo');
    var name = $('.slick-news-index .slick-current').find('.get-data').data('name');
    $('.change-img-news').attr({
        src: photo,
        alt: name
    });
    $('.slick-news-index').on('afterChange', function(event, slick, currentSlide, nextSlide){
        console.log(nextSlide);
        $('.get-data').removeClass('active');
        $('.slick-news-index .slick-current').find('.get-data').addClass('active');
        var photo = $('.slick-news-index .slick-current').find('.get-data').data('photo');
        var name = $('.slick-news-index .slick-current').find('.get-data').data('name');
        $('.change-img-news').attr({
            src: photo,
            alt: name
        });
    });
}
/* Ready */
$(document).ready(function(){
    // BM_FRAMEWORK.HrefaLink();
    BM_FRAMEWORK.Tools();
    BM_FRAMEWORK.Lazys();
    BM_FRAMEWORK.Popup();
    BM_FRAMEWORK.WowAnimation();
    BM_FRAMEWORK.AltImages();
    BM_FRAMEWORK.BackToTop();
    BM_FRAMEWORK.FixMenu();
    BM_FRAMEWORK.Mmenu();
    BM_FRAMEWORK.OwlPage();
    BM_FRAMEWORK.slickPage();
    BM_FRAMEWORK.OwlProDetail();
    BM_FRAMEWORK.Toc();
    BM_FRAMEWORK.Cart();
    BM_FRAMEWORK.SimplyScroll();
    BM_FRAMEWORK.Tabs();
    BM_FRAMEWORK.Videos();
    BM_FRAMEWORK.Photobox();
    BM_FRAMEWORK.Search();
    BM_FRAMEWORK.DatetimePicker();
    BM_FRAMEWORK.loadDomHtml();
    BM_FRAMEWORK.menuFixedTop();
    //BM_FRAMEWORK.sliderAnimation();
    BM_FRAMEWORK.sliderSwiperShowText();
    BM_FRAMEWORK.sliderSwiperShowText();
    BM_FRAMEWORK.sliderSwiperActiveCenter();
    //BM_FRAMEWORK.GoogleLanguageTranslatorInit();
   // BM_FRAMEWORK.googleTranlate();
   BM_FRAMEWORK.checkStepProduct();
});