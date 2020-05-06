$(function () {

    // title scroll event
    var $contents = $("section");

    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        $contents.each(function () {
            if($(this).offset().top - 500 <= scrollTop){
                $(this).find(".hide").addClass("active");
            };
        });
    });

    




    //배너 슬라이드
    // var $slideshow = $(".slideshow"),
    //     $slideGroup = $slideshow.find(".slideshow_slides"),
    //     $banner = $slideGroup.children("div"),
    //     bannerCount = $banner.length;

    // var $pagination = $slideshow.find(".current"),
    //      $slideNav = $slideshow.find(".slideshow_nav");

    // var currentIndex = 0;   
    // var timer;

    // function goToSlide(index){
    //     barWidth = $pagination.outerWidth();
    //     $slideGroup.stop().animate({left: -100 * index + "%"});
    //     $pagination.stop().animate({left: barWidth * index + "px"});
    //     currentIndex = index;
    //     updateNav();
    // };

    // $slideNav.find("button").click(function (e) {
    //     e.preventDefault();
    //     if($(this).hasClass("prev")){
    //         goToSlide(currentIndex - 1);
    //     }else{
    //         goToSlide(currentIndex + 1);
    //     }
    // });

    // function updateNav () {
    //     var $navPrev = $slideNav.find(".prev"),
    //          $navNext = $slideNav.find(".next");
    //     var w =$(window).width();
    //     if(currentIndex == 0){
    //         $navPrev.css({display:"none"});
    //     }else {
    //         $navPrev.css({display:"block"});
    //     };
    //     if(currentIndex == bannerCount - 1){
    //         $navNext.css({display:"none"});
    //     }else {
    //         $navNext.css({display:"block"});
    //     };

    //     if(w <= 600){
    //         $slideNav.css({display:"none"});
    //     }
    // };
    // updateNav();

    // function nextSlide () {
    //     var nextIndex = (currentIndex + 1) % bannerCount;
    //     goToSlide(nextIndex);
    // };

    // timer = window.setInterval(nextSlide, 3000);
    
    // $slideshow.hover(function () {
    //     clearInterval(timer);
    // }, function () {
    //     timer = window.setInterval(nextSlide, 3000);
    // });

    // product tab-menu 

    var $tabAnchor = $(".product_tab li"),
        $productInfor = $(".product_infor ul li"),
        $productList = $(".product_list");

    var $productNav = $(".slideshow_nav"),
        $next = $productNav.find(".next"),
        $prev = $productNav.find(".prev");

    var slideIndex = 0,
        listIndex = 0;

    $tabAnchor.each( function (index) {
        $(this).attr("data-index", index);
    });
   
    $tabAnchor.click(function (e) {
        e.preventDefault();
        
        $tabAnchor.removeClass("on");
        $(this).addClass("on");
    
        $productInfor.hide();
        $productList.hide();
        $productList.css({"left":0});
    
        slideIndex = $(this).attr("data-index");
        $productInfor.eq(slideIndex).show();
        $productList.eq(slideIndex).show();
        
        if(!listIndex == 0){listIndex = 0;}

        removeNav();
    });

    $tabAnchor.eq(0).trigger("click");

    var slideWidth = $productList.outerWidth() / 6;
   
    $(window).resize(function () {
        slideWidth = $productList.outerWidth() / 6;
        $productList.css({left:0});
        listIndex = 0;
        removeNav();
    });
    

    function moveToSlide (slideIndex, index) {
        $productList.eq(slideIndex).animate({left: -1 * slideWidth * index + "px"});
        listIndex = index;
        removeNav();
    };

    $productNav.find("div").click(function (e) {
        e.preventDefault();
        if($(this).hasClass("prev")){
            moveToSlide(slideIndex, listIndex - 1);
        }else{
            moveToSlide(slideIndex, listIndex + 1);
        }
        
    });

    function removeNav () {
        var productCount = $productList.eq(slideIndex).children().length;
        var w =$(window).width();
        if(w <= 480){
            if(listIndex == productCount - 1){
                $next.css({display:"none"});
            } else {
                $next.css({display:"block"});            }
            };
        if(w <= 768 && w > 480){
            if(listIndex == productCount - 2){
                $next.css({display:"none"});
            } else {
                $next.css({display:"block"});
            };
        } if(w > 768) {
            if(listIndex == productCount - 3){
                $next.css({display:"none"});
            } else {
                $next.css({display:"block"});
            };
        }
        if (listIndex == 0){
            $prev.css({display:"none"});
        } else {
            $prev.css({display:"block"});
        }
    };
    removeNav();
    
    
    // news hover
    // var $newsContents = $(".news_contents > div");

    // $newsContents.hover(function () {
    //     $(this).find(".contents_title").addClass("active");
    //     $(this).find(".overlay").addClass("active");
    //     $(this).find("img").addClass("active");
    // },function () {
    //     $(this).find(".contents_title").removeClass("active");
    //     $(this).find(".overlay").removeClass("active");
    //     $(this).find("img").removeClass("active");
    // });


   // notice rolling
//    var $notice = $(".notice_rolling"),
//         rolling = $notice.find(".rolling");

//     var rollingTimer;

//     rollingTimer = window.setInterval(doRolling, 2000);

//     function doRolling () {
//         rolling.css({"transition":"0.4s",top:"-2em"});

//         window.setTimeout(function () {
//             rolling.removeAttr("style");
//             rolling.append(rolling.children().first());
//         }, 400); 
//     };

//     $notice.hover(function () {
//         clearInterval(rollingTimer);
//     }, function() {
//         rollingTimer = window.setInterval(doRolling, 2000);
//     });

});
