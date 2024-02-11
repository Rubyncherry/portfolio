$(function(){

    
    new WOW().init();

    
    let img1 = $('.sec .img1'),img2 = $('.sec .imgList .img2'), img3 = $('.sec .img3'),img4 = $('.sec .img4'), btnMenu = $('.headerWrap .btnMenu');



    btnMenu.click(function(){
        if(!$(this).hasClass('on')){
            $(this).addClass('on')
            $('.sideMenu').stop().animate({"right":"0"},500)
        }else{
            $(this).removeClass('on');
            $('.sideMenu').stop().animate({"right":"-390px"},500)
        }
    })



    img1.hover(function(){
        $(this).stop().animate({"top":"63px"},300,'swing')
    },function(){
        $(this).stop().animate({"top":"83px"},300,'swing')
    })

    img2.hover(function(){
        $(this).stop().animate({"bottom":"15px"},300,'swing')
    },function(){
        $(this).stop().animate({"bottom":"0"},300,'swing')
    })

    img3.hover(function(){
        $(this).stop().animate({"top":"30px"},300,'swing')
    },function(){
        $(this).stop().animate({"top":"50px"},300,'swing')
    })

    img4.hover(function(){
        $(this).stop().animate({"top":"60px"},300,'swing')
    },function(){
        $(this).stop().animate({"top":"80px"},300,'swing')
    })


})