//==========================header gnb
const header = document.querySelector('.header')
const hMenu = header.querySelector('.hMenu')


/* hMenu.addEventListener('mouseenter',function(){
    this.parentNode.parentNode.classList.add('open')
})
hMenu.addEventListener('mouseleave',function(){
    this.parentNode.parentNode.classList.remove('open')
}) */

hMenu.addEventListener('mouseenter',function(){
    header.classList.add('open')
})
header.addEventListener('mouseleave',function(){
    this.classList.remove('open')
})

//======================topSearch
const topSearch = document.querySelector('.topSearch')
const srch = document.querySelector('.srch')
const close = document.querySelector('.close')


srch.addEventListener('click',function(){
    topSearch.classList.add('open')
})

close.addEventListener('click',function(){
    topSearch.classList.remove('open')
})


//=========================go to top

const aside = document.querySelector('.aside')
const btnTop = aside.querySelector('.btnTop')

window.addEventListener('scroll',function(){
    let docScrllT = document.querySelector('html').scrollTop
    
    if(docScrllT > 100){
        aside.style.display = 'block'
    }else{aside.style.display = 'none'}
})

btnTop.addEventListener('click',function(){
    window.scrollTo({
        top : 0,
        left : 0,
        behavior : 'smooth'
    });
})

