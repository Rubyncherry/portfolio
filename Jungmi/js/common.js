alert('안녕하세요.\n 제가 처음으로 작업한 홈페이지에 방문하신것을 환영합니다!. \n본 사이트는 중미산천문대 홈페이지를 리뉴얼한 사이트입니다. \n코딩을 배우는 중 처음으로 제작한 개인홈페이지로 PC접속을 추천드립니다. 모바일로 접속시 사이트 이미지가 깨지거나 정렬이 바뀌는 등 오류가 발생할 수 있습니다.\n\n \n즐거운 하루되세요. ;D')



/* 헤더 */
const header = document.querySelector('#header')
const wrap = document.querySelector('#header .wrap')

header.addEventListener('mouseenter',function(){
    wrap.classList.add('open')
})

header.addEventListener('mouseleave',function(){
    wrap.classList.remove('open');
})


/* 프로그램 탭메뉴 */
const tabBtn = document.querySelectorAll('.tabBtn .btn')
const tabConts = document.querySelectorAll('.tabCon .con')

tabBtn.forEach(function(ele,idx){
    ele.addEventListener('click',openTabs)
})

function openTabs(ele){
    const btnTarget = ele.currentTarget;
    const dataTab = btnTarget.dataset.tabcon

    tabBtn.forEach(function(ele){
        ele.classList.remove('active')
    })

    tabConts.forEach(function(ele){
        ele.classList.remove('active')
    })

    btnTarget.classList.add('active')
    document.querySelector('#' + dataTab).classList.add('active')
}


/* 오른쪽 고정메뉴 */
$(function(){
    $('.tock').click(function(){
        alert('톡톡문의로 연결됩니다.')
    })
    
    let goToTop = $('.goToTop');

    goToTop.click(function(){
        $('html, body').animate({'scrollTop': '0'},600);
    })

})