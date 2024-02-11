$(function(){

    // 데스크탑 

let oneDepth = $('#header .gnb > li'),
    twoDepth = $(oneDepth).children('.twoD'),
    thrBtn = $(twoDepth).find('.thrBt'),
    gnbBg = $('#header .gnbBg'),
    leftArea = $('#header .leftArea'),
    header = $('#header');


    oneDepth.mouseenter(function(){
        $(this).addClass('on');
        twoDepth.show();
        gnbBg.show();
        leftArea.show();
    })

    oneDepth.mouseleave(function(){
        $(this).removeClass('on');
        twoDepth.hide();
        gnbBg.hide();
        leftArea.hide();
    })

    
    let longH = gnbBg.height() + 70, orgH =gnbBg.height();

    thrBtn.click(function(){
        
        if(!$(this).hasClass('on')){
            $(this).addClass('on');
            $(this).next('.thrD').hide();
            gnbBg.css('height', orgH);
            
        }else{
            $(this).removeClass('on');
            $(this).next('.thrD').show();
            gnbBg.css('height',longH);
        }
    })

    let mainCon1Li = $('.mainCon1List > li'), mainCon1Bg = $('.mainCon1Bg > div');

    mainCon1Bg.hide();
    mainCon1Li.each(function(idx){
        $(this).hover(function(){
            mainCon1Bg.eq(idx).stop().fadeIn(600);
        }, function(){
            mainCon1Bg.eq(idx).stop().fadeOut(300);
        });
    })


    let topBtn = $('.topBtn');

    topBtn.click(function(){
        $('html, body').animate({'scrollTop': '0'},600);
    })

// 모바일

    let openBtn = $('.mHeader .menuBtn'), mMArea = $('.mMenuArea'), closeBtn = mMArea.find('.closeBt'), oneD = $('.gnbArea').children('.oneD'),twoD = $('.gnbArea').children('.twoD'), thrBt = $(twoD).children('.thrBt'), thrD = twoD.children('.thrD');

    openBtn.click(function(){
        mMArea.animate({'left':'0'},600)
    })

    closeBtn.click(function(){
        mMArea.animate({'left':'-100%'},600)
    })

    oneD.click(function(){
        twoD.slideUp();
        oneD.removeClass('on');
        if(!$(this).next('.twoD').is(':visible')){
            $(this).next('.twoD').slideDown();
            $(this).addClass('on');
        }else{
            twoD.slideUp();
        }
    })

    thrBt.click(function(){
        if(!$(this).hasClass('on')){
            $(this).next(thrD).hide()
            $(this).addClass('on')
        }else{
            $(this).next().show()
            $(this).removeClass('on')
        }
    })


// 스크롤 애니메이션

    $(window).scroll(function(){
        let winScrollT = $(window).scrollTop(),
        mCon1T = $('.mainCon1').offset().top,
        mCon2T = $('.mainCon2').offset().top,
        mCon3T = $('.mainCon3').offset().top;
        footT = $('#footer').offset().top;


        if( winScrollT >= mCon1T  &&  winScrollT <= mCon2T){
            $('.mainCon1 .mainTit').animate({'opacity' : 1, 'top' : '0'},600,'swing');
            $('.mainCon1 .mainTxt').delay(200).animate({'opacity' : 1, 'top' : '0'},600,'swing');
            $('.mainCon1 .mainCon1List').delay(400).animate({'opacity' : 1, 'top' : '0'},600,'swing');
        }else if(winScrollT >= mCon2T &&  winScrollT <= mCon3T){
            $('.mainCon2 .mainTit').animate({'opacity' : 1, 'top' : '0'},600,'swing');
            $('.mainCon2 .mainTxt').delay(200).animate({'opacity' : 1, 'top' : '0'},600,'swing');
            $('.mainCon2 .mainCon2List').delay(400).animate({'opacity' : 1, 'top' : '0'},600,'swing');

        }else if(winScrollT >= mCon3T &&  winScrollT <= footT){
            $('.mainCon3 .mainTit').animate({'opacity' : 1, 'top' : '0'},600,'swing');
            $('.mainCon3 .mainTxt').delay(200).animate({'opacity' : 1, 'top' : '0'},600,'swing');
            $('.mainCon3 .mainNews').delay(400).animate({'opacity' : 1, 'top' : '0'},600,'swing');
        }  

        if(winScrollT > 20){
            $('#header').css('position','fixed');
            $('#header').addClass('on');
        }else{
            $('#header').css('position','relative');
            $('#header').removeClass('on');

        }
    })


    var swiper = new Swiper(".mainSlide", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });




})